const webpack = require('webpack');
const serveStatic = require('serve-static');
const hotMiddleware = require('webpack-hot-middleware');
const devMiddleware = require('webpack-dev-middleware');
const cheerio = require('cheerio');
const express = require('express');
const devConfig = require('../config/webpack.dev.config');
const fs = require('fs');
const path = require('path');
const compiler = webpack(devConfig);
const port = 8080;

const app = new express();

let HTML = fs.readFileSync(path.resolve(__dirname, '../src/index.html'),'utf-8');
let $ = cheerio.load(HTML);
$('script').remove();
$('body').append('<script type="text/javascript" src="/js/app.js"></script>');
fs.writeFileSync(path.resolve(__dirname, '../src/index.html'), $.html());
app.use(serveStatic(path.resolve(__dirname, '../src')));
app.use(devMiddleware(compiler, {
  noInfo: true,
  // 如果false，将会给你列出一大堆无聊的信息。
  publicPath: devConfig.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(hotMiddleware(compiler));
app.listen(port,()=>{
  console.log('server start on 127.0.0.1:8080');
});