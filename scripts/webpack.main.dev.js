const merge = require('webpack-merge');
const common = require('./webpack.main.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});
