import ProjectDataAccess from '../dominio/project.js'
import { ok, created, notFound, serverError } from '../helpers/httpResponse.js'

export default class ProjectControllers {

    constructor() {
        this.dataAccess = new ProjectDataAccess();
    }

    async createProject(projectData) {
        try {
            console.log('Controller: Dados recebidos para criar projeto:', projectData);
            
            const result = await this.dataAccess.create(projectData);
            console.log('Controller: Projeto criado com sucesso:', result);
            
            return created({ message: "Projeto criado com sucesso!", project: result });
        } catch (error) {
            console.error('Controller: Erro ao criar projeto:', error);
            return serverError(error);
        }
    }

    async getProjectById(projectId) {
        try {
            const project = await this.dataAccess.findById(projectId);
            if (!project) {
                return notFound("Projeto não encontrado");
            }
            return ok(project);
        } catch (error) {
            console.error('Erro ao buscar projeto por ID:', error);
            return serverError(error);
        }
    }

    async getAllProjects() {
        try {
            const projects = await this.dataAccess.findAll();
            return ok(projects);
        } catch (error) {
            console.error('Erro ao buscar todos os projetos:', error);
            return serverError(error);
        }
    }

    async getUserProjects(userId) {
        try {
            const projects = await this.dataAccess.findByUserId(userId);
            return ok(projects);
        } catch (error) {
            console.error('Erro ao buscar projetos do usuário:', error);
            return serverError(error);
        }
    }

    async updateProject(projectId, updateData) {
        try {
            const result = await this.dataAccess.update(projectId, updateData);
            return ok({ message: "Projeto atualizado com sucesso!", project: result });
        } catch (error) {
            console.error('Erro ao atualizar projeto:', error);
            return serverError(error);
        }
    }

    async deleteProject(projectId) {
        try {
            const result = await this.dataAccess.delete(projectId);
            return ok({ message: "Projeto deletado com sucesso!" });
        } catch (error) {
            console.error('Erro ao deletar projeto:', error);
            return serverError(error);
        }
    }
}