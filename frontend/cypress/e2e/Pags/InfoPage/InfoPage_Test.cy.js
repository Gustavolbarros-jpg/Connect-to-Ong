// cypress/e2e/infoPage.cy.js (ou o nome do seu arquivo)

describe("Testes da Página Universidades (InfoPage)", () => {
  context("Cenário: Usuário Deslogado", () => {
    beforeEach(() => {
      cy.clearLocalStorage();
      cy.visit("/university");
    });

    it("Deve carregar a página com os textos corretos", () => {
      // CORRIGIDO: Textos que correspondem ao seu componente InfoPage.jsx
      cy.contains("Potencialize a Extensão da sua Universidade.").should(
        "be.visible"
      );
      cy.contains(
        "Nossa plataforma conecta seus cursos e alunos a projetos de ONGs"
      ).should("be.visible");
      cy.contains("Quero Participar!").should("be.visible");
      cy.contains("Nosso Propósito").should("be.visible");
      cy.contains("Como as universidades participam?").should("be.visible");
    });

    it('O botão "Quero Participar!" deve direcionar o usuário para a página de login', () => {
      // CORRIGIDO: Comportamento para usuário deslogado
      cy.contains("Quero Participar!").click();
      cy.url().should("include", "/login");
    });
  });

  context("Cenário: Usuário Logado", () => {
    beforeEach(() => {
      // Simula um login
      localStorage.setItem("token", "um-token-de-teste-valido");
      localStorage.setItem(
        "user",
        JSON.stringify({ fullname: "Professor Teste" })
      );
      cy.visit("/university");
    });

    it('O botão "Quero Participar!" deve direcionar o usuário para a criação de projeto', () => {
      // CORRIGIDO: Comportamento para usuário logado
      cy.contains("Quero Participar!").click();
      cy.url().should("include", "/stepe-one");
    });
  });
});
