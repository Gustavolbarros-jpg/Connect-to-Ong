import { jest, describe, it, expect, beforeEach } from "@jest/globals";

jest.unstable_mockModule("../src/dominio/users.js", () => ({
  default: jest.fn(() => ({
    getUsers: jest.fn(),
    deleteUsers: jest.fn(),
    updateUsers: jest.fn(),
  })),
}));

const { default: UserControllers } = await import(
  "../src/controllers/users.js"
);
const { default: UsersDataAcess } = await import("../src/dominio/users.js");

describe("UserControllers", () => {
  let userControllers;
  let mockDataAccess;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDataAccess = new UsersDataAcess();
    userControllers = new UserControllers();
    userControllers.dataAccess = mockDataAccess;
  });

  describe("getUsers", () => {
    it("deve retornar uma lista de usuários com status 200", async () => {
      const mockUsers = [
        { id: "1", name: "Teste" },
        { id: "2", name: "Outro Teste" },
      ];
      mockDataAccess.getUsers.mockResolvedValue(mockUsers);

      const result = await userControllers.getUsers();

      expect(mockDataAccess.getUsers).toHaveBeenCalled();
      expect(result.statusCode).toBe(200);
      expect(result.body).toEqual(mockUsers);
    });

    it("deve retornar erro 500 quando ocorrer uma exceção", async () => {
      mockDataAccess.getUsers.mockRejectedValue(new Error("Erro de teste"));

      const result = await userControllers.getUsers();

      expect(result.statusCode).toBe(500);
      expect(result.body).toHaveProperty("error", "Erro de teste");
    });
  });

  describe("deleteUsers", () => {
    it("deve deletar um usuário e retornar status 200", async () => {
      const mockResult = { id: "1", name: "Teste Deletado" };
      mockDataAccess.deleteUsers.mockResolvedValue(mockResult);

      const result = await userControllers.deleteUsers("1");

      expect(mockDataAccess.deleteUsers).toHaveBeenCalledWith("1");
      expect(result.statusCode).toBe(200);
      expect(result.body).toEqual(mockResult);
    });
  });

  describe("updateUsers", () => {
    it("deve atualizar um usuário e retornar status 200", async () => {
      const userId = "1";
      const userData = { description: "Nova descrição" };
      const mockResult = { id: "1", description: "Nova descrição" };
      mockDataAccess.updateUsers.mockResolvedValue(mockResult);

      const result = await userControllers.updateUsers(userId, userData);

      expect(mockDataAccess.updateUsers).toHaveBeenCalledWith(userId, userData);
      expect(result.statusCode).toBe(200);
      expect(result.body).toEqual(mockResult);
    });
  });
});
