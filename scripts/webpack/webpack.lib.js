const path = require('path');
const webpack = require('webpack');
const dirs = require('./base/dirs');

module.exports = {
  context: dirs.src,

  mode: 'production',

  entry: {
    frame: [
      'axios',
      'dayjs',
      'mobx',
      'mobx-react-lite',
      // 'react',
      // 'react-dom',
      // 'react-router-dom',
    ],
    // ui: [
    //   'antd',
    // ],
  },

  output: {
    library: '[name]_[chunkhash:8]',
    path: dirs.lib,
    publicPath: '/',
    filename: '[name].[chunkhash:8].dll.js',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[chunkhash:8]',
      // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      path: path.resolve(dirs.lib, './[name].manifest.json')
    })
  ]
};