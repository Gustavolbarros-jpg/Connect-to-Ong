import { ok, created, notFound, serverError } from '../helpers/httpResponse.js'
import ProjectDataAccess from '../dominio/project.js'

export default class ProjectControllers {

    constructor() {
        this.dataAccess = new ProjectDataAccess();
    }

    async createProject(projectData) {
        try {
            const result = await this.dataAccess.create(projectData);
            return created({ message: "Projeto criado com sucesso!", projectId: result.insertedId })
        } catch (error) {
            return serverError(error)
        }
    }

    async getProjectById(projectId) {
        try {
            const project = await this.dataAccess.findById(projectId)
            if (!project) {
                return notFound("Projeto não encontrado")
            }
            return ok(project)
        } catch (error) {
            return serverError(error)
        }
    }

    async getAllProjects() {
        try {
            const projects = await this.dataAccess.findAll()
            return ok(projects)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateProject(projectId, updateData) {
        try {
            const result = await this.dataAccess.update(projectId, updateData)
            if (result.matchedCount === 0) {
                return notFound("Projeto não encontrado para atualizar")
            }
            return ok({ message: "Projeto atualizado com sucesso!" })
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteProject(projectId) {
        try {
            const result = await this.dataAccess.delete(projectId)
            if (result.deletedCount === 0) {
                return notFound("Projeto não encontrado para deletar")
            }
            return ok({ message: "Projeto deletado com sucesso!" })
        } catch (error) {
            return serverError(error)
        }
    }
}