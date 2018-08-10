
module.exports = {
    entry: require('./webpack-config/entry.config'),
    output: require('./webpack-config/output.config'),
    module: require('./webpack-config/module.prod.config'),
    plugins: require('./webpack-config/plugins.prod.config')
}