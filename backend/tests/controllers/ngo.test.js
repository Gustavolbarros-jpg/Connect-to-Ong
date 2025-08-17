import { jest, describe, it, expect, beforeEach } from "@jest/globals";

jest.unstable_mockModule("../../src/dominio/ngo.js", () => ({
  default: jest.fn(() => ({
    create: jest.fn(),
    findAll: jest.fn(),
  })),
}));

const { default: NgoControllers } = await import(
  "../../src/controllers/ngoController.js"
);
const { default: NgoDataAccess } = await import("../../src/dominio/ngo.js");

describe("NgoControllers", () => {
  let ngoControllers;
  let mockDataAccess;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDataAccess = new NgoDataAccess();
    ngoControllers = new NgoControllers();
    ngoControllers.dataAccess = mockDataAccess;
  });

  describe("createNgo", () => {
    it("deve criar uma ONG e retornar status 201", async () => {
      const ngoData = {
        name: "ONG Teste",
        cnpj: "12345678901234",
        description: "Descrição da ONG de teste",
      };
      const mockResult = { id: "1", ...ngoData };
      mockDataAccess.create.mockResolvedValue(mockResult);

      const result = await ngoControllers.createNgo(ngoData);

      expect(mockDataAccess.create).toHaveBeenCalledWith(ngoData);
      expect(result.statusCode).toBe(201);
      expect(result.body).toHaveProperty("message", "ONG criada com sucesso!");
    });
  });

  describe("getAllNgos", () => {
    it("deve retornar todas as ONGs com status 200", async () => {
      const mockNgos = [
        { id: "1", name: "ONG 1" },
        { id: "2", name: "ONG 2" },
      ];
      mockDataAccess.findAll.mockResolvedValue(mockNgos);

      const result = await ngoControllers.getAllNgos();

      expect(result.statusCode).toBe(200);
      expect(result.body).toEqual(mockNgos);
    });
  });
});
