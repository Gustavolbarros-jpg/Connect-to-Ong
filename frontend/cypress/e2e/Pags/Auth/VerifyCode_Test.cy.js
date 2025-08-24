describe('Testes da Página de Confirmação de Envio de E-mail de Redefinição', () => {

    beforeEach(() => {
        cy.visit('/verify-code');// <- Mudar o local host
    });

    // --- Teste 1: Carregamento da Página e Conteúdo Principal ---
    it('deve carregar a página de confirmação de envio de e-mail e exibir o conteúdo correto', () => {
        // Verifica o texto principal de confirmação
        cy.contains('Enviamos um link de redefinição de senha para o e-mail:').should('be.visible');

        // Verifica o título das instruções
        cy.contains('Instruções:').should('be.visible');

        // Verifica cada item da lista de instruções
        cy.contains('Abra seu aplicativo de e-mail.').should('be.visible');
        cy.contains('Procure por uma mensagem de Connect to Ong.').should('be.visible');
        cy.contains('Clique no link para criar uma nova senha.').should('be.visible');
    });

});