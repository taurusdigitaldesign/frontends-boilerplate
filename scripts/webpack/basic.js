const path = require('path');
const dirs = require('./base/dirs');
const modules = require('./base/module');
const { entries } = require('./base/pages');

module.exports = {
  context: dirs.src,

  entry: entries,

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '~': dirs.src,
      '@assets': path.resolve(dirs.src, './.assets')
    }
  },

  module: modules
};
