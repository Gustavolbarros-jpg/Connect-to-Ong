// src/middlewares/verifyToken.js

import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({
            success: false,
            statusCode: 401,
            body: { message: 'Acesso negado. Nenhum token fornecido.' }
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({
                success: false,
                statusCode: 401,
                body: { message: 'Token expirado. Por favor, faça login novamente.' }
            });
        }
        return res.status(403).send({
            success: false,
            statusCode: 403,
            body: { message: 'Token inválido.' }
        });
    }
};