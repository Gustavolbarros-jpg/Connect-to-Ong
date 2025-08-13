<<<<<<< HEAD
import { Mongo } from "../database/mongo.js"; 
import { ObjectId } from "mongodb";

const collectionName ='project'

export default class ProjectDataAccess {

    async createProject(projectData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(projectData)

    return result.insertedId
    }

    async getProjectById(projectId) {
        const project = await Mongo.db
        .collection(collectionName)
        .findOne({ _id: new ObjectId(projectId) })

        return project
    }

    async getAllProjects() {
        const projects = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return projects
    }

    async deleteProject(projectId) {
        const result = await Mongo.db
            .collection(collectionName)
            .deleteOne({ _id: new ObjectId(projectId) })

        return result
    }

    async updateProject(projectId, updateData) {
        const result = await Mongo.db
            .collection(collectionName)
            .updateOne(
                { _id: new ObjectId(projectId) }, 
                { $set: updateData }              
            )

        return result
    }

}



=======
import { PrismaClient } from '../../../generated/prisma/index.js'

const prisma = new PrismaClient();

export default class ProjectDataAccess {
    async create(projectData) {
        try {
            console.log('Dados recebidos para criar projeto:', projectData);
            console.log('Prisma client:', prisma);
            console.log('Prisma projetos:', prisma.projetos);
            
            // Validar e converter campos numéricos
            const quantidade_alunos = parseInt(projectData.quantidade_alunos) || 0;
            const horas_extensao = parseInt(projectData.horas_extensao) || 0;
            const tempo_previsto = parseInt(projectData.tempo_previsto) || 0;
            
            const result = await prisma.projetos.create({
                data: {
                    nome_projeto: projectData.nome_projeto,
                    area_interesse: projectData.area_interesse,
                    soft_skills: projectData.soft_skills,
                    quantidade_alunos: quantidade_alunos,
                    descricao_projeto: projectData.descricao_projeto,
                    professores_atrelados: projectData.professores_atrelados,
                    horas_extensao: horas_extensao,
                    tempo_previsto: tempo_previsto,
                    ong_selecionada: projectData.ong_selecionada || null,
                    categoria_ong: projectData.categoria_ong || null,
                    user: {
                        connect: {
                            id: projectData.user_id
                        }
                    }
                }
            });
            
            console.log('Projeto criado com sucesso:', result);
            return result;
        } catch (error) {
            console.error('Erro ao criar projeto:', error);
            throw error;
        }
    }

    async findAll() {
        try {
            const result = await prisma.projetos.findMany({
                include: {
                    user: {
                        select: {
                            fullname: true,
                            institution: true
                        }
                    }
                },
                orderBy: { created_at: 'desc' }
            });
            return result;
        } catch (error) {
            console.error('Erro ao buscar projetos:', error);
            throw error;
        }
    }

    async findById(projectId) {
        try {
            const result = await prisma.projetos.findUnique({
                where: { id: projectId },
                include: {
                    user: {
                        select: {
                            fullname: true,
                            institution: true
                        }
                    }
                }
            });
            return result;
        } catch (error) {
            console.error('Erro ao buscar projeto por ID:', error);
            throw error;
        }
    }

    async findByUserId(userId) {
        try {
            const result = await prisma.projetos.findMany({
                where: { user_id: userId },
                orderBy: { created_at: 'desc' }
            });
            return result;
        } catch (error) {
            console.error('Erro ao buscar projetos do usuário:', error);
            throw error;
        }
    }

    async update(projectId, updateData) {
        try {
            const allowedFields = [
                'nome_projeto', 'area_interesse', 'soft_skills', 
                'quantidade_alunos', 'descricao_projeto', 'professores_atrelados',
                'horas_extensao', 'tempo_previsto', 'ong_selecionada', 
                'categoria_ong', 'status'
            ];
            
            const filteredData = {};
            for (const field of allowedFields) {
                if (updateData[field] !== undefined) {
                    if (field === 'quantidade_alunos' || field === 'horas_extensao' || field === 'tempo_previsto') {
                        const value = parseInt(updateData[field]);
                        filteredData[field] = isNaN(value) ? 0 : value;
                    } else {
                        filteredData[field] = updateData[field];
                    }
                }
            }

            if (Object.keys(filteredData).length === 0) {
                throw new Error("Nenhum campo válido para atualizar.");
            }

            const result = await prisma.projetos.update({
                where: { id: projectId },
                data: filteredData
            });
            return result;
        } catch (error) {
            console.error('Erro ao atualizar projeto:', error);
            throw error;
        }
    }

    async delete(projectId) {
        try {
            const result = await prisma.projetos.delete({
                where: { id: projectId }
            });
            return result;
        } catch (error) {
            console.error('Erro ao deletar projeto:', error);
            throw error;
        }
    }
}



>>>>>>> origin/main
