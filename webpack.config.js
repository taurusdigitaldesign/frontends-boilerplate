
module.exports = {
    entry: require('./webpack-config/entry.config'),
    output: require('./webpack-config/output.config'),
    module: require('./webpack-config/module.product.config'),
    plugins: require('./webpack-config/plugins.product.config')
}