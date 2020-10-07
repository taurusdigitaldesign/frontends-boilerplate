const { 
  readFileSync,
  readdirSync, 
  statSync, 
  writeFileSync, 
  fstat, 
  existsSync, 
  mkdir, 
  mkdirSync 
} = require('fs')
const { join } = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse');

const root = './src/pages';

const winPath = (pathStr) => {
  return pathStr.replace(/\\/g, '/');
}

const isReactComponent = (code) => {
  let hasJSXElement = false;
  const ast = parse(code, {
    sourceType: 'module',
    plugins: [
      'jsx',
      'typescript',
      'classProperties',
      'dynamicImport',
      'exportDefaultFrom',
      'exportNamespaceFrom',
      'functionBind',
      'nullishCoalescingOperator',
      'objectRestSpread',
      'optionalChaining',
      'decorators-legacy',
    ]
  });
  traverse.default(ast, {
    JSXElement(path) {
      hasJSXElement = true;
      path.stop()
    },
    JSXFragment(path) {
      hasJSXElement = true;
      path.stop()
    }
  })

  return hasJSXElement;
}

const getFiles = (root) => {
  return readdirSync(root).filter(file => {
    const absFile = join(root, file);
    const fileStat = statSync(absFile);
    const isDirectory = fileStat.isDirectory();
    const isFile = fileStat.isFile();

    // 1、以 . 或 _ 开头的文件或目录
    if (file.charAt(0) === '.') return false;
    if (file.charAt(0) === '_') return false;

    // 2、以 d.ts 结尾的类型定义文件
    if (/\.d\.ts$/.test(file)) return false;

    // 3、以 test.ts、spec.ts、e2e.ts 结尾的测试文件   （适用于 .js、.jsx 和 .tsx 文件）
    if (/\.(test|spec|e2e)\.(j|t)sx?$/.test(file)) return false;


    // 4、components 和 component 目录
    // 5、utils 和 util 目录
    if(isDirectory && ['components', 'component', 'utils', 'util'].includes(file.toLocaleLowerCase())) {
      return false;
    }

    if (isFile) {

      // 6、不是 .js、.jsx、.ts 或 .tsx 文件
      if (!/\.(j|t)sx?$/.test(file)) return false;
      const content = readFileSync(absFile, 'utf-8');

      // 7、文件内容不包含 JSX 元素
      if (!isReactComponent(content)) return false;
    }
    return true;
  })

}

const getRoutes = (files, relDir, result) => {
  const routes = []
  files.forEach(file => {
    const absFile = join(relDir, file);
    const fileStat = statSync(absFile);
    const isDirectory = fileStat.isDirectory();

    if(isDirectory) {
      const filesInDirectory = getFiles(absFile);
      getRoutes(filesInDirectory, absFile, result)
      /*
      const childRoutes = getRoutes(filesInDirectory, absFile)
      routes.push({
        name: file,
        path: winPath(absFile).replace('src/pages','').replace('/index.tsx', ''),
        component: winPath(absFile).replace('src/', '')
      })
      */
    } else {
      result.push({
        name: file,
        path: winPath(absFile).replace('src/routes','').replace('/index.tsx', ''),
        component: winPath(absFile).replace('src/', '')
      })
    }
  })

  return routes;
}

(function() {
  const files = getFiles(root);
  const result = []
  getRoutes(files, root, result);

  const dirRoot = './'
  const routerConfigPath = 'src/routes/config.js'
  const routerIndexPath = 'src/routes/index.js'
  const folders = routerConfigPath.split('/').slice(0, -1)
  folders.reduce((acc, folder) => {
    const folderPath = acc + folder + '/'
    if(!existsSync(folderPath)) {
      mkdirSync(folderPath)
    }
    return folderPath
  }, dirRoot)

  writeFileSync(dirRoot+routerConfigPath, "export default " + JSON.stringify(result, null, 2))
  writeFileSync(dirRoot+routerIndexPath, `
import React from 'react';
import { Route } from 'react-router-dom';
import routeConfig from './config';

export default () => routeConfig
  .map((route, i) => (
    <Route 
      exact 
      key={i} 
      path={route.path} 
      component={require('~/' + route.component).default} 
    />
  ))
  `)
})()