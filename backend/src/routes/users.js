import express from "express";
import UserControllers from "../controllers/users.js";

const userRouter = express.Router();
const userControllers = new UserControllers();

userRouter.get("/", async (req, res) => {
  const { success, statusCode, body } = await userControllers.getUsers();
  res.status(statusCode).send({ success, statusCode, body });
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("ID recebido para delete:", id);
  const { success, statusCode, body } = await userControllers.deleteUsers(
    req.params.id
  );
  res.status(statusCode).send({ success, statusCode, body });
});

userRouter.put("/:id", async (req, res) => {
  const { success, statusCode, body } = await userControllers.updateUsers(
    req.params.id,
    req.body
  );
  res.status(statusCode).send({ success, statusCode, body });
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("ID recebido para get:", id);
  const { success, statusCode, body } = await userControllers.getUserById(id);
  res.status(statusCode).send({ success, statusCode, body });
});

export default userRouter;
