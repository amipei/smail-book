const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) =>(merge(common(env), {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: "../build",
    port: 3000,
    hot: true,
    https: true,
    public: 'www.amipei.xyz',
    publicPath: '/',
    open: true,
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true,
    key: fs.readFileSync(path.resolve(__dirname, '../amipei.xyz.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../amipei.xyz.pem')),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ]
}))