import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../../Pags/DashboardPage/Dashboard";

describe("Dashboard Component", () => {
  test("renders dashboard hero placeholder", () => {
    render(<Dashboard />);
    expect(screen.getByText("Dashboard Image")).toBeInTheDocument();
  });

  test("renders create project button", () => {
    render(<Dashboard />);
    expect(screen.getByText("Criar novo Projeto")).toBeInTheDocument();
  });

  test("renders projects section", () => {
    render(<Dashboard />);
    expect(screen.getByText("Projetos Aguardando Conexão")).toBeInTheDocument();
  });
});
