const merge = require('webpack-merge');
const common = require('./webpack.main.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
