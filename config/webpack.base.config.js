const path = require('path')
const dirs = require('./base/dirs.config.js')
const pages = require('./base/pages.js')

let entries = {}

pages.forEach((page) => {
    if (page != 'main') {
        entries[page] = path.resolve(dirs.pages, page + '/index')
    }
});
entries['main'] = path.resolve(dirs.src, 'index')

module.exports = {
    entry: entries,
    output: {
        path: dirs.build,
        filename: '[name]/bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': dirs.src
        }
    }
}