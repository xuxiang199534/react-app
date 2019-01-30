const path = require('path');
const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig,{
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 8888,
    hot: true,
    overlay: true,
    open:true,
    compress: true
  },
  resolve:{
    extensions:['.js', '.jsx', '.less', '.scss', '.css'],
    alias:{
      '@':`${path.resolve(__dirname,'../src')}`
    },
    modules: [
      'node_modules',
      'src',
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()//热更新
  ],
})

