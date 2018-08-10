const plugins = require('./base/plugins.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

plugins.push(new ExtractTextPlugin('[name]/style.css'))

module.exports = plugins;
