const fs = require('fs');
const path = require('path');
const glob = require('glob');
const dirs = require('./dirs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 压缩、混淆、去掉console等
const minifyOptions =
  process.env.RUN_ENV !== 'prod'
    ? {}
    : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      };

const entries = {};
const pages = [];

glob.sync(path.resolve(dirs.src, './pages/*/index.tsx')).forEach(item => {
  const name = item.match(/([\w-]+)(?=\/index.tsx)/)[1];

  let template = path.resolve(dirs.src, `./pages/${name}/index.ejs`);
  if (!fs.existsSync(template)) {
    template = path.resolve(dirs.src, `./pages/common.ejs`);
  }

  entries[name] = item;
  pages.push(
    new HtmlWebpackPlugin({
      inject: true,
      chunks: [name],
      template: template,
      filename: `${name}.html`,
      favicon: path.resolve(dirs.src, './.assets/images/favicon.ico'),
      minify: minifyOptions
    })
  );
});

module.exports = { entries, pages };
