const merge = require('webpack-merge');
const common = require('./webpack.renderer.common.js');
const webpack = require('webpack');
const config = require('./config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: config.dist,
    port: 3000,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
