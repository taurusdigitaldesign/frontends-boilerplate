const fs = require('fs');
const path = require('path');
const glob = require('glob');
const dirs = require('./dirs');

const JSReg = /([\w-]+)(?=\/index.jsx)/;

const htmls = [];
const entries = glob.sync(path.resolve(dirs.src, './pages/**/index.jsx')).reduce((entries, item) => {
  const name = item.match(JSReg)[1];

  // 配置html-webpack-plugin
  // 如果没有个性化页面模板，启用公共模板
  let template = path.resolve(dirs.src, `./pages/${name}/index.ejs`);
  if (!fs.existsSync(template)) {
    template = path.resolve(dirs.src, `./pages/common.ejs`);
  }

  htmls.push({
    name,
    template
  });

  entries[name] = item;
  return entries;
}, {});

module.exports = { entries, htmls }; 