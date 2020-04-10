import http from "../plugins/http-base.js";
import api_URL from "./name";
import { merge } from "lodash";

// http.request(merge(defaultConf, reqConf))

/**
 * @description 登录接口
 */
export const get_login = 
// param =>
//   http.request(
//     merge(
//       {
//         url: api_URL.login,
//         method: "post",
//         headers: { "content-type": "application/json;charset=UTF-8" },
//         data: {}
//       },
//       param
//     )
//   );
() => import("@/mock/login").then(resp => resp.default);
