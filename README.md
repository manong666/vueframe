# vue-cli架子

## 安装依赖
项目最初需要使用 `yarn` 或者 `npm install` 进行依赖包的安装，后才能启动项目
e.g. 如若无依赖改动，无需在每次启动之前执行安装依赖操作

## 启动命令
 `yarn serve` 或者 `npm run serve`

## 目录结构
|-- xxx
    |-- .browserslistrc
    |-- .env
    |-- .env.production
    |-- .env.staging
    |-- .eslintrc.js
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- jest.config.js
    |-- jsconfig.json
    |-- package.json
    |-- postcss.config.js
    |-- vue.config.js
    |-- yarn.lock
    |-- .vscode
    |   |-- settings.json
    |-- mock
    |   |-- config.json
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- scripts
    |   |-- privateKey
    |   |-- upload.js
    |-- src
    |   |-- App.js
    |   |-- App.scss
    |   |-- main.js
    |   |-- api
    |   |   |-- index.js
    |   |   |-- name.js
    |   |-- assets
    |   |   |-- logo.png
    |   |-- components
    |   |-- mock
    |   |-- plugins
    |   |   |-- http-base.js
    |   |   |-- http-interceptors.js
    |   |-- router
    |   |   |-- index.js
    |   |-- store
    |   |   |-- index.js
    |   |   |-- module
    |   |       |-- user.js
    |   |-- styles
    |   |   |-- base.scss
    |   |   |-- text.scss
    |   |   |-- variables.scss
    |   |-- views
    |       |-- main.js
    |       |-- test.js
    |-- unit
        |-- example.spec.js
