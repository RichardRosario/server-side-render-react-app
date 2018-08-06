const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  //tell webpack the root file
  entry: './src/client/client.js',
  //tell webpack where the bundle should be placed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') 
  },
  mode: 'production'

};

module.exports = merge(baseConfig, config);