import PrismaClientPackage from '@prisma/client';
const { PrismaClient } = PrismaClientPackage;

let prisma;

// Se o ambiente for de teste (geralmente definido pelo Jest), 
// exportamos um "mock" do Prisma. Isso impede que seus testes 
// tentem se conectar a um banco de dados real.
if (process.env.NODE_ENV === 'test') {
  const { jest } = await import('@jest/globals');
  prisma = {
    projetos: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    },
    ong: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    },
    users: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    },
    user: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
      }
  };
} else {
  // Em qualquer outro ambiente (desenvolvimento, produção), 
  // criamos e exportamos uma instância real e única do PrismaClient.
  prisma = new PrismaClient();
}

export default prisma;