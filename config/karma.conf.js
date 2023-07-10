module.exports = function(config) {
  config.set({
    basePath: '../',

    files: [
      'app/lib/angular-1.2.32/angular.js',
      'app/lib/angular-1.2.32/angular-*.js',
      'app/lib/iso-3166-country-codes-angular/*.js',
      'test/lib/angular-1.2.32/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: true,

    frameworks:['jasmine'],

    browsers: ['chrome_without_security'],

    plugins: [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    customLaunchers: {
      chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
  }
}
