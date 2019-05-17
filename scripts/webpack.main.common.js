const config = require('./config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
  mode: 'development',
  target: 'electron-main',
  entry: path.resolve(__dirname, '..', 'src/main/index.js'),
  output: {
    path: config.distMain,
    filename: 'main.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
