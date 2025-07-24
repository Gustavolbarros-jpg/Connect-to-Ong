import express from 'express'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import crypto from 'crypto'
import { Mongo } from '../database/mongo.js'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import nodemailer from 'nodemailer'
import { v4 as uuidv4 } from 'uuid'

const usersCollection = 'users'
const verificationsCollection = 'userVerifications'

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
        const user = await Mongo.db.collection(usersCollection).findOne({ email: email });

        if (!user) {
            return callback(null, false, { message: 'Credenciais inválidas.' });
        }

        const hashedPassword = await hashWithSalt(password, user.salt.buffer);

        if (!crypto.timingSafeEqual(user.password.buffer, hashedPassword)) {
            return callback(null, false, { message: 'Credenciais inválidas.' });
        }
        
        if (!user.verified) {
            return callback(null, false, { message: 'Por favor, verifique seu e-mail antes de fazer login.' });
        }

        const { password: userPass, salt, ...restOfUser } = user;
        return callback(null, restOfUser);

    } catch (error) {
        return callback(error);
    }
}));

// --- FUNÇÃO AUXILIAR PARA ENVIO DE E-MAIL ---
const sendVerificationEmail = async (userId, email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.AUTH_EMAIL, pass: process.env.AUTH_PASS }
        });

        const uniqueString = uuidv4() + userId.toString();
        const verificationLink = `${process.env.APP_URL}/auth/verify/${userId}/${uniqueString}`;

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "Verifique seu E-mail",
            html: `<p>Verifique seu endereço de e-mail para completar o cadastro.</p><p>Este link <b>expira em 6 horas</b>.</p><p>Clique <a href="${verificationLink}">aqui</a> para prosseguir.</p>`,
        };

        const salt = crypto.randomBytes(16);
        const hashedUniqueString = await hashWithSalt(uniqueString, salt);

        await Mongo.db.collection(verificationsCollection).insertOne({
            userId: userId,
            uniqueString: hashedUniqueString,
            salt: salt,
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 21600000), // 6 horas
        });

        await transporter.sendMail(mailOptions);

    } catch (error) {
        console.error("Erro no envio do e-mail de verificação:", error);
        throw new Error("Ocorreu um erro ao enviar o e-mail de verificação.");
    }
};

const authRouter = express.Router();

// ROTA DE CADASTRO (SIGNUP)
authRouter.post('/signup', async (req, res) => {
    try {
        let { fullname, email, password, institution } = req.body;

        if (!fullname || !email || !password || !institution) return res.status(400).send({ message: 'Nome, e-mail, instituição e senha são obrigatórios.' });
        if (password.length < 8) return res.status(400).send({ message: 'A senha precisa ter no mínimo 8 caracteres.' });
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) return res.status(400).send({ message: 'Formato de e-mail inválido.' });

        const existingUser = await Mongo.db.collection(usersCollection).findOne({ email: email.trim() });
        if (existingUser) return res.status(409).send({ message: 'Um usuário com este e-mail já existe.' });

        const salt = crypto.randomBytes(16);
        const hashedPassword = await hashWithSalt(password, salt);

        const result = await Mongo.db.collection(usersCollection).insertOne({
            fullname: fullname.trim(),
            email: email.trim(),
            institution: institution.trim(),
            password: hashedPassword,
            salt: salt,
            verified: false,
            createdAt: new Date(),
        });

        if (result.insertedId) {
            await sendVerificationEmail(result.insertedId, email.trim());
            return res.status(201).send({ status: "PENDING", message: "Cadastro realizado com sucesso! Um e-mail de verificação foi enviado." });
        }
    } catch (error) {
        console.error("Erro na rota de signup:", error);
        return res.status(500).send({ message: "Ocorreu um erro interno no servidor." });
    }
});

