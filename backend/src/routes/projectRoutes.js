import express from 'express'
import ProjectControllers from '../controllers/projectController.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const projectRouter = express.Router()
const projectController = new ProjectControllers()

projectRouter.use(verifyToken);

// get all projects
projectRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await projectController.getAllProjects()
    res.status(statusCode).send({ success, statusCode, body })
})

// get projects by user
projectRouter.get('/my-projects', async (req, res) => {
    const user_id = req.user?.id;
    if (!user_id) {
        return res.status(401).send({ 
            success: false, 
            statusCode: 401, 
            body: { message: 'Usuário não autenticado' } 
        });
    }
    const { success, statusCode, body } = await projectController.getUserProjects(user_id)
    res.status(statusCode).send({ success, statusCode, body })
})

// get project by id
projectRouter.get('/:id', async (req, res) => {
    const { success, statusCode, body } = await projectController.getProjectById(req.params.id)
    res.status(statusCode).send({ success, statusCode, body })
})

// create project
projectRouter.post('/', async (req, res) => {
    const projectData = {
        ...req.body,
        user_id: req.user?.id
    };
    
    if (!projectData.user_id) {
        return res.status(401).send({ 
            success: false, 
            statusCode: 401, 
            body: { message: 'Usuário não autenticado' } 
        });
    }
    
    const { success, statusCode, body } = await projectController.createProject(projectData)
    res.status(statusCode).send({ success, statusCode, body })
})

// update project
projectRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await projectController.updateProject(req.params.id, req.body)
    res.status(statusCode).send({ success, statusCode, body })
})

// delete project
projectRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await projectController.deleteProject(req.params.id)
    res.status(statusCode).send({ success, statusCode, body })
})

export default projectRouter;