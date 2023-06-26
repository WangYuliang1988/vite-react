React 学习工程

## 工程搭建

使用 [Vite](https://cn.vitejs.dev/guide/) 进行工程搭建。

1. 执行 `npm create vite@latest` 命令，并根据提示输入工程名称（vite-react），选择工程框架（React），选择工程配置（TypeScript + SWC）；
2. 切换至工程目录，执行 `npm install`，安装工程所需依赖包；
3. 执行 `npm run dev`，启动本地服务。

## 目录结构

```sh
vite-react/                     # 根目录
|
+- node_modules/                # 存放各依赖库
|
+- public/                      # 存放静态资源，该目录下的文件会被直接复制到最终的打包文件中，引用时需使用绝对路径
|
+- src/                         # 存放源码
|  |
|  +- assets                    # 存放静态资源，该目录下的文件会被解析为模块依赖，通过相对路径引用
|  |
|  +- App.css                   # App 组件样式
|  |
|  +- App.tsx                   # App 组件源码
|  |
|  +- index.css                 # 全局样式
|  |
|  +- index.tsx                 # 主入口文件，处理全局配置并将根组件挂载到 index.html 上
|  |
|  +- vite-env.d.ts             # 环境变量声明文件，为 Vite 提供的内建环境变量和开发者自定义的环境变量提供类型信息，用于智能提示和类型检查
|
+- .eslintrc.cjs                # ESlint 配置文件
|
+- index.html                   # 首页入口文件
|
+- package.json                 # 工程依赖描述文件
|
+- tsconfig.json                # 配置 TypeScript 对工程源码和的工程配置文件编译选项，包括 tsconfig.node.json
|
+- tsconfig.node.json           # 配置 TypeScript 对工程配置文件（如 vite.config.ts）的编译选项
|
+- vite.config.js               # Vite 项目配置文件
```

## React

React 是一个用于构建用户界面的 JavaScript 库，起源于 Facebook 的内部项目，并于 2013 年 5 月开源。

参考：https://react.dev/

## Vite

Vite 是 Vue 官方开发的全新构建工具，随 Vue3 一同发布，支持构建 Vue（不支持 Vue2）、React 等多种类型的项目。

Vite 在开发环境下基于浏览器原生的 ES6 Modules，无需打包，浏览器直接通过 HTTP 请求 JavaScript 模块，并在运行时处理，服务启动速度更快。

Vite 在生产环境下基于 Rollup 打包，同 Webpack 类似，需要将所有用到的 JavaScript 资源打包为 Bundle，因此 Vite 在为生产环境打包时花费时间与基于 Webpack 的打包工具相差不大。

参考：https://cn.vitejs.dev/guide/

## TypeScript

TypeScript 是微软在 2012 年推出的开源编程语言，其诞生是为了解决 JavaScript 因动态类型设计导致的不适合开发大型应用的问题（原因：动态类型语言编写的代码，随着代码量的增加，代码的阅读和修改将变得越来越困难）。

TypeScript 是 JavaScript 的一个超集，支持 ES6 标准，并扩展了 JavaScript 的语法，为 JavaScript 增加了编译时类型检查等特性，并可以编译成纯 JavaScript 运行。

参考：https://www.typescriptlang.org/

## SWC

SWC (Sppedy Web Compiler) 是一个类 Babel 的工具，用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法。

SWC 使用 Rust 编写，相比 Babel 具有更快的编译速度，目前已经可以成为 Babel 的成熟替代。

参考：https://swc.rs/
