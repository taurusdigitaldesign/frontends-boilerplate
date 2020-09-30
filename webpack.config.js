const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
  const config =
    process.env.RUN_ENV != 'prod'
      ? require('./webpack/webpack.dev.conf')
      : require('./webpack/webpack.prod.conf');

  if (config && config.plugins && Array.isArray(config.plugins)) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_ENV': JSON.stringify(process.env.RUN_ENV)
      })
    );

    if (argv && argv.anal) {
      // --anal=1 输出包的体积分析
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerPort: 8088,
          openAnalyzer: false
        })
      );
    }
  }

  return config;
};
