const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 分别对Sass、Less、CSS进行编译
const extractSass = new ExtractTextPlugin('css/bundle_sass.[chunkhash].min.css');
const extractLess = new ExtractTextPlugin('css/bundle_less.[chunkhash].min.css');
const extractCSS = new ExtractTextPlugin('css/bundle_css.[chunkhash].min.css');

module.exports = {
  extractCSS,
  extractSass,
  extractLess
};
