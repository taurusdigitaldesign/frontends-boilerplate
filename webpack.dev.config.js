
module.exports = {
    entry: require('./webpack-config/entry.config'),
    output: require('./webpack-config/output.config'),
    module: require('./webpack-config/module.dev.config'),
    plugins: require('./webpack-config/plugins.dev.config'),
    devServer: require('./webpack-config/devServer.config')
}