const dirs = require('./base/dirs.js');
const { entries } = require('./webpack/pages.js');
const output = require('./webpack/output');

module.exports = {
    entry: entries,
    output: output,
    resolve: {
        alias: {
            '@': dirs.src
        }
    }
}