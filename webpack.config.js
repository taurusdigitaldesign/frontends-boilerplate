const argv = require('yargs').argv;
const devConfig = require('./config/webpack.dev.config');
const prodConfig = require('./config/webpack.prod.config');


switch (argv['env']) {
    case 'dev':
        module.exports = devConfig;
        break;
    default:
        module.exports = prodConfig;
        break;
}
