const fs = require('fs')
const path = require('path');
const glob = require('glob');
const dirs = require('../base/dirs.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  cwd: dirs.pages,      // 在pages目录里找
  sync: true,           // 这里不能异步，只能同步
};

// 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
const globInstance = new glob.Glob('!(_)*/!(_)*', options);

// 最多支持两级，如：pages/user/index.js 和 pages/user/info/index.js
// 注：不允许命名成main
let pages = [];
globInstance.found.map(p => {
  pages.push(p.replace(/\/[\w-]*\.\w*$/g, ''));
})

// 首页
pages.push('main');
// 去重
pages = Array.from(new Set(pages));

// 配置和生成入口文件
let entries = {};
let htmlPlugins = [];
pages.map(page => {
  let _filename = '', _template = '';

  if (page != 'main') {
    // 入口
    entries[page] = path.resolve(dirs.pages, page + '/index');
    // 生成HTML文件
    _filename = `${page}/index.html`;
    _template = path.resolve(dirs.pages, `./${page}/index.html`);
    // 使用${page}/index.html 或 pages/common.html作为模板
    _template = fs.existsSync(_template) ? _template : path.resolve(dirs.pages, './common.html');
  } else {
    entries['main'] = path.resolve(dirs.src, 'index');
    _filename = 'index.html';
    _template = path.resolve(dirs.src, './index.html');
  }

  const plugin = new HtmlWebpackPlugin({
    filename: _filename,
    template: _template,
    // 每个页面自己的JS文件，以及公共JS（还没加）
    chunks: ['common', page],
    // 为静态资源生成hash值
    // hash: true,
    xhtml: true
  });

  htmlPlugins.push(plugin);
});

module.exports = { pages, entries, htmlPlugins }; 