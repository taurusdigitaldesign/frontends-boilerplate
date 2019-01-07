const path = require('path');
const yargs = require('yargs');
const webpack = require('webpack')
const dirs = require('./base/dirs.js')
const { htmlPlugins } = require('./webpack/pages.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const envVariables = require('./env-variables');

let plugins = []

// 依赖dll
plugins.push(new webpack.DllReferencePlugin({
    // 指定manifest.json
    manifest: require('../vendor/manifest.json'),
    // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    name: 'vendor'
}))

// 生成HTML页面
plugins = plugins.concat(htmlPlugins);

// 拷贝dll.js文件，插入HTML中
plugins.push(new AddAssetHtmlWebpackPlugin([{
    filepath: path.resolve(dirs.root, './vendor/*.dll.js'),
    // outputPath: path.resolve(dirs.build, './vendor'),
    includeSourcemap: false,
    publicPath: '/'
}]))

// 独立样式文件
plugins.push(new ExtractTextPlugin('[name]/style.css'))

// 多环境变量配置
let variables = {};
Object.keys(envVariables[yargs.argv.env]).map(key => {
    variables[`process.env.${key}`] = JSON.stringify(envVariables[yargs.argv.env][key]);
});
plugins.push(new webpack.DefinePlugin(variables));

module.exports = plugins