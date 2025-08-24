import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../Components/Navbar";
import { BrowserRouter } from 'react-router-dom';

describe("Navbar Component", () => {
  beforeEach(() => {
    // Limpar localStorage antes de cada teste
    localStorage.clear();
  });

  test("renders navbar with logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Logo Connect to ONGs")).toBeInTheDocument();
  });

  test("renders navigation menu items", () => {
    // CORREÇÃO: Adicionado BrowserRouter
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Universidade")).toBeInTheDocument();
  });

  test("renders login and register links when not authenticated", () => {
    // CORREÇÃO: Adicionado BrowserRouter
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Acessar Conta")).toBeInTheDocument();
    expect(screen.getByText("Cadastre-se")).toBeInTheDocument();
  });
});