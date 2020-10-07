const path = require('path');
const webpack = require('webpack');
const dirs = require('./base/dirs');

module.exports = {
  context: dirs.src,

  mode: 'production',

  entry: {
    frame: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'mobx',
      'mobx-react-lite',
    ],
    ui: [
      'antd',
    ],
  },

  output: {
    library: '[name]_[chunkhash]',
    path: dirs.lib,
    publicPath: '/',
    filename: '[name].[chunkhash].dll.js',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[chunkhash:8]',
      // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      path: path.resolve(dirs.lib, './[name].manifest.json')
    })
  ]
};