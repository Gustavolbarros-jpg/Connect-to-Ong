import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../../../Pags/Auth/LoginPage";
import { BrowserRouter } from 'react-router-dom';

// [CORREÇÃO] Usando <rootDir> para o caminho do mock
jest.mock('../../../api/tokenInterceptor.js', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: [] })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));

describe("LoginPage Component", () => {
  // O resto do seu teste continua igual...
  test("renders login form", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Digite seu e-mail...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Digite sua Senha...")
    ).toBeInTheDocument();
  });

  test("renders login button", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
  });

  test("renders forgot password link", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Esqueci a senha")).toBeInTheDocument();
  });

  test("renders register link", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Não tem uma conta?")).toBeInTheDocument();
    expect(screen.getByText("Cadastre-se")).toBeInTheDocument();
  });
});