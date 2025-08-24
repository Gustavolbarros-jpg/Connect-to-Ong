import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../../Pags/DashboardPage/Dashboard";
import { BrowserRouter } from "react-router-dom";

// [CORREÇÃO] Mock da API para isolar o componente
jest.mock('../../../api/tokenInterceptor.js', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: [] })), // Simula uma busca que retorna uma lista vazia
  },
}));

describe("Dashboard Component", () => {
  test("renders dashboard hero placeholder", async () => { // Adicionado async
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    // Adicionado await findByAltText para esperar o conteúdo
    expect(await screen.findByAltText("foto do dashboard")).toBeInTheDocument();
  });

  test("renders create project button", async () => { // Adicionado async
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(await screen.findByText("Criar novo Projeto")).toBeInTheDocument();
  });

  test("renders projects section", async () => { // Adicionado async
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(await screen.findByText("Projetos Aguardando Conexão")).toBeInTheDocument();
  });
});