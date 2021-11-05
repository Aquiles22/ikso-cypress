const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require("@cypress/browserify-preprocessor");
const { exec } = require("child_process");
const path = require('path');
const fs = require('fs-extra');

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.unshift(['tsify']);
  on('before:run', (results) => { 
    exec('npm run clean:reports')
  });
  on('file:preprocessor', cucumber());
  on('after:run', (results) => { 
    exec('npm run merge:reports')
  });
  on('before:browser:launch', (browser, launchOptions) => {

    if (browser.name === 'chrome') {
      launchOptions.args.push('--auto-open-devtools-for-tabs')
      launchOptions.args.push('--cypress-remote-debugging-port=9222')
      return launchOptions
    }

  })
  const env = config.env.configFile || "dev";
  function getConfigurationByFile(env) {
    const pathToConfigFile = path.resolve("cypress/enviroments", `${env}-cypress.json`);
    return fs.readJson(pathToConfigFile);
  }
  return getConfigurationByFile(env);
}
