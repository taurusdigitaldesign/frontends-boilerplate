# 前端开发脚手架(frontends-boilerplate)

## 文件结构

```
├─ .babelrc
├─ .eslintignore
├─ .eslintrc.js
├─ .npmrc
├─ .prettierrc
├─ .stylelintrc
├─ jsconfig.json
├─ lint.js
├─ package.json
├─ webpack.config.js 
├─ lib
|   ├─ vender_frame.[chunk].dll.js
|   ├─ vendor_frame.manifest.dll.json
|   ├─ vender_ui.[chunk].dll.js
|   └─ vendor_ui.manifest.dll.json
├─ webpack
|   ├─ base
|   |   ├─ css.js
|   |   ├─ dirs.js
|   |   ├─ module.js
|   |   └─ pages.js 
|   ├─ webpack.base.conf.js
|   ├─ webpack.dev.conf.js
|   ├─ webpack.lib.conf.js
|   └─ webpack.prod.config.js
└─ src
    ├─ .assets
    |   ├─ images
    |   └─ style  
    |       └─ common.scss 
    ├─ .config
    |   ├─ api
    |   ├─ i18n
    |   ├─ theme
    |   └─ env.conf
    ├─ .public
    ├─ app
    │   └─ index 
    │       ├─ index.ejs
    |       ├─ index.jsx
    |       ├─ store.ts
    |       └─ style.scss
    ├─ routes
    ├─ components
    │   └─ menu 
    │       ├─ images  
    │       ├─ index.tsx
    │       ├─ store.ts
    |       └─ style.scss    
    ├─ stores
    └─ utils 
```

## 版本履历

### V1.0.0

* 使用ES6的语法
* 使用ESlint做静态语法检查
* 支持多页应用
* 支持多环境的构建脚本配置
* 支持ejs模板引擎

### V1.0.1

* 增加less-loader
* 增加postcss-loader
* 可进行 mock 和 dev 环境切换
* 支持展开运算符 "..."
* srcDir起别名 "@"
* 增加common.scss通用样式，定义各种尺寸和颜色
* 增加两个简单的辅助工具 utils/Url.js 和 utils/Cookie.js
* 增加网络请求库axios

### V1.0.2

* 拆分配置，移动端独立分支，master分支为基础版本，后续衍生出移动端分支、多页面分支等
* 组件Demo：Login

### V1.0.3

* 压缩vendor.all.js的体积，800多K -> 110K
* vendor.all.js不带sourcemap了
* vendor.all.js中增加react-router
* 修复IE下报错：Promise未定义（babel-polyfill）

### V1.0.5

* 升级React版本到16.7
* 升级Babel版本到7
* 修改目录结构

### V1.0.6

* 添加ESLint

### V1.0.7

* 经过项目实践，调整目录结构使更加合理
* 整理npm script
* 修复npm build时发生的错误
* 多页面和单页面不再区分

### V1.0.8

* 更新部分npm包和配置

### V1.0.9

* 使用TypeScript

### V1.1.0

* 升级Babel
* 改善兼容性处理方案
* 调整TypeScript用到的npm包
* 增加了相对完整的项目Demo

### V1.2.0

* antd升级为4.0
* 优化Webpack打包配置
* 修改prettier的格式化规则
* 自定义antd的主题
* 集成异常监控Sentry

