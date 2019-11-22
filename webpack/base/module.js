const DefaltCSSPlugin = require('./css');
const { extractCSS, extractSass, extractLess } = DefaltCSSPlugin;
const dirs = require('./dirs');

module.exports = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'happypack/loader?id=babel'
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
        use: ['css-loader']
      })
    },
    {
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]__[name]-[hash:base64:8]'
              }
            }
          },
          'sass-loader'
        ]
      })
    },
    {
      test: /\.less$/,
      use: extractLess.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader?javascriptEnabled=true']
      })
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 5000,
          include: dirs.src,
          name: 'images/[path][name].[ext]'
        }
      }]
    }
  ]
};
