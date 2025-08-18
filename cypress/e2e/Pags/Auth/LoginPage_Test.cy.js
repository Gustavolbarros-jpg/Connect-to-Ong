describe("Testes da Página de Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  // --- Teste 1: Carregamento da Página e Elementos Principais ---
  it("deve carregar a página de login e exibir os elementos principais", () => {
    cy.contains("Acesse sua conta").should("be.visible");

    cy.contains("E-mail:").should("be.visible");
    cy.get('input[placeholder="Digite seu e-mail..."]').should("be.visible");

    cy.contains("Senha:").should("be.visible");
    cy.get('input[placeholder="Digite sua Senha..."]').should("be.visible");

    cy.contains("Entrar").should("be.visible").and("be.enabled");

    cy.contains("Esqueci a senha").should("be.visible");

    cy.contains("Não tem uma conta? Cadastre-se").should("be.visible");

    cy.contains("Acesso ONGs").should("be.visible");
  });

  // --- Teste 3: Navegação para a Página de Cadastro ---
  it('deve navegar para a página de cadastro ao clicar em "Cadastre-se"', () => {
    cy.contains("Cadastre-se").click();
    cy.url().should("include", "/register"); // <- Mudar o local host
  });

  // --- Teste 4: Navegação para a Página de Recuperação de Senha ---
  it('deve navegar para a página de recuperação de senha ao clicar em "Esqueci a senha"', () => {
    cy.contains("Esqueci a senha").click();
    // A URL agora é '/verification-email' conforme solicitado
    cy.url().should("include", "/verification-email"); // <- Mudar o local host
  });

  // --- Teste 5: Navegação para a Página de Acesso ONGs ---
  it("deve navegar para a página de Acesso ONGs", () => {
    cy.contains("Acesso ONGs").click();
    // Assume que este botão leva diretamente para a página de listagem de ONGs
    cy.url().should("include", "/ongs"); // <- Mudar o local host
  });
});
