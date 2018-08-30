const plugins = require('./plugins.base.config');
const CompressionPlugin = require('compression-webpack-plugin')

// gzip压缩
plugins.push(new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
}))

module.exports = plugins;
