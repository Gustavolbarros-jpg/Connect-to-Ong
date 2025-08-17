import express from "express";
import cors from "cors";
import { config } from "dotenv";

import userRouter from "./routes/users.js";
import authRouter from "./auth/auth.js";
import projectRouter from "./routes/projectRoutes.js";
import ongRouter from "./routes/ngoRoutes.js";
config();

// MUDANÇA 1: A porta agora vem do arquivo .env ou usa 3007 como padrão.
const port = process.env.PORT || 3007; 

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    success: true,
    statusCode: 200,
    body: "Welcome to Connect To Ong",
  });
});

// routers
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/projects", projectRouter);
app.use("/api/ongs", ongRouter);

app.get("/teste-cors", (req, res) => {
  res.json({ message: "CORS funcionando!" });
});

// MUDANÇA 2: O servidor agora escuta em '0.0.0.0', essencial para o Docker.
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port: ${port}`);
});