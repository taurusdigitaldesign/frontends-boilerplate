const webpack = require('webpack');

module.exports = () => {
  const config =
    process.env.RUN_ENV != 'prod'
      ? require('./scripts/webpack/webpack.dev')
      : require('./scripts/webpack/webpack.prod');

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.RUN_ENV': JSON.stringify(process.env.RUN_ENV)
    })
  );

  return config;
};
