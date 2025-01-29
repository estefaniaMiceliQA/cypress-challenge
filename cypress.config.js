const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'w87s6u',
  e2e: {
    setupNodeEvents(on, config) {
      // Registra el preprocesador de Cucumber
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/integration/**/*.feature',
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.js',
  },
});
