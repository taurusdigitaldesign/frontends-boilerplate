const dirs = require('./base/dir-vars.config')

module.exports = {
    path: dirs.buildDir,
    filename: '[name]/bundle.js',
    publicPath: 'dist/'
}