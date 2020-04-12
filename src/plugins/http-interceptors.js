import http from "./http-base.js";
import { Notify } from "vant";
import store from "@/store/index";
import router from "@/router/index";
// /**
//  * @description _tips
//  */
// const TipConfig = (
//   config = {
//     on: true, //or false 默认true
//     status: false, // 加载显示与否
//     msg: "拼命加载", // 提示消息
//     // icon: "icon", // 提示图标
//     bg: "rgba(0, 0, 0, 0.8)", // 提示背景
//     delay: 500 // 防抖
//   }
// ) => config;

const responseFuncObj = {
  "0000": resp => {
    console.log(resp);
  },
  default: msg => Notify(msg)
};

http.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Notify("网络异常，请检查网络环境后重试");
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  resp => {
    const {
      data: { code, msg, data }
      // code: httpCode
    } = resp;

    // http状态码处理
    console.log(resp);

    // 应用业务编码处理
    try {
      responseFuncObj[code](data);
    } catch (error) {
      responseFuncObj.default(msg);
    }

    return resp;
  },
  error => {
    console.log("error", error);
    // if (error.response) {
    //   // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else {
    //   // Something happened in setting up the request that triggered an Error
    //   console.log("Error", error.message);
    // }
    Notify("网络异常，请检查网络环境后重试");
    return Promise.reject(error);
  }
);
