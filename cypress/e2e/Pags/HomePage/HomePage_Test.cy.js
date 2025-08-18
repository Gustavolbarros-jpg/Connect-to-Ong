// cypress/e2e/homePage.cy.js  (ou o nome do seu arquivo)

describe("Testes da Página Inicial (HomePage)", () => {
  context("Cenário: Usuário Deslogado", () => {
    beforeEach(() => {
      // Garante que o estado de login está limpo antes de cada teste
      cy.clearLocalStorage();
      cy.visit("/");
    });

    it('O link "Início" deve levar para a página inicial ("/")', () => {
      cy.contains("Início").click();
      // Usamos 'eq' para uma verificação exata da URL base
      cy.url().should("eq", Cypress.config().baseUrl + "/");
    });

    it('O botão "Universidade" deve navegar para a página de Universidades.', () => {
      cy.contains("Universidade").click();
      cy.url().should("include", "/university");
    });

    it('O botão "ONGs" deve navegar para a página das ONGs.', () => {
      cy.contains("ONGs").click();
      cy.url().should("include", "/ongs");
    });

    it('O botão "Acessar Conta" deve navegar para a página de Login', () => {
      // O texto é "Acessar Conta" quando deslogado
      cy.contains("Acessar Conta").click();
      cy.url().should("include", "/login");
    });

    it('O botão "Cadastre-se" deve navegar para a página de cadastro', () => {
      cy.contains("Cadastre-se").click();
      cy.url().should("include", "/register");
    });

    it("Deve mostrar a seção principal e seus elementos", () => {
      cy.contains(
        "Conecte-se a ONGs e transforme sua pesquisa em impacto social."
      ).should("be.visible");
      cy.contains(
        "Conectamos universidades e ONGs em projetos sociais que desenvolvem soft skills e geram impacto real."
      ).should("be.visible");
      cy.contains("Começar projeto agora!").should("be.visible");
    });

    it('O botão "Começar projeto agora!" deve direcionar para a página de registro.', () => {
      cy.contains("Começar projeto agora!").click();
      cy.url().should("include", "/register");
    });

    it("Deve exibir a seção de 'Soluções de soft skills'", () => {
      cy.contains("Soluções de soft skills fortalecem competências.").should(
        "be.visible"
      );
      cy.contains("Comunicação").should("be.visible");
      cy.contains("Empatia").should("be.visible");
      cy.contains("Colaboração").should("be.visible");
    });

    it("Deve exibir a seção 'Como Funciona?'", () => {
      cy.contains("Como Funciona?").should("be.visible");
      cy.contains("Cadastro").should("be.visible");
      cy.contains("Conexão").should("be.visible");
      cy.contains("Resultados").should("be.visible");
    });
  });

  context("Cenário: Usuário Logado", () => {
    beforeEach(() => {
      // Simula um login antes de cada teste neste bloco
      localStorage.setItem("token", "um-token-de-teste-valido");
      localStorage.setItem(
        "user",
        JSON.stringify({ fullname: "Professor Teste" })
      );
      cy.visit("/");
    });

    it('O link "Início" deve levar para o dashboard ("/dashboard")', () => {
      cy.contains("Início").click();
      cy.url().should("include", "/dashboard");
    });

    it('Deve exibir o botão "Criar Projeto" e a saudação ao usuário', () => {
      cy.contains("Olá, Professor!").should("be.visible");
      cy.contains("Criar Projeto").should("be.visible");
    });
  });
});
