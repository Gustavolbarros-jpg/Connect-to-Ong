import { PrismaClient } from '../../../generated/prisma/index.js';

const prisma = new PrismaClient();

export default class OngDataAccess {
    async create(ongData) {
        try {
            const result = await prisma.ong.create({
                data: {
                    nome: ongData.nome,
                    area: ongData.area,
                    descricao: ongData.descricao,
                    cnpj: ongData.cnpj,
                    responsavel: ongData.responsavel,
                    qtd_associados: parseInt(ongData.qtd_associados) || 0,
                    motivo_criacao: ongData.motivo_criacao,
                    redes_sociais: ongData.redes_sociais,
                },
            });
            return result;
        } catch (error) {
            console.error('Erro ao criar ONG:', error);
            throw error;
        }
    }

    
    async findAll(filters = {}) {
        try {
            const whereClause = {}; 

            
            if (filters.area) {
                
                whereClause.match_area = { 
                    contains: filters.area, 
                    mode: 'insensitive'     
                };
            }

            const result = await prisma.ong.findMany({
                where: whereClause, 
                orderBy: {
                    id: 'asc' 
                }
            });
            return result;
        } catch (error) {
            console.error('Erro ao buscar todas as ONGs:', error);
            throw error;
        }
    }

    async findById(ongId) {
        try {
            const numericId = parseInt(ongId, 10);

            if (isNaN(numericId)) {
                return null; 
            }
            
            const result = await prisma.ong.findUnique({
                where: { id: numericId },
            });
            return result;
        } catch (error) {
            console.error('Erro ao buscar ONG por ID:', error);
            throw error;
        }
    }
}