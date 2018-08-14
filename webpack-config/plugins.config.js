const path = require('path')
const webpack = require('webpack')
const dirs = require('./base/dir-vars.config.js')
const pages = require('./base/pages.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const chalk = require('chalk')

let plugins = []

// 依赖dll
plugins.push(new webpack.DllReferencePlugin({
    manifest: require('../vendor/manifest.json'), // 指定manifest.json
    name: 'vendor',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
}))

// console.log(chalk.blue(pages))

// 生成HTML页面
pages.forEach((page) => {
    let _filename = '', _template = ''

    if (page != 'main') {
        _filename = `${page}/index.html`
        _template = path.resolve(dirs.pagesDir, `./${page}/index.html`)
    } else {
        _filename = 'index.html'
        _template = path.resolve(dirs.srcDir, `./index.html`)
    }

    const htmlPlugin = new HtmlWebpackPlugin({
        filename: _filename,
        template: _template,
        chunks: ['common', page],     // 每个页面自己的JS文件，以及公共JS（还没加）
        // hash: true,      // 为静态资源生成hash值
        xhtml: true,
    });
    plugins.push(htmlPlugin);
});

// 拷贝dll.js文件，插入HTML中
plugins.push(new AddAssetHtmlWebpackPlugin([{
    filepath: path.resolve(dirs.rootDir, './vendor/*.dll.js'),
    includeSourcemap: false,
    publicPath: '/'
}]))

module.exports = plugins