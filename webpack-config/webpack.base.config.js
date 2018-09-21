const path = require('path')
const dirs = require('./base/dir-vars.config.js')
const pages = require('./base/pages.config.js')

let entries = {}

pages.forEach((page) => {
    if (page != 'main') {
        entries[page] = path.resolve(dirs.pagesDir, page + '/index')
    }
});
entries['main'] = path.resolve(dirs.srcDir, 'index')

module.exports = {
    entry: entries,
    output: {
        path: dirs.buildDir,
        filename: '[name]/bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': dirs.srcDir
        }
    }
}