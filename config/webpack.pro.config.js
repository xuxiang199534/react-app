const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig,{
  mode: 'production',
  plugins:[
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css"
    }),
  ],
  optimization:{
    runtimeChunk:{
      name: "manifest"
    },
    splitChunks:{
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    },
    minimizer:[
      new UglifyJsPlugin({
        uglifyOptions:{
          cache: true,
          parallel: true, // 开启并行压缩，充分利用cpu
          sourceMap: false,
          extractComments: false, // 移除注释
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  resolve:{
    extensions:['.js', '.jsx', '.less', '.scss', '.css'],
    alias:{
      '@':`${path.resolve(__dirname,'../src')}`
    },
  }
})

