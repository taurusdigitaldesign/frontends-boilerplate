const path = require('path')

const dirs = {}
// 根目录
dirs.root = path.resolve(__dirname, '../../')
// 配置目录
dirs.config = path.resolve(dirs.root, './config')
// 源码目录
dirs.src = path.resolve(dirs.root, './src')
// 多页面目录
dirs.pages = path.resolve(dirs.src, './pages')
// 生成目录
dirs.build = path.resolve(dirs.root, './dist')

module.exports = dirs