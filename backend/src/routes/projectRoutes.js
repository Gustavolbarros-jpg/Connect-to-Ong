import express from "express";
import ProjectControllers from "../controllers/projectController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const projectRouter = express.Router();
const projectController = new ProjectControllers();

// O middleware verifyToken será aplicado a todas as rotas abaixo dele.
// Isso garante que apenas usuários logados possam interagir com os projetos.
projectRouter.use(verifyToken);

// Rota para buscar todos os projetos
projectRouter.get("/", async (req, res) => {
  const { success, statusCode, body } =
    await projectController.getAllProjects();
  res.status(statusCode).send({ success, statusCode, body });
});

// Rota para buscar os projetos de um usuário específico (logado)
projectRouter.get("/my-projects", async (req, res) => {
  const user_id = req.user?.id;
  if (!user_id) {
    return res.status(401).send({
      success: false,
      statusCode: 401,
      body: { message: "Usuário não autenticado" },
    });
  }
  const { success, statusCode, body } = await projectController.getUserProjects(
    user_id
  );
  res.status(statusCode).send({ success, statusCode, body });
});

// Rota para buscar um projeto pelo seu ID
projectRouter.get("/:id", async (req, res) => {
  const { success, statusCode, body } = await projectController.getProjectById(
    req.params.id
  );
  res.status(statusCode).send({ success, statusCode, body });
});

// Rota para criar um novo projeto
projectRouter.post("/", async (req, res) => {
  const projectData = {
    ...req.body,
    user_id: req.user?.id, // O ID do usuário vem do token
  };

  if (!projectData.user_id) {
    return res.status(401).send({
      success: false,
      statusCode: 401,
      body: { message: "Usuário não autenticado" },
    });
  }

  const { success, statusCode, body } = await projectController.createProject(
    projectData
  );
  res.status(statusCode).send({ success, statusCode, body });
});

// Rota para atualizar um projeto existente
projectRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await projectController.updateProject(
    req.params.id,
    req.body
  );
  res.status(statusCode).send({ success, statusCode, body });
});

// Rota para deletar um projeto
projectRouter.delete("/:id", async (req, res) => {
  const { success, statusCode, body } = await projectController.deleteProject(
    req.params.id
  );
  res.status(statusCode).send({ success, statusCode, body });
});

// --- NOVA ROTA ADICIONADA ---
// Rota para inscrever um usuário (professor) em um projeto e disparar o e-mail
projectRouter.post("/:projectId/subscribe", async (req, res) => {
  const { projectId } = req.params;
  // O ID do usuário vem do token JWT, que já foi verificado pelo middleware 'verifyToken'
  const userId = req.user?.id;

  // Apenas uma verificação extra de segurança
  if (!userId) {
    return res.status(401).send({
      success: false,
      statusCode: 401,
      body: { message: "Usuário não autenticado. Token inválido ou ausente." },
    });
  }

  const { success, statusCode, body } =
    await projectController.subscribeUserToProject(userId, projectId);

  res.status(statusCode).send({ success, statusCode, body });
});

export default projectRouter;
