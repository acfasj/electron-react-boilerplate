const config = require('./config');
const path = require('path');


module.exports = {
  mode: 'development',
  target: 'electron-main',
  entry: path.resolve(__dirname, '..', 'src/main/index.js'),
  output: {
    path: config.buildMain,
    filename: 'main.js',
  },
};
