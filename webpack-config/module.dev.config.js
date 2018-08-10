const dirs = require('./base/dir-vars.config')
const moduleConfig = require('./base/module.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

moduleConfig.rules.push(
    {
        test: /\.less$/,
        include: dirs.srcDir,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        module: true
                        // minimize: true,
                        // '-autoprefixer': true
                    }
                },
                {
                    loader: 'less-loader',
                }
            ]
        })
    }
)

module.exports = moduleConfig