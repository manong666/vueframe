import http from "../plugins/http-base.js";
// import { translateHref } from "../plugins/transHref.js";
import { merge } from "lodash";

const mergeConf = (reqConf = {}, defaultConf = {}) =>
  http.request(merge(defaultConf, reqConf));

// 基础部分
export const Login = userConf =>
  mergeConf(userConf, {
    url: "/user/login",
    _tips: {
      msg: "正在登陆，请稍后。。。"
    }
  });
