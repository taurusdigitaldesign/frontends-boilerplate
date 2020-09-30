const DefaltCSSPlugin = require('./css');
const { extractCSS, extractSass, extractLess } = DefaltCSSPlugin;
const themes = require('../../src/.config/theme');
const dirs = require('./dirs');

module.exports = {
  rules: [
    {
      test: /\.tsx?$/,
      include: dirs.src,
      use: 'happypack/loader?id=babel'
    },
    {
      test: /\.conf$/,
      include: dirs.src,
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
        use: [
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: themes['custom'],
                javascriptEnabled: true
              }
            }
          }
        ]
      })
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 5000,
            include: dirs.src,
            name: 'images/[path][name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.ejs$/,
      loader: 'ejs-loader',
      options: {
        esModule: false
      }
    }
  ]
};
