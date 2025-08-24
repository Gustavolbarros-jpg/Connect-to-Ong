import React from "react";
import { render, screen } from "@testing-library/react";
import OngPage from "../../../Pags/OngPage/OngPage";
import { BrowserRouter } from "react-router-dom";

// [CORREÇÃO] Usando <rootDir> para o caminho do mock
jest.mock('../../../api/tokenInterceptor.js', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: [] })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));
describe("OngPage Component", () => {
  test("renders ONG page content", async () => {
    render(
      <BrowserRouter>
        <OngPage />
      </BrowserRouter>
    );
    expect(
      await screen.findByText(
      "Conecte seus alunos a causas que transformam a sociedade."
    )
    ).toBeInTheDocument();
  });
});