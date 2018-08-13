const path = require('path')
const dirs = require('./dir-vars.config.js')
const pages = require('./pages.config.js')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const chalk = require('chalk')

let plugins = []

// 清空buildDir
// plugins.push(new CleanWebpackPlugin(['dist'], {
//     root: dirs.rootDir,
//     verbose: true
// }))

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

module.exports = plugins