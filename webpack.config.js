const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 8080,
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};