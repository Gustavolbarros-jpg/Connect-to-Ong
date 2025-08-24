describe("Testes da Página de Cadastro", () => {
  // --- Dados de Teste ---
  const VALID_NAME = "Professor Teste";
  const VALID_EMAIL = `teste${Date.now()}@universidade.com`;
  const VALID_PASSWORD = "SenhaSegura123!";

  const MISMATCH_PASSWORD = "SenhaDiferente123!";
  const INVALID_EMAIL_FORMAT = "emailinvalido";
  const EXISTING_EMAIL = "existente@universidade.com";

  beforeEach(() => {
    cy.visit("/register"); // <- Mudar o local host
  });

  // --- Teste 1: Carregamento da Página e Elementos Principais ---
  it("deve carregar a página de cadastro e exibir todos os elementos principais", () => {
    cy.contains("Cadastre-se").should("be.visible");

    cy.contains("Nome do Responsável do Projeto").should("be.visible");
    cy.get('input[placeholder="Digite seu nome..."]').should("be.visible");

    cy.contains("E-mail Institucional").should("be.visible");
    cy.get('input[placeholder="Digite seu E-mail..."]').should("be.visible");

    cy.contains("Nome da Instituição de Ensino").should("be.visible");
    cy.get(
      'input[placeholder="Digite o nome da instituição de ensino..."]'
    ).should("be.visible");

    cy.contains("Senha").should("be.visible");
    cy.get('input[placeholder="Digite sua senha..."]').should("be.visible");

    cy.contains("Confirme a Senha").should("be.visible");
    cy.get('input[placeholder="Confirme a sua senha..."]').should("be.visible");

    cy.contains("Continuar").should("be.visible").and("be.enabled");
  });

  // --- Teste 2: Cadastro com Sucesso ---
  it("deve permitir o cadastro com dados válidos e redirecionar para a página de sucesso", () => {
    cy.get('input[placeholder="Digite seu nome..."]').type(VALID_NAME);
    cy.get('input[placeholder="Digite seu E-mail..."]').type(VALID_EMAIL);
    cy.get(
      'input[placeholder="Digite o nome da instituição de ensino..."]'
    ).type("Universidade de Testes Ltda");
    cy.get('input[placeholder="Digite sua senha..."]').type(VALID_PASSWORD);
    cy.get('input[placeholder="Confirme a sua senha..."]').type(VALID_PASSWORD); // Senhas devem ser iguais

    cy.contains("Continuar").click();
  });
});
