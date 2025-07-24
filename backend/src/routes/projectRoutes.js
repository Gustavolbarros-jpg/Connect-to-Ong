import express from 'express'
import ProjectControllers from '../controllers/projectController.js'

const projectRouter = express.Router()
const projectController = new ProjectControllers()

// get all projects
projectRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await projectController.getAllProjects()
    res.status(statusCode).send({ success, statusCode, body })
})

// get project by id
projectRouter.get('/:id', async (req, res) => {
    const { success, statusCode, body } = await projectController.getProjectById(req.params.id)
    res.status(statusCode).send({ success, statusCode, body })
})

// create project
projectRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await projectController.createProject(req.body)
    res.status(statusCode).send({ success, statusCode, body })
})

// update project
projectRouter.patch('/:id', async (req, res) => {
    const { success, statusCode, body } = await projectController.updateProject(req.params.id, req.body)
    res.status(statusCode).send({ success, statusCode, body })
})

// delete project
projectRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await projectController.deleteProject(req.params.id)
    res.status(statusCode).send({ success, statusCode, body })
})

export default projectRouter;