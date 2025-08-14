import { jest, describe, it, expect, beforeEach } from '@jest/globals';

jest.unstable_mockModule('../../src/prisma/prismaClient.js', () => ({ default: { ong: { create: jest.fn(), findMany: jest.fn() } } }));

const { default: OngDataAccess } = await import('../../src/dominio/ngo.js');
const { default: prismaMock } = await import('../../src/prisma/prismaClient.js');

describe('OngDataAccess', () => {
  let ongDataAccess;

  beforeEach(() => {
    jest.clearAllMocks();
    ongDataAccess = new OngDataAccess();
  });

  describe('create', () => {
    it('deve criar uma nova ONG', async () => {
      const ongData = {
        nome: 'ONG Teste',
        cnpj: '12345678901234',
        descricao: 'Descrição da ONG de teste'
      };
      const mockCreatedOng = { id: '1', ...ongData };
      prismaMock.ong.create.mockResolvedValue(mockCreatedOng);

      const result = await ongDataAccess.create(ongData);

      expect(result).toEqual(mockCreatedOng);
      expect(prismaMock.ong.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('deve retornar todas as ONGs', async () => {
      const mockOngs = [{ id: '1', nome: 'ONG 1' }, { id: '2', nome: 'ONG 2' }];
      prismaMock.ong.findMany.mockResolvedValue(mockOngs);
      
      const result = await ongDataAccess.findAll();
      
      expect(result).toEqual(mockOngs);
      expect(prismaMock.ong.findMany).toHaveBeenCalled();
    });
  });
});