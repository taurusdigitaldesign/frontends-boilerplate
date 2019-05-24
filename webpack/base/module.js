const DefaltCSSPlugin = require('./css');
const { extractCSS, extractSass, extractLess } = DefaltCSSPlugin;

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'happypack/loader?id=babel',
    },
    {
      test: /\.(json|conf)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      use: extractCSS.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
        ],
      }),
    },
    {
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?importLoaders=1&modules&localIdentName=[local]__[name]-[hash:base64:8]',
          'sass-loader',
        ],
      }),
    },
    {
      test: /\.less$/,
      use: extractLess.extract({
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
        'url-loader?limit=5000&name=[path]/[name].[ext]'
      ]
    },
  ],
};