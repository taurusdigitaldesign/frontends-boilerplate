const path = require('path')
const base = require('./webpack-config/base/webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const plugins = require('./webpack-config/plugins.dev.config')
const dirs = require('./webpack-config/base/dir-vars.config');

const config = {
    ...base,
    mode: 'development',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                include: dirs.srcDir,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                module: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                })
            }

        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true
    }
};

module.exports = config
