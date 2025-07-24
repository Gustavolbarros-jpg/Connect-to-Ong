import { jest, describe, it, expect, beforeAll, afterEach } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import nodemailer from 'nodemailer';
import passport from 'passport'; // Import adicionado
import crypto from 'crypto';
import authRouter from '../src/auth/auth.js';
import { Mongo } from '../src/database/mongo.js';

// --- Configuração do App de Teste ---
const app = express();
app.use(express.json());
app.use(passport.initialize()); // <-- LINHA ADICIONADA: Inicializa o passport
app.use('/auth', authRouter);

// --- Mocking (Simulação) de Módulos Externos ---

// 1. Mock do Nodemailer
const mockSendMail = jest.fn().mockResolvedValue({ response: '250 OK' });
jest.spyOn(nodemailer, 'createTransport').mockReturnValue({
    sendMail: mockSendMail,
});

// 2. Mock do Crypto
const mockPbkdf2 = jest.spyOn(crypto, 'pbkdf2');

// 3. Mock do Banco de Dados
const mockCollection = {
    findOne: jest.fn(),
    insertOne: jest.fn(),
    updateOne: jest.fn(),
    deleteOne: jest.fn(),
};

// --- Ciclo de Vida dos Testes ---

beforeAll(() => {
    Mongo.db = {
        collection: jest.fn().mockReturnValue(mockCollection),
    };
});

afterEach(() => {
    jest.clearAllMocks();
});

// --- Conjunto de Testes ---

describe('Rotas de Autenticação - /auth', () => {

    describe('POST /auth/signup', () => {
        it('deve criar um novo usuário com sucesso e retornar 201', async () => {
            mockCollection.findOne.mockResolvedValue(null);
            mockCollection.insertOne.mockResolvedValue({ insertedId: 'mock-id-123' });

            const newUser = {
                fullname: 'Teste User',
                email: 'test@example.com',
                password: 'password123',
                institution: 'Test Institution'
            };

            const response = await request(app).post('/auth/signup').send(newUser);
            
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('status', 'PENDING');
            expect(mockSendMail).toHaveBeenCalled();
        });

        it('deve retornar 400 se faltarem campos obrigatórios', async () => {
            const response = await request(app).post('/auth/signup').send({ email: 'test@example.com' });
            expect(response.statusCode).toBe(400);
        });
        
        it('deve retornar 409 se o e-mail já existir', async () => {
            mockCollection.findOne.mockResolvedValueOnce({ email: 'existing@example.com' });

            const response = await request(app).post('/auth/signup').send({
                fullname: 'Another User',
                email: 'existing@example.com',
                password: 'password123',
                institution: 'Another Inst'
            });

            expect(response.statusCode).toBe(409);
        });
    });

    describe('POST /auth/login', () => {
        const mockSalt = crypto.randomBytes(16);
        const mockHashedPassword = crypto.pbkdf2Sync('password123', mockSalt, 310000, 32, 'sha256');
        const mockUser = {
            _id: 'user-id-123',
            email: 'user@example.com',
            password: mockHashedPassword,
            salt: mockSalt,
            verified: true
        };

        it('deve autenticar um usuário com credenciais válidas e retornar um token', async () => {
            mockCollection.findOne.mockResolvedValue(mockUser);
            mockPbkdf2.mockImplementation((password, salt, ...args) => {
                const callback = args[args.length - 1];
                const hash = crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256');
                callback(null, hash);
            });

            const response = await request(app)
                .post('/auth/login')
                .send({ email: 'user@example.com', password: 'password123' });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
            expect(response.body.message).toBe('Login realizado com sucesso');
        });

        it('deve retornar 401 para senha incorreta', async () => {
            mockCollection.findOne.mockResolvedValue(mockUser);

            const response = await request(app)
                .post('/auth/login')
                .send({ email: 'user@example.com', password: 'wrongpassword' });

            expect(response.statusCode).toBe(401);
            expect(response.body.message).toBe('Credenciais inválidas.');
        });

        it('deve retornar 401 se o usuário não estiver verificado', async () => {
            mockCollection.findOne.mockResolvedValue({ ...mockUser, verified: false });

            const response = await request(app)
                .post('/auth/login')
                .send({ email: 'user@example.com', password: 'password123' });

            expect(response.statusCode).toBe(401);
            expect(response.body.message).toBe('Por favor, verifique seu e-mail antes de fazer login.');
        });
    });

    describe('POST /auth/forgot-password', () => {
        it('deve enviar um e-mail de recuperação e retornar 200 se o usuário existir', async () => {
            mockCollection.findOne.mockResolvedValueOnce({ email: 'user@example.com', _id: 'user-id-123' });

            const response = await request(app)
                .post('/auth/forgot-password')
                .send({ email: 'user@example.com' });

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toContain('um link de recuperação foi enviado');
            expect(mockCollection.updateOne).toHaveBeenCalled();
            expect(mockSendMail).toHaveBeenCalled();
        });

        it('deve retornar 200 mesmo se o usuário não existir, por segurança', async () => {
            mockCollection.findOne.mockResolvedValueOnce(null);

            const response = await request(app)
                .post('/auth/forgot-password')
                .send({ email: 'nonexistent@example.com' });

            expect(response.statusCode).toBe(200);
            expect(mockSendMail).not.toHaveBeenCalled();
        });
    });

    describe('POST /auth/reset-password/:token', () => {
        it('deve redefinir a senha com um token válido', async () => {
            const validToken = 'valid-reset-token';
            const userWithToken = {
                _id: 'user-id-123',
                resetPasswordToken: validToken,
                resetPasswordExpires: new Date(Date.now() + 3600000)
            };
            mockCollection.findOne.mockResolvedValueOnce(userWithToken);

            const response = await request(app)
                .post(`/auth/reset-password/${validToken}`)
                .send({ password: 'newpassword123' });

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('Senha redefinida com sucesso!');
            expect(mockCollection.updateOne).toHaveBeenCalled();
        });

        it('deve retornar 400 com um token inválido ou expirado', async () => {
            mockCollection.findOne.mockResolvedValueOnce(null);

            const response = await request(app)
                .post('/auth/reset-password/invalid-token')
                .send({ password: 'newpassword123' });

            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe('Token de recuperação inválido ou expirado.');
        });
    });
});