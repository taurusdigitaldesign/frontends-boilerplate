const path = require('path')

const dirs = {}

// 文件目录
dirs.rootDir = path.resolve(__dirname, '../../')
dirs.srcDir = path.resolve(dirs.rootDir, './src')
dirs.pagesDir = path.resolve(dirs.srcDir, './pages')
// 生成目录
dirs.buildDir = path.resolve(dirs.rootDir, './dist')
// 运行目录
dirs.runDir = path.resolve(dirs.rootDir, './dist')

module.exports = dirs