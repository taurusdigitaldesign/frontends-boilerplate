const plugins = require('./plugins.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

plugins.push(new ExtractTextPlugin('[name]/style.css'))
plugins.push(new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
}))

module.exports = plugins;
