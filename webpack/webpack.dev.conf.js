const os = require('os');
const webpack = require('webpack');
const dirs = require('./base/dirs');
const { pages } = require('./base/pages');
const DefaltCSSPlugin = require('./base/css');
const base = require('./webpack.base.conf');
const { extractCSS, extractSass, extractLess } = DefaltCSSPlugin;
const HappyPack = require('happypack');

const plugins = [].concat(pages);
const happyPackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

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
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true
          }
        }
      ],
      threadPool: happyPackThreadPool,
      verbose: true,
    }),
    extractCSS,
    extractSass,
    extractLess
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
    // historyApiFallback: {}, // 对于多个单页应用需要专门配置
    // contentBase: path.resolve(dirs.src, 'hotDist')
    contentBase: dirs.dist
  },
};

module.exports = config;
