import { jest, describe, it, expect, beforeEach } from '@jest/globals';

jest.unstable_mockModule('../../src/prisma/prismaClient.js', () => ({ default: { projetos: { create: jest.fn(), findMany: jest.fn() } } }));

const { default: ProjectDataAccess } = await import('../../src/dominio/project.js');
const { default: prismaMock } = await import('../../src/prisma/prismaClient.js');

describe('ProjectDataAccess', () => {
  let projectDataAccess;

  beforeEach(() => {
    jest.clearAllMocks();
    projectDataAccess = new ProjectDataAccess();
  });

  describe('create', () => {
    it('deve criar um novo projeto', async () => {
      const projectData = {
        nome_projeto: 'Projeto Teste',
        descricao_projeto: 'Descrição do projeto de teste',
        data_inicio: '01-01-2026',
        data_fim: '31-12-2026'
      };
      const mockCreatedProject = { id: '1', ...projectData };
      prismaMock.projetos.create.mockResolvedValue(mockCreatedProject);

      const result = await projectDataAccess.create(projectData);

      expect(result).toEqual(mockCreatedProject);
      expect(prismaMock.projetos.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('deve retornar todos os projetos', async () => {
      const mockProjects = [{ id: '1', nome_projeto: 'Projeto 1' }, { id: '2', nome_projeto: 'Projeto 2' }];
      prismaMock.projetos.findMany.mockResolvedValue(mockProjects);
      
      const result = await projectDataAccess.findAll();
      
      expect(result).toEqual(mockProjects);
      expect(prismaMock.projetos.findMany).toHaveBeenCalled();
    });
  });
});
