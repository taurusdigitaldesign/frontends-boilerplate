const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HASH = `[chunkhash]`;

// 创建多个实例，分别对Sass、Less进行编译
// 一般情况下Less对变动机会更小，有利于浏览器缓存
const extractSass = new ExtractTextPlugin(
  `css/bundle_sass.${HASH}.min.css`
);
const extractLess = new ExtractTextPlugin(
  `css/bundle_less.${HASH}.min.css`
);
const extractCSS = new ExtractTextPlugin(
  `css/bundle_css.${HASH}.min.css`
);

module.exports = {
  extractCSS,
  extractSass,
  extractLess
};