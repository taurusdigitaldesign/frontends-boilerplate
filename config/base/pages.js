const glob = require('glob');
const dirs = require('./dirs.js');

const options = {
  cwd: dirs.pages,   // 在pages目录里找
  sync: true,           // 这里不能异步，只能同步
};

// 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
const globInstance = new glob.Glob('!(_)*/!(_)*', options); 

// 只有一级目录的情况，如user/index.js
let found = []
globInstance.found.forEach((page) => {
  found.push(page.replace(/\/[\w-]*\.\w*$/g, ''))
})
// 去重
found = Array.from(new Set(found))
// 首页
found.push('main')

// 一个数组，形如['index/index', 'index/login', 'alert/index']
module.exports = found; 