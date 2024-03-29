const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1366,
  vierportHeight: 768,
  projectId: '77khe7',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
