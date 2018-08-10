const path = require('path')
const dirs = require('./base/dir-vars.config.js')
const pages = require('./base/pages.config.js')
// const chalk = require('chalk')

let entries = {}

pages.forEach((page) => {
    entries[page] = path.resolve(dirs.pagesDir, page + '/index');
    // console.log(chalk.blue(entries[page]))
});

module.exports = entries;