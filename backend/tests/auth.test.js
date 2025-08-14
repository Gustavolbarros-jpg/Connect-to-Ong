import { jest, describe, it, expect, afterEach } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import passport from 'passport';
import crypto from 'crypto';

jest.unstable_mockModule('../src/prisma/prismaClient.js', () => ({
    default: {
        users: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            findFirst: jest.fn(),
        }
    }
}));

jest.unstable_mockModule('nodemailer', () => ({
    default: {
        createTransport: jest.fn(() => ({
            sendMail: jest.fn(() => Promise.resolve()),
        })),
    }
}));

const { default: authRouter } = await import('../src/auth/auth.js');
const { default: prisma } = await import('../src/prisma/prismaClient.js');

// --- Configuração do App de Teste ---
const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/auth', authRouter);


// --- Ciclo de Vida dos Testes ---
afterEach(() => {
    jest.clearAllMocks();
});

// --- Conjunto de Testes ---
describe('Rotas de Autenticação - /auth', () => {

    describe('POST /auth/signup', () => {
        it('deve criar um novo usuário com sucesso e retornar 201', async () => {
            prisma.users.findUnique.mockResolvedValue(null);
            prisma.users.create.mockResolvedValue({ id: 'mock-id-123' });

            const newUser = {
                fullname: 'Teste User',
                email: 'test@example.com',
                password: 'password123',
                institution: 'Test Institution'
            };

            const response = await request(app).post('/auth/signup').send(newUser);
            
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe('Cadastro realizado com sucesso! Você já pode fazer login.');
        });

        it('deve retornar 409 se o e-mail já existir', async () => {
            prisma.users.findUnique.mockResolvedValue({ email: 'existing@example.com' });

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
        const mockUser = {
            id: 'user-id-123',
            email: 'user@example.com',
            password: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2',
            salt: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
            verified: true
        };

        it('deve autenticar um usuário com credenciais válidas e retornar um token', async () => {
            prisma.users.findUnique.mockResolvedValue(mockUser);
            jest.spyOn(crypto, 'pbkdf2').mockImplementation((password, salt, iterations, keylen, digest, callback) => {
                callback(null, Buffer.from(mockUser.password, 'hex'));
            });

            const response = await request(app)
                .post('/auth/login')
                .send({ email: 'user@example.com', password: 'password123' });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('token');
        });

        it('deve retornar 401 para credenciais inválidas', async () => {
            prisma.users.findUnique.mockResolvedValue(null);

            const response = await request(app)
                .post('/auth/login')
                .send({ email: 'wrong@example.com', password: 'wrongpassword' });

            expect(response.statusCode).toBe(401);
        });
    });

    describe('POST /auth/forgot-password', () => {
        it('deve enviar um e-mail de recuperação e retornar 200 se o usuário existir', async () => {
            prisma.users.findUnique.mockResolvedValue({ email: 'user@example.com', id: 'user-id-123' });
            prisma.users.update.mockResolvedValue({});

            const response = await request(app)
                .post('/auth/forgot-password')
                .send({ email: 'user@example.com' });

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toContain('Se um usuário com este e-mail existir, um link de recuperação foi enviado.');
        });

        it('deve retornar 200 mesmo se o usuário não existir', async () => {
            prisma.users.findUnique.mockResolvedValue(null);

            const response = await request(app)
                .post('/auth/forgot-password')
                .send({ email: 'nonexistent@example.com' });

            expect(response.statusCode).toBe(200);
        });
    });

    describe('POST /auth/reset-password/:token', () => {
        it('deve redefinir a senha com um token válido', async () => {
            const validToken = 'valid-reset-token';
            const userWithToken = {
                id: 'user-id-123',
                resetPasswordToken: validToken,
                resetPasswordExpires: new Date(Date.now() + 3600000)
            };
            prisma.users.findFirst.mockResolvedValue(userWithToken);
            prisma.users.update.mockResolvedValue({});

            const response = await request(app)
                .post(`/auth/reset-password/${validToken}`)
                .send({ password: 'newpassword123' });

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('Senha redefinida com sucesso!');
        });

        it('deve retornar 400 com um token inválido ou expirado', async () => {
            prisma.users.findFirst.mockResolvedValue(null);

            const response = await request(app)
                .post('/auth/reset-password/invalid-token')
                .send({ password: 'newpassword123' });

            expect(response.statusCode).toBe(400);
        });
    });
});
