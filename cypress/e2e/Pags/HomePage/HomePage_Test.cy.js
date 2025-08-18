describe("Testes da Página Inicial (HomePage)", () => {
  beforeEach(() => {
    cy.visit("/"); // <- Mudar o local host
  });

  // --- Teste 1: NavBar ---

  // --- Teste 1: Navegação da Navbar - Link 'Início' ---
  it('O NavBar. O botão "Ínicio" deve dar um reload na página incial', () => {
    cy.contains("Início").click();
    cy.url().should("include", "/"); // <- Mudar o local host
  });

  // --- Teste 2: Navegação da Navbar - Link 'Universidades' ---
  it('O botão "Universidades" deve navegar para a página de Universidades.', () => {
    cy.contains("Universidade").click();
    cy.url().should("include", "/university"); //<- Mudar o local host
  });

  // --- Teste 3: Navegação da Navbar - Link 'ONGs' ---
  it('O botão "ONGs" deve navegar para a página das ONGs.', () => {
    cy.contains("ONGs").click();
    cy.url().should("include", "/ongs");
  });

  // --- Teste 4: Navegação da Navbar - Link 'Acessar Perfil/Login' ---
  it('O botão "Login" deve navegar para a página de Login', () => {
    cy.contains("Login").click();
    cy.url().should("include", "/login");
  });

  // --- Teste 5: Navegação da Navbar - Botão 'Cadastre-se' ---
  it('O botão "Cadastre-se" deve navegar para a página de cadastro', () => {
    cy.contains("Cadastre-se").click();
    cy.url().should("include", "/register");
  });

  // --- Test 2: Sections ---

  // --- Teste 1: Carregamento da Página main section ---
  it("Ao iniciar a página, deve ser mostrada a Main Section e seus elementos internos.", () => {
    // Verifica se o título principal da Main Section está visível
    cy.contains(
      "Conecte-se a ONGs e transforme sua pesquisa em impacto social."
    ).should("be.visible");

    // Verifica se o parágrafo da Main Section está visível
    cy.contains(
      "Conectamos universidades e ONGs em projetos sociais que desenvolvem soft skills e geram impacto real."
    ).should("be.visible");

    // Verifica se o botão principal de Call-to-Action ('Começar projeto agora!') está visível
    cy.contains("Começar projeto agora!").should("be.visible");
  });

  // --- Teste 2: Botão "Começar projeto agora!" ---
  it('O botão "Começar projeto agora!" deve direcionar o usuário para a página de registro.', () => {
    cy.contains("Começar projeto agora!").click();
    cy.url().should("include", "/register");
  });

  // --- Teste 3: Seção "Soluções de soft skills" ---
  it("Posteriormente, deve ser exibido a segunda section e seus elementos internos.", () => {
    // Verifica se o título principal da section está visível
    cy.contains("Soluções de soft skills fortalecem competências.").should(
      "be.visible"
    );

    // Verifica se o primeiro elemento da section está visível
    cy.contains("Comunicação").should("be.visible");
    cy.contains(
      "É a capacidade de transmitir e receber informações de forma clara, objetiva e respeitosa."
    ).should("be.visible");

    // Verifica se o segundo elemento da section está visível
    cy.contains("Empatia").should("be.visible");
    cy.contains(
      "É a habilidade de se colocar no lugar do outro, compreendendo seus sentimentos e perspectivas."
    ).should("be.visible");

    // Verifica se o terceiro elemento da section está visível
    cy.contains("Colaboração").should("be.visible");
    cy.contains(
      "Refere-se à capacidade de trabalhar bem em equipe, contribuindo com ideias, respeitando diferentes opiniões e buscando objetivos comuns."
    ).should("be.visible");
  });

  // --- Teste 4: Seção "Como funciona?" ---
  it("E por último, a terceira section e seus elementos internos.", () => {
    // Verifica se o título principal da section está visível
    cy.contains("Como Funciona?").should("be.visible");

    // Verifica se o primeiro elemento da section está visível
    cy.contains("Cadastro").should("be.visible");
    cy.contains(
      "Universidades se registram com seus interesses e áreas de atuação."
    ).should("be.visible");

    // Verifica se o segundo elemento da section está visível
    cy.contains("Conexão").should("be.visible");
    cy.contains(
      "A plataforma cruza os dados e sugere parcerias ideais."
    ).should("be.visible");

    // Verifica se o terceiro elemento da section está visível
    cy.contains("Resultados").should("be.visible");
    cy.contains(
      "Projetos finalizados geram certificados e impacto real na comunidade."
    ).should("be.visible");
  });
});
