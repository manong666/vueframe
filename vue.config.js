const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const before = isProduction ? null : require("vue-cli-fast-mock");
// const before = require("vue-cli-fast-mock");

module.exports = {
  outputDir: process.env.OUTDIIR,
  productionSourceMap: !isProduction,
  publicPath: process.env.VUE_APP_PUBLICPATH,
  devServer: {
    before,
    port: 8080,
    host: "dev.10010.com",
    proxy: {
      // 基础设施
      "/api": {
        ws: false,
        changeOrigin: true,
        target: "https://xxx.asiainfo.com",
        pathRewrite: {
          "^/api": "/" // rewrite path
        }
      }
    }
  },
  css: {
    modules: true,
    loaderOptions: {
      css: {
        localIdentName: isProduction
          ? "[hash:base64:10]"
          : "[name]-[local]-[hash:base64:7]"
      },
      sass: {
        data: `@import "~@/styles/variables.scss";` // scss全局变量
      }
    }
  },
  chainWebpack: config => {
    config.module
      // src内的 css代码 开启 css module
      .rule("css")
      .include.add(path.resolve(__dirname, "src"))
      .end()
      .end()
      // node_modules 内的css文件 启用相应的 loader
      .rule("includeCss")
      .test(/\.css$/)
      .include.add(path.resolve(__dirname, "node_modules"))
      .end()
      .use("vue-style-loader")
      .loader("vue-style-loader")
      .options({
        sourceMap: false,
        shadowMode: false
      })
      .end()
      .use("css-loader")
      .loader("css-loader")
      .options({
        sourceMap: false,
        importLoaders: 2
      })
      .end()
      .use("postcss-loader")
      .loader("postcss-loader")
      .options({
        sourceMap: false
      });
  }
};
