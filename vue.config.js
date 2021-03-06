// const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  outputDir: process.env.OUTDIIR,
  productionSourceMap: !isProduction,
  publicPath: process.env.VUE_APP_PUBLICPATH,
  devServer: {
    port: 8080
    // host: "dev.10010.com",
    // proxy: {
    // 基础设施
    // "/jf-demo-integral": {
    // ws: false,
    // changeOrigin: true,
    // target: ""
    // pathRewrite: {
    //   "^/jf-demo-integral": "/" // rewrite path
    // }
    // }
    // }
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      css: {
        modules: {
          localIdentName: isProduction
            ? "[hash:base64:10]"
            : "[name]-[local]-[hash:base64:7]"
        }
      },
      sass: {
        prependData: `@import "~@/styles/variables.scss";` // scss全局变量
      }
    }
  }
};
