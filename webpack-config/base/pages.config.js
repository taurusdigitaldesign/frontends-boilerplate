const glob = require('glob');
const dirs = require('./dir-vars.config.js');

const options = {
  cwd: dirs.pagesDir,   // 在pages目录里找
  sync: true,           // 这里不能异步，只能同步
};

// 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
const globInstance = new glob.Glob('!(_)*/!(_)*', options); 

// 一个数组，形如['index/index', 'index/login', 'alert/index']
module.exports = globInstance.found; 