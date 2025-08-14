import prisma from '../prisma/prismaClient.js';
import { parse, isBefore, startOfToday } from 'date-fns';

export default class ProjectDataAccess {
    async create(projectData) {
        try {
            const { data_inicio, data_fim } = projectData;

            if (!data_inicio || !data_fim) {
                const validationError = new Error('As datas de início e fim são obrigatórias.');
                validationError.isValidationError = true; 
                throw validationError;
            }

            const dateFormat = 'dd-MM-yyyy';
            const dataInicioObj = parse(data_inicio, dateFormat, new Date());
            const dataFimObj = parse(data_fim, dateFormat, new Date());

            if (isBefore(dataInicioObj, startOfToday())) {
                const validationError = new Error('A data de início não pode ser no passado.');
                validationError.isValidationError = true;
                throw validationError;
            }

            if (isBefore(dataFimObj, dataInicioObj)) {
                const validationError = new Error('A data de fim não pode ser anterior à data de início.');
                validationError.isValidationError = true;
                throw validationError;
            }
            
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
                    data_inicio: data_inicio,
                    data_fim: data_fim,
                    user_id: projectData.user_id
                },
            });
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


