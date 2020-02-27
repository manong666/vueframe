import Vue from "vue";
import Router from "vue-router";
import RouteView from "@/components/layout/route";

Vue.use(Router);

let base = process.env.BASE_URL;
// 兼容 渠道商 编码
const getQD_REG = new RegExp(`${base.replace(/\//g, "\\/")}\\S*`);
const QD = location.pathname.replace(getQD_REG, "");
base = `${QD}${base}`;

export default new Router({
  mode: "history",
  base,
  QD,
  // 恢复 上次浏览位置 仅在同一个项目中可用
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (savedPosition) {
    //       resolve(savedPosition);
    //     } else {
    //       resolve({ x: 0, y: 0 });
    //     }
    //   }, 500);
    // });
  },
  routes:[]
});
