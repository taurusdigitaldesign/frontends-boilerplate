const dirs = require('../base/dirs');

module.exports = {
  path: dirs.build,
  filename: '[name]/bundle.[chunkhash:8].js',
  chunkFilename: '[name]/[name].[chunkhash:8].js',
  publicPath: '/'
};