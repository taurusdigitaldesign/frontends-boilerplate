# 前端开发脚手架(frontends-boilerplate)

## 文件结构

```
├─ .babelrc
├─ .eslintrc
├─ .env-cmdrc
├─ package.json
├─ webpack.config.js 
├─ webpack.dev.config.js
├─ webpack.dll.config.js
├─ config   
|   ├─ base 
|   |   ├─ dirs.js 
|   |   └─ pages.js 
|   ├─ plugins.base.config.js 
|   ├─ plugins.prod.config.js 
|   └─ webpack.base.config.js
├─ vendor
|   ├─ manifest.json
|   └─ vender.dll.js
└─ src
    ├─ layouts
    ├─ routes
    ├─ utils
    ├─ dao  
    ├─ assets
    |   ├─ config 各种配置文件，如：菜单配置、数据文件等
    |   |   ├─ menu.json
    |   |   └─ data.json
    |   ├─ iconfont
    |   ├─ images
    |   └─ style  
    |       └─ common.scss 
    ├─ components
    │   └─ menu 
    │       ├─ index.js
    |       └─ style.scss
    ├─ pages
    │   └─ user 
    │       └─ info 
    │           ├─ index.html
    |           ├─ index.js
    |           └─ style.scss
    ├─ index.html
    ├─ index.js
    └─ style.scss
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
* 修复IE下报错：Promise未定义