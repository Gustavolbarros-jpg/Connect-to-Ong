// src/routes/ngoRoutes.js

import express from 'express';
import NgoControllers from '../controllers/ngoController.js'; 
import { verifyToken } from '../middlewares/verifyToken.js';

const ngoRouter = express.Router();
const ngoController = new NgoControllers(); 

// Rota pública para listar todas as ONGs (agora com filtros!)
ngoRouter.get('/', async (req, res) => {

    const { success, statusCode, body } = await ngoController.getAllNgos(req.query);
    res.status(statusCode).send({ success, statusCode, body });
});

// Rota pública para ver detalhes de uma ONG
ngoRouter.get('/:id', async (req, res) => {
    const { success, statusCode, body } = await ngoController.getNgoById(req.params.id);
    res.status(statusCode).send({ success, statusCode, body });
});

// Rota protegida para criar uma nova ONG
ngoRouter.post('/', verifyToken, async (req, res) => {
    const { success, statusCode, body } = await ngoController.createNgo(req.body);
    res.status(statusCode).send({ success, statusCode, body });
});

export default ngoRouter;