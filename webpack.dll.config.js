const path = require('path')
const webpack = require('webpack')
const dirs = require('./webpack-config/base/dir-vars.config')

module.exports = {
    mode: 'development',
    entry: {
        vendor: ['react', 'react-dom']
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(dirs.rootDir, 'vendor'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor',
            path: path.resolve(dirs.rootDir, './vendor/manifest.json')   // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
        }),
      ]
}