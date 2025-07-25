import { PrismaClient } from '../../../generated/prisma/index.js'
import crypto from 'crypto'
import { error } from "console";

const prisma = new PrismaClient();


export default class UsersDataAcess {
    async getUsers(){
        const result = await prisma.users.findMany();
        console.log(result)
        return result
    }


    async deleteUsers(userId){
        const result= await prisma.users.delete({
            where: { id: userId },
        })

        return result
    }


    async updateUsers(userId, userData) {

    if (!userId || typeof userId !== 'string' || !userId.match(/^[0-9a-fA-F-]{36}$/)) {
        throw new Error("ID inválido para update: " + userId);
    }
   

    const allowedFields = ['description', 'photoUrl'];
    const filteredData = {};

    for (const field of allowedFields) {
      if (userData[field] !== undefined) {
        filteredData[field] = userData[field];
      }
    }

    if (userData.password) {
      const salt = crypto.randomBytes(16).toString('hex');
      const hashedPassword = crypto.pbkdf2Sync(userData.password, salt, 310000, 16, 'sha256').toString('hex');

      filteredData.password = hashedPassword;
      filteredData.salt = salt;
    }

    if (Object.keys(filteredData).length === 0) {
      throw new Error("Nenhum campo válido para atualizar.");
    }

    const result = await prisma.users.update({
      where: { id: userId },
      data: filteredData,
    });

    return result;
        }
    
    }

