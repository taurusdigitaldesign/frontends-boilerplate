const path = require('path')
const webpack = require('webpack')
const dirs = require('./config/base/dirs.config')

module.exports = {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    // devtool: '#source-map',
    output: {
        path: path.resolve(dirs.root, 'vendor'),
        filename: '[name].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor',
            // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
            path: path.resolve(dirs.root, './vendor/manifest.json')
        }),
      ]
}