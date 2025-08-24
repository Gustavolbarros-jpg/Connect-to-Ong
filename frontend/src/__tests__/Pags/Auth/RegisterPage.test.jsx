import React from "react";
import { render, screen } from "@testing-library/react";
import RegisterPage from "../../../Pags/Auth/RegisterPage";
import { BrowserRouter } from "react-router-dom";

// [CORREÇÃO] Usando <rootDir> para o caminho do mock
jest.mock('../../../api/tokenInterceptor.js', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: [] })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));

describe("RegisterPage Component", () => {
  // O resto do seu teste continua igual...
  test("renders register form", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Cadastre-se")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Digite seu nome completo...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Digite seu e-mail...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Digite sua senha...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Confirme a sua senha...")
    ).toBeInTheDocument();
  });

  test("renders register button", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("button", { name: "Continuar" })
    ).toBeInTheDocument();
  });

  test("renders login link", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Já tem uma conta?")).toBeInTheDocument();
    expect(screen.getByText("Acessar")).toBeInTheDocument();
  });
});