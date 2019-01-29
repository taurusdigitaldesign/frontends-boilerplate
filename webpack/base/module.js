const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'happypack/loader?id=babel',
    },
    {
      test: /\.(json|conf)$/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
        ],
      }),
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?importLoaders=1&modules&localIdentName=[local]__[name]-[hash:base64:8]',
          'sass-loader',
        ],
      }),
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'less-loader?javascriptEnabled=true',
        ],
      }),
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 5000,
            name: "images/[name].[ext]"
          }
        }
      ]
    },
  ],
};