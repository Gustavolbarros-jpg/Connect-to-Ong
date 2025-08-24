describe("Testes da Página de Verificação de Email", () => {
  beforeEach(() => {
    cy.visit("/verification-email");
  });

  // --- Teste 1: Carregamento da Página e Elementos Principais ---
  it("deve carregar a página de verificação de email e exibir os elementos principais", () => {
    cy.contains("Recupere sua Conta").should("be.visible");

    cy.contains(
      'Digite "usuario@teste.com" para simular um e-mail válido.'
    ).should("be.visible");

    cy.contains("E-mail:").should("be.visible");

    cy.get('input[placeholder="Digite seu e-mail..."]').should("be.visible");

    cy.contains("Continuar").should("be.visible").and("be.enabled");

    cy.contains("Voltar para o Login").should("be.visible");
  });

  it('deve navegar de volta para a página de login ao clicar em "Voltar para o Login"', () => {
    cy.contains("Voltar para o Login").click();
    cy.url().should("include", "/login");
  });
});
