import express from 'express'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import crypto from 'crypto'
import prisma from '../prisma/prismaClient.js'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import * as Brevo from '@getbrevo/brevo';


// --- FUNÇÃO AUXILIAR PARA HASHING ---
function hashWithSalt(data, salt) {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(data, salt, 310000, 32, 'sha256', (err, hashedData) => {
            if (err) reject(err);
            resolve(hashedData);
        });
    });
}

// --- ESTRATÉGIA DE LOGIN DO PASSPORT ---
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, callback) => {
    try {
        const user = await prisma.users.findUnique({
            where: {email: email}
        })
        if (!user) {
            return callback(null, false, { message: 'Credenciais inválidas.' });
        }

        const saltBuf = Buffer.from(user.salt, 'hex')
        const passBuf = Buffer.from(user.password, 'hex')

        const hashedInput = await hashWithSalt(password, saltBuf);

        if (!crypto.timingSafeEqual(passBuf, hashedInput)) {
            return callback(null, false, { message: 'Credenciais inválidas.' });
        }
        
        // Remover verificação de e-mail - cadastro direto
        // if (!user.verified) {
        //     return callback(null, false, { message: 'Por favor, verifique seu e-mail antes de fazer login.' });
        // }

        const { password: userPass, salt, ...restOfUser } = user;
        return callback(null, restOfUser);

    } catch (error) {
        return callback(error);
    }
}));

// Função de envio de email removida - cadastro direto

const authRouter = express.Router();

// ROTA DE CADASTRO (SIGNUP)
authRouter.post('/signup', async (req, res) => {
    try {
        let { fullname, email, password, institution } = req.body;

        if (!fullname || !email || !password || !institution)
            return res.status(400).send({ message: 'Nome, e-mail, instituição e senha são obrigatórios.' });

        if (password.length < 8)
            return res.status(400).send({ message: 'A senha precisa ter no mínimo 8 caracteres.' });

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim()))
            return res.status(400).send({ message: 'Formato de e-mail inválido.' });

        const existingUser = await prisma.users.findUnique({ where: { email: email.trim() } });
        if (existingUser)
            return res.status(409).send({ message: 'Um usuário com este e-mail já existe.' });

        const salt = crypto.randomBytes(16);
        const hashedPassword = await hashWithSalt(password, salt);

        const userId = uuidv4(); // cria o ID UUID manualmente
        console.log("userId (tipo e valor):", typeof userId, userId);
        
        console.log({
        passwordString: password.toString('hex').slice(0, 10),
        saltString: salt.toString('hex').slice(0, 10)
        });

        
        await prisma.users.create({
            data: {
                id: userId,
                fullname: fullname.trim(),
                email: email.trim(),
                institution: institution.trim(),
                password: hashedPassword.toString('hex'),
                salt: salt.toString('hex'),
                verified: true, // Usuário já verificado - cadastro direto
            }
        });

        return res.status(201).send({
            status: "SUCCESS",
            message: "Cadastro realizado com sucesso! Você já pode fazer login."
        });

    } catch (error) {
        console.error("Erro na rota de signup:", error);
        return res.status(500).send({ message: "Erro interno no servidor." });
    }
});

// Rota de verificação de email removida - cadastro direto


// ROTA DE LOGIN (login)
authRouter.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
        if (error) {
            console.error("Erro capturado pela estratégia do Passport:", error); // <-- A LINHA MÁGICA
            return res.status(500).send({ message: "Erro durante a autenticação" });
        }
        if (!user) return res.status(401).send({ message: info.message || "Credenciais inválidas." });
        
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '2m' });
        return res.status(200).send({ message: "Login realizado com sucesso", user, token });
    })(req, res);
});

authRouter.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'O campo de e-mail é obrigatório.' });
        }

        // 1. Encontra o usuário pelo e-mail
        const user = await prisma.users.findUnique({ where: { email } });

        // Por segurança, não revela se o e-mail existe
        if (!user) {
            return res.status(200).json({ message: 'Se um usuário com este e-mail existir, um link de recuperação foi enviado.' });
        }

        // 2. Gera o token de redefinição de senha
        const resetToken = crypto.randomBytes(32).toString('hex');
        const tenMinutes = 10 * 60 * 1000;
        const expires = new Date(Date.now() + tenMinutes);

        // 3. Atualiza o usuário com o token e expiração
        await prisma.users.update({
            where: { email },
            data: {
                resetPasswordToken: resetToken,
                resetPasswordExpires: expires
            }
        });

        // 4. Cria o link para o front-end
        const resetLink = `http://localhost:5173/recover-password/${resetToken}`;

        // 5. Configura e envia o e-mail
        const apiInstance = new Brevo.TransactionalEmailsApi();
        apiInstance.apiClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;
        
        // Define o remetente (deve ser verificado na sua conta Brevo)
        const sender = {
            email: process.env.AUTH_EMAIL,
            name: 'Connect-to-ONG' // O nome que aparecerá para o usuário
        };
        
        // Monta o e-mail
        await apiInstance.sendTransacEmail({
            sender,
            to: [{ email: user.email }],
            subject: 'Recuperação de Senha',
            htmlContent: `
                <p>Você solicitou a recuperação de senha para sua conta na Connect-to-ONG.</p>
                <p>Clique neste <a href="${resetLink}">link</a> para redefinir sua senha.</p>
                <p>Este link é válido por 10 minutos.</p>
                <p>Se você não solicitou isso, pode ignorar este e-mail.</p>
            `
        });

        res.status(200).json({ message: 'Se um usuário com este e-mail existir, um link de recuperação foi enviado.' });

    } catch (error) {
        console.error("Erro em /forgot-password:", error);
        res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});


// ROTA PARA REDEFINIR A SENHA
authRouter.post('/reset-password/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        if (!password || password.length < 8) {
            return res.status(400).json({ message: 'A senha é obrigatória e precisa ter no mínimo 8 caracteres.' });
        }

        // 1. Encontra o usuário pelo token e verifica se ainda está válido
        const user = await prisma.users.findFirst({
            where: {
                resetPasswordToken: token,
                resetPasswordExpires: {
                    gt: new Date()
                }
            }
        });

        if (!user) {
            return res.status(400).json({ message: 'Token de recuperação inválido ou expirado.' });
        }

        // 2. Cria novo salt e hash da senha
        const salt = crypto.randomBytes(16);
        const hashedPassword = await hashWithSalt(password, salt);

        // 3. Atualiza a senha e limpa os campos de recuperação
        await prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword.toString('hex'),
                salt: salt.toString('hex'),
                resetPasswordToken: null,
                resetPasswordExpires: null
            }
        });

        return res.status(200).json({ message: 'Senha redefinida com sucesso!' });

    } catch (error) {
        console.error("Erro em /reset-password:", error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});

export default authRouter;