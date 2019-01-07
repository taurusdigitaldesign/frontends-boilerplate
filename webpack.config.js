const argv = require('yargs').argv;
module.exports = require(`./config/webpack.${argv['env']}`);