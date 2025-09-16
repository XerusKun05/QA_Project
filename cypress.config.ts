import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', 
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
  video: false
});
