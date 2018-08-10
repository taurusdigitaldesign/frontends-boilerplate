const path = require('path')
const dirs = require('./dir-vars.config.js')
const pages = require('./pages.config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let plugins = []

// 清空buildDir
plugins.push(new CleanWebpackPlugin([dirs.buildDir]))

// 生成HTML页面
pages.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/index.html`,
        template: path.resolve(dirs.pagesDir, `./${page}/index.html`),
        chunks: [page],     // 每个页面自己的JS文件，以及公共JS（还没加）
        // hash: true,      // 为静态资源生成hash值
        xhtml: true,
    });
    plugins.push(htmlPlugin);
});

module.exports = plugins