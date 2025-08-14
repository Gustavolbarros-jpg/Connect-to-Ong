import { jest, describe, it, expect, beforeAll, afterEach } from '@jest/globals';
import request from 'supertest';
import express from 'express';

jest.unstable_mockModule('../../src/middlewares/verifyToken.js', () => ({
  verifyToken: (req, res, next) => {
    req.user = { id: 'mock-user-id' };
    next();
  }
}));

jest.unstable_mockModule('../../src/controllers/ngoController.js', () => ({
    default: jest.fn(() => ({
        getAllNgos: jest.fn().mockResolvedValue({ success: true, statusCode: 200, body: [{ id: '1', name: 'ONG Teste' }] }),
        getNgoById: jest.fn().mockResolvedValue({ success: true, statusCode: 200, body: { id: '1', name: 'ONG Teste' } }),
    })),
}));

const { default: ngoRouter } = await import('../../src/routes/ngoRoutes.js');
const { default: NgoControllers } = await import('../../src/controllers/ngoController.js');

const app = express();
app.use(express.json());
app.use('/ngos', ngoRouter);

describe('Rotas de ONGs - /ngos', () => {
  let mockNgoController;

  beforeAll(() => {
    mockNgoController = new NgoControllers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /ngos', () => {
    it('deve retornar a lista de ONGs com status 200', async () => {
      const response = await request(app).get('/ngos');
      
      expect(response.status).toBe(200);
      expect(response.body.body).toEqual([{ id: '1', name: 'ONG Teste' }]);
    });
  });
  
  describe('GET /ngos/:id', () => {
    it('deve retornar uma ONG específica com status 200', async () => {
      const response = await request(app).get('/ngos/1');
      
      expect(response.status).toBe(200);
      expect(response.body.body).toEqual({ id: '1', name: 'ONG Teste' });
    });
  });
});