# anttest

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```
环境变量配置
## ENV
- 通用：.env
- 生产：.env.production
- 测试：.env.staging

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目小技巧
路由跳转后不刷新数据 可以在组件内引入`reload`方法，在`router.push();`后去调用`this.reload();` 具体方法在`app.jsx` 中


## 演示2
lorem