# vue-cli架子

## 安装依赖
项目最初需要使用 `yarn` 或者 `npm install` 进行依赖包的安装，后才能启动项目
e.g. 如若无依赖改动，无需在每次启动之前执行安装依赖操作

## 启动命令
 `yarn serve` 或者 `npm run serve`

## 目录结构

```  
    .
    ├── .browserslistrc
    ├── .env //本地环境变量
    ├── .env.production //生产环境环境变量
    ├── .env.staging //测试环境环境变量
    ├── .eslintrc.js //eslint配置文件
    ├── .gitignore
    ├── README.md
    ├── babel.config.js //babel配置文件
    ├── jest.config.js 
    ├── jsconfig.json
    ├── package.json //项目依赖文件配置文件
    ├── postcss.config.js //css后处理器
    ├── vue.config.js //node环境配置
    ├── .vscode 
    |   ├── settings.json 
    ├── mock
    |   ├── config.json
    ├── public //入口文件
    |   ├── favicon.ico
    |   ├── index.html
    ├── scripts
    |   ├── privateKey
    |   ├── upload.js //部署工具脚本（需要填写服务器相关信息）
    ├── src
    |   ├── App.js //全局页面
    |   ├── App.scss
    |   ├── main.js //导入组件页面
    |   ├── api
    |   |   ├── index.js //接口文件
    |   |   ├── name.js //接口变量文件
    |   ├── assets
    |   |   ├── logo.png
    |   ├── components  //组件库
    |   ├── mock //mock模拟数据
    |   ├── plugins
    |   |   ├── http-base.js 
    |   |   ├── http-interceptors.js //拦截器
    |   ├── router
    |   |   ├── index.js //路由文件
    |   ├── store //数据存储工具（vuex）
    |   |   ├── index.js
    |   ├── styles
    |   |   ├── base.scss
    |   |   ├── text.scss
    |   |   ├── variables.scss
    |   ├── views //页面组件
    |       ├── main.js 
    |       ├── test.js //模板
```

## 开发教程
本章节主要通过流程图为读者展示开发总流程，细节部分还需读者阅读相关技术文档。
```flow
st=>start: 开始

stpage=>operation: 处理页面展示层
op=>operation: app.js处理公共展示内容
op1=>operation: 添加页面
op2=>operation: src/views目录下新建js文件以及css样式文件
oprouter=>operation: 配置路由(router/index.js下routes中新增对象（建议使用按需加载）)
opcom=>operation: 添加组件
opcom2=>operation: src/components目录下新建js文件以及css样式文件
opimport=>operation: 页面组件中引入组件

cond=>condition: 是否需要引入自定义组件


e=>end: 结束
e2=>end: 结束

st->stpage->op->op1->op2->cond
cond(yes)->opcom->opcom2->opimport->oprouter->e
cond(no)->oprouter->e
```


