import {
  jest,
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
} from "@jest/globals";
import request from "supertest";
import express from "express";

jest.unstable_mockModule("../../src/middlewares/verifyToken.js", () => ({
  verifyToken: (req, res, next) => {
    req.user = { id: "mock-user-id" };
    next();
  },
}));

jest.unstable_mockModule("../../src/controllers/projectController.js", () => ({
  default: jest.fn(() => ({
    getAllProjects: jest
      .fn()
      .mockResolvedValue({
        success: true,
        statusCode: 200,
        body: [{ id: 1, name: "Test Project" }],
      }),
    getUserProjects: jest
      .fn()
      .mockResolvedValue({
        success: true,
        statusCode: 200,
        body: [{ id: 1, name: "User Project" }],
      }),
  })),
}));

const { default: projectRouter } = await import(
  "../../src/routes/projectRoutes.js"
);
const { default: ProjectControllers } = await import(
  "../../src/controllers/projectController.js"
);

const app = express();
app.use(express.json());
app.use("/projects", projectRouter);

describe("Project Routes", () => {
  let mockController;

  beforeAll(() => {
    mockController = new ProjectControllers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get all projects", async () => {
    const response = await request(app).get("/projects");

    expect(response.status).toBe(200);
    expect(response.body.body).toEqual([{ id: 1, name: "Test Project" }]);
  });

  it("should get user projects", async () => {
    const response = await request(app).get("/projects/my-projects");

    expect(response.status).toBe(200);
    expect(response.body.body).toEqual([{ id: 1, name: "User Project" }]);
  });
});
