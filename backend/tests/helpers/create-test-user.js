import { PrismaClient } from '@prisma/client';
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// Função para hash com salt
async function hashWithSalt(data, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(data, salt, 310000, 32, "sha256", (err, hashedData) => {
      if (err) reject(err);
      resolve(hashedData);
    });
  });
}

async function createTestUser() {
  try {
    // Verificar se o usuário já existe
    const existingUser = await prisma.users.findUnique({
      where: { email: "teste@teste.com" },
    });

    if (existingUser) {
      console.log("Usuário de teste já existe!");
      return;
    }

    // Criar usuário de teste
    const salt = crypto.randomBytes(16);
    const hashedPassword = await hashWithSalt("123456", salt);

    const userId = uuidv4();

    const user = await prisma.users.create({
      data: {
        id: userId,
        fullname: "Usuário Teste",
        email: "teste@teste.com",
        institution: "Universidade Teste",
        password: hashedPassword.toString("hex"),
        salt: salt.toString("hex"),
        verified: true,
      },
    });

    console.log("Usuário de teste criado com sucesso:", user);
  } catch (error) {
    console.error("Erro ao criar usuário de teste:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
