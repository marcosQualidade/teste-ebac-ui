const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7d37ge",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    video: true,
  },
});
