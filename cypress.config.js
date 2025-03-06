const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');
const report = require('multiple-cucumber-html-reporter');
const os = require('os');

module.exports = defineConfig({
  projectId: 'w87s6u',
  e2e: {
    setupNodeEvents(on, config) {
      // Registra el preprocesador de Cucumber
      on('file:preprocessor', cucumber());
      on('after:run', (results) => {
        const jsonDir = 'cypress/reports/cucumber-json';
        const reportDir = 'cypress/reports/html';

        if (!fs.existsSync(jsonDir)) {
          fs.mkdirSync(jsonDir, { recursive: true });
        }

        fs.readdirSync('cypress/reports/').forEach((file) => {
          if (file.endsWith('.json.json')) {
            const oldPath = `cypress/reports/${file}`;
            const newPath = `cypress/reports/cucumber-json/${file.replace('.json.json', '.json')}`;
            fs.renameSync(oldPath, newPath);
          }
        });

        report.generate({
          jsonDir,
          reportPath: reportDir,
          metadata: {
            browser: {
              name: results.browserName || 'Electron',
              version: results.browserVersion || 'Latest',
            },
            device: os.hostname(),
            platform: {
              name: os.platform(),
              version: os.release(),
            },
          },
        });

        console.log(`Cucumber HTML report generated at: ${reportDir}/index.html`);
      });

      return config;
    },
    specPattern: 'cypress/integration/**/*.feature',
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.js',
  },
});
