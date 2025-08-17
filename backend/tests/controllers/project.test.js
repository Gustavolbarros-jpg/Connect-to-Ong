import { jest, describe, it, expect, beforeEach } from "@jest/globals";

jest.unstable_mockModule("../../src/dominio/project.js", () => ({
  default: jest.fn(() => ({
    create: jest.fn(),
  })),
}));

const { default: ProjectControllers } = await import(
  "../../src/controllers/projectController.js"
);
const { default: ProjectDataAccess } = await import(
  "../../src/dominio/project.js"
);

describe("ProjectControllers", () => {
  let projectControllers;
  let mockDataAccess;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDataAccess = new ProjectDataAccess();
    projectControllers = new ProjectControllers();
    projectControllers.dataAccess = mockDataAccess;
  });

  describe("createProject", () => {
    it("deve criar um projeto e retornar status 201", async () => {
      const projectData = {
        title: "Projeto Teste",
        description: "Descrição do projeto de teste",
        user_id: "user-123",
      };
      const mockResult = { id: "1", ...projectData };
      mockDataAccess.create.mockResolvedValue(mockResult);

      const result = await projectControllers.createProject(projectData);

      expect(mockDataAccess.create).toHaveBeenCalledWith(projectData);
      expect(result.statusCode).toBe(201);
      expect(result.body).toHaveProperty(
        "message",
        "Projeto criado com sucesso!"
      );
      expect(result.body).toHaveProperty("project", mockResult);
    });
  });
});
