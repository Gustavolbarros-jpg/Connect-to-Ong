describe("Testes da Página de Redefinição de Senha", () => {
  beforeEach(() => {
    cy.visit("/recover-password"); // <- Mudar o local host
  });

  // --- Teste 1: Carregamento da Página e Elementos Principais ---
  it("deve carregar a página de redefinição de senha e exibir os elementos principais", () => {
    // Título principal
    cy.contains("Redefinir sua senha").should("be.visible");

    // Campo de Senha
    cy.contains("Senha").should("be.visible");
    cy.get('input[placeholder="Digite sua senha..."]').should("be.visible");

    // Campo de Confirmação de Senha
    cy.contains("Confirme a Senha").should("be.visible");
    cy.get('input[placeholder="Confirme a sua senha..."]').should("be.visible");

    // Botão 'Redefinir'
    cy.contains("Redefinir").should("be.visible");
  });
});
