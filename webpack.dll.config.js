const path = require('path')
const webpack = require('webpack')
const dirs = require('./webpack-config/base/dir-vars.config')

module.exports = {
    mode: 'development',
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(dirs.buildDir, 'vendor'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.resolve(__dirname, 'manifest.json') // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
        }),
      ]
}