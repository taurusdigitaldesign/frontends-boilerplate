const path = require('path')
const dirs = require('./base/dirs.js')
const pages = require('./base/pages.js')

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