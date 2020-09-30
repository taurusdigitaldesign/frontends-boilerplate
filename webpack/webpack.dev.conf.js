const os = require('os');
const webpack = require('webpack');
const dirs = require('./base/dirs');
const { pages } = require('./base/pages');
const base = require('./webpack.base.conf');

const plugins = [].concat(pages);

const config = {
  ...base,

  mode: 'development',

  output: {
    path: dirs.dist,
    publicPath: '/',
    filename: 'js/bundle_[name].js'
  },

  devtool: '#cheap-module-eval-source-map',

  plugins: plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]),

  devServer: {
    hot: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true
    },
    // https: true,
    historyApiFallback: true,
    contentBase: dirs.dist
  },
};

module.exports = config;
