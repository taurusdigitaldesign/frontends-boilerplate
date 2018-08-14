const webpack = require('webpack')
const plugins = require('./base/plugins.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

plugins.push(new ExtractTextPlugin('[name]/style.css'))

plugins.push(new webpack.DllReferencePlugin({
    manifest: require('../manifest.json'), // 指定manifest.json
    name: 'vendor',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  }))

module.exports = plugins;