// ROTA DE VERIFICAÇÃO DE E-MAIL
authRouter.get("/verify/:userId/:uniqueString", async (req, res) => {
    try {
        const { userId, uniqueString } = req.params;
        const verificationRecord = await Mongo.db.collection(verificationsCollection).findOne({ userId: new ObjectId(userId) });

        if (!verificationRecord) throw new Error("Link de verificação inválido ou já utilizado.");
        if (verificationRecord.expiresAt < new Date()) {
            await Mongo.db.collection(verificationsCollection).deleteOne({ userId: new ObjectId(userId) });
            await Mongo.db.collection(usersCollection).deleteOne({ _id: new ObjectId(userId) });
            throw new Error("O link de verificação expirou. Por favor, cadastre-se novamente.");
        }

        const hashedStringFromUrl = await hashWithSalt(uniqueString, verificationRecord.salt.buffer);

        if (!crypto.timingSafeEqual(verificationRecord.uniqueString.buffer, hashedStringFromUrl)) {
            throw new Error("Link de verificação inválido.");
        }

        await Mongo.db.collection(usersCollection).updateOne({ _id: new ObjectId(userId) }, { $set: { verified: true } });
        await Mongo.db.collection(verificationsCollection).deleteOne({ userId: new ObjectId(userId) });

        res.status(200).send(`<h1>E-mail verificado com sucesso!</h1><p>Sua conta foi verificada.</p>`);
    } catch (error) {
        console.error(error);
        res.status(400).send(`<p><b>Erro na verificação:</b> ${error.message}</p>`);
    }
});

// ROTA DE LOGIN (login)
authRouter.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
        if (error) {
            console.error("Erro capturado pela estratégia do Passport:", error); // <-- A LINHA MÁGICA
            return res.status(500).send({ message: "Erro durante a autenticação" });
        }
        if (!user) return res.status(401).send({ message: info.message || "Credenciais inválidas." });
        
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7m' });
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
        const user = await Mongo.db.collection(usersCollection).findOne({ email: email });

        // IMPORTANTE: Por segurança, não informe se o e-mail foi encontrado ou não.
        // Apenas retorne sucesso para não permitir que descubram e-mails cadastrados.
        if (!user) {
            return res.status(200).json({ message: 'Se um usuário com este e-mail existir, um link de recuperação foi enviado.' });
        }

        // 2. Gera um token único e seguro para a redefinição de senha
        const resetToken = crypto.randomBytes(32).toString('hex');
        const tenMinutes = 10 * 60 * 1000; // Token expira em 10 minutos
        const expires = new Date(Date.now() + tenMinutes);

        // 3. Salva o token e a data de expiração no documento do usuário
        await Mongo.db.collection(usersCollection).updateOne(
            { _id: user._id },
            { $set: { resetPasswordToken: resetToken, resetPasswordExpires: expires } }
        );

        // 4. Cria o link de redefinição para o front-end
    
        const resetLink = `http://localhost:5173/recover-password/${resetToken}`;

        // 5. Configura e envia o e-mail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.AUTH_EMAIL, pass: process.env.AUTH_PASS }
        });

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: user.email,
            subject: "Recuperação de Senha",
            html: `<p>Você solicitou a recuperação de senha.</p><p>Clique neste <a href="${resetLink}">link</a> para redefinir sua senha.</p><p>Este link é válido por 10 minutos.</p>`,
        };

        await transporter.sendMail(mailOptions);
        
        // 6. Responde ao front-end
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

        // 1. Encontra o usuário pelo token e verifica se não expirou
        const user = await Mongo.db.collection(usersCollection).findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: new Date() } // $gt (greater than)
        });

        if (!user) {
            return res.status(400).json({ message: 'Token de recuperação inválido ou expirado.' });
        }

        // 2. Cria um novo hash e salt para a nova senha
        const salt = crypto.randomBytes(16);
        const hashedPassword = await hashWithSalt(password, salt);

        // 3. Atualiza a senha do usuário e remove o token para que não seja reutilizado
        await Mongo.db.collection(usersCollection).updateOne(
            { _id: user._id },
            {
                $set: { password: hashedPassword, salt: salt },
                $unset: { resetPasswordToken: "", resetPasswordExpires: "" } // Remove os campos do token
            }
        );

        res.status(200).json({ message: 'Senha redefinida com sucesso!' });

    } catch (error) {
        console.error("Erro em /reset-password:", error);
        res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});

export default authRouter;