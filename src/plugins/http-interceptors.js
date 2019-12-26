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
  "0001": () => router.push("/login"),
  default: msg => Notify(msg)
};

http.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      console.log("zouni");
      config.headers["api_token"] = store.state.user.token;
    }
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
    } = resp;

    try {
      responseFuncObj[code](data);
    } catch (error) {
      responseFuncObj.default(msg);
    }

    return resp;
  },
  error => {
    Notify("网络异常，请检查网络环境后重试");
    return Promise.reject(error);
  }
);
