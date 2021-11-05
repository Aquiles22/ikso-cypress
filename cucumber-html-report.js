var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonDir: 'cucumber_report',
    output: './cucumber_report/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    storeScreenshots: true,
    screenshotsDirectory: './cypress/screenshots/',
    noInlineScreenshots: true
};

reporter.generate(options);