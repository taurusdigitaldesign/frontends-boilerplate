const fs = require('fs');
const path = require('path');
const glob = require('glob');
const dirs = require('./dirs');
const argv = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [];
const entries = glob.sync(path.resolve(dirs.src, './app/**/index.tsx')).reduce((entArr, item) => {
  const name = item.match(/([\w-]+)(?=\/index.tsx)/)[1];

  // 如果没有个性化页面模板，启用公共模板
  let template = path.resolve(dirs.src, `./app/${name}/index.ejs`);
  if (!fs.existsSync(template)) {
    template = path.resolve(dirs.src, `./app/common.ejs`);
  }

  // html-webpack-plugin
  const config = {
    chunks: [name],
    template: template,
    filename: `${name}.html`,
    favicon: path.resolve(dirs.src, './.assets/images/favicon.ico'),
    hash: false,
    env: argv && argv.env ? argv.env : 'dev',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  };
  pages.push(new HtmlWebpackPlugin(config));

  entArr[name] = item;
  return entArr;
}, {});

module.exports = { entries, pages };
