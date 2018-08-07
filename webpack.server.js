const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  //inform webpack that bundle is for node, not for browser
  target: 'node',

  //tell webpack the root file
  entry: './src/index.js',
  //tell webpack where the bundle should be placed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') 
  },
  mode: 'development',

  externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);