describe("Testes da Página Universidades (InfoPage)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/university");
  });

  // --- Teste 1: Carregamento da Página main section ---
  it("Ao iniciar a página, deve ser mostrada a Main Section e seus elementos internos.", () => {
    // Verifica se o título principal da Main Section está visível
    cy.contains("A Universidade como Agente de Transformação Social").should(
      "be.visible"
    );

    // Verifica se o parágrafo da Main Section está visível
    cy.contains(
      "Conectamos o conhecimento acadêmico às necessidades reais das ONGs"
    ).should("be.visible");

    // Verifica se o botão principal de Call-to-Action ('Quero Participar!') está visível
    cy.contains("Quero Participar!").should("be.visible");
  });

  // --- Teste 2: Botão "Quero Participar!!" ---
  it('O botão "Quero Participar!" deve direcionar o usuário para a página de registro.', () => {
    cy.contains("Quero Participar!").click();
    cy.url().should("include", "/register");
  });

  // --- Teste 3: Segunda Section ---

  it("Posteriormente, deve ser exibido a segunda section e seus elementos internos.", () => {
    // Verifica se o título principal da section está visível
    cy.contains("Nosso Propósito").should("be.visible");

    // Verifica se o primeiro parágrafo da section está visível
    cy.contains(
      "Aproximar a universidade da realidade social, por meio de parcerias com ONGs."
    ).should("be.visible");

    // Verifica se o segundo parágrafo da section está visível
    cy.contains(
      "Gerar impacto social mútuo, beneficiando tanto as ONGs quanto a formação dos alunos."
    ).should("be.visible");

    // Verifica se o terceiro parágrafo da section está visível
    cy.contains(
      "Criar pontes entre educação e impacto social, aproximando universitários de causas relevantes."
    ).should("be.visible");
  });

  it("E por último, a terceira section e seus elementos internos.", () => {
    // Verifica se o título principal da section está visível
    cy.contains("Como as universidades participam?").should("be.visible");

    // Verifica se o parágrafo da section está visível
    cy.contains(
      "A universidade pode explorar projetos de ONGs, escolher onde colaborar e oferecer apoio com pesquisa, voluntariado ou conhecimento técnico. Também pode propor novas iniciativas e criar parcerias que gerem impacto social real."
    ).should("be.visible");
  });
});
