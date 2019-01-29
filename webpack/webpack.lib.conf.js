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
      'mobx-react',
    ],
    // 如果将UI打进lib，无法享受antd的按需加载功能
    // ui: [
    //   'antd',
    // ],
  },

  // devtool: '#source-map',

  output: {
    library: '[name]_[chunkhash]',
    path: dirs.lib,
    publicPath: '/',
    filename: '[name].[chunkhash].dll.js',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[chunkhash]',
      // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      path: path.resolve(dirs.lib, './[name].manifest.json')
    })
  ]
};