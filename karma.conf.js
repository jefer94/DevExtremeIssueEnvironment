
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    files: [
      //'../node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.spec.js'
    ],
    frameworks: ['chai', 'mocha'],
    preprocessors: {
      'src/**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'text-summary',
      includeAllSources: true
    },
    singleRun: false,
    autoWatch: true,
    webpack: webpackConfig({ NODE_ENV: 'development' }),
    webpackMiddleware: {
      noInfo: true,
      level: 'error',
      stats: 'errors-only'
    },
  });
};

/*
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
console.log(webpackConfig)
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [ 'chai', 'mocha' ],
    //frameworks: ['jasmine', 'chai'],

    //reporters: ['progress'],
    reporters: [ 'mocha' ],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './src/main.js',
      './tests.bundle.js'
    ],

    preprocessors: {
      './tests.bundle.js': ['webpack']//,
      //'./src//.spec.js': ['babel']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
*/