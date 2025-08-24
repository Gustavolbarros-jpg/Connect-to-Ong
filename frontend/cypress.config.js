// cypress.config.js (na raiz do projeto)

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Define a URL base para todos os testes `cy.visit`
    baseUrl: 'http://localhost:5173',
    
    // Ajuda o Cypress a encontrar seus testes na estrutura que você mostrou
    specPattern: 'cypress/e2e/**/*.cy.js', 

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});