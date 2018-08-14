const path = require('path')
const dirs = require('./base/dir-vars.config.js')
const pages = require('./base/pages.config.js')
const chalk = require('chalk')

let entries = {}

pages.forEach((page) => {
    if (page != 'main') {
        entries[page] = path.resolve(dirs.pagesDir, page + '/index')
        // console.log(chalk.blue(page + ':' + entries[page]))
    }
});
entries['main'] = path.resolve(dirs.srcDir, 'index')
// console.log(chalk.blue('main:' + entries['main']))

module.exports = {
    entry: entries,
    output: {
        path: dirs.buildDir,
        filename: '[name]/bundle.js'
    }
}