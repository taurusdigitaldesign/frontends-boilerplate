const dirs = require('./base/dirs.js');
const { entries } = require('./base/pages.js');

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