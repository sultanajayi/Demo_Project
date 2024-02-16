const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    defaultCommandTimeout: 10000,
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
    includeShadowDom: true,
    chromeWebSecuritySupport: true,
    viewportHeight: 800,
    viewportWidth: 1500,
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
