// Verificar se estamos em ambiente de teste
let prisma;

if (process.env.NODE_ENV === "test") {
  // Versão mock para testes - usando jest.fn() para simular as funções
  const { jest } = await import("@jest/globals");
  prisma = {
    projetos: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    ong: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    users: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };
} else {
  // Importação real para ambiente de produção/desenvolvimento
  try {
    const { PrismaClient } = await import("@prisma/client");
    prisma = new PrismaClient();
  } catch (error) {
    console.error("Erro ao importar PrismaClient:", error);
    // Fallback para um objeto vazio se a importação falhar
    prisma = {};
  }
}

export default prisma;
