import http from "./http-base.js";
import { Notify } from "vant";

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
      data: { code, resultcode, resultdesc, msg, info }
    } = resp;
    switch (code || resultcode) {
      case "0000":
        break;
      default:
        Notify(msg || info || resultdesc);
        break;
    }

    return resp;
  },
  error => {
    Notify("网络异常，请检查网络环境后重试");
    return Promise.reject(error);
  }
);
