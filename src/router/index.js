import Vue from "vue";
import Router from "vue-router";
// import RouteView from "@/components/layout/route";

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
  routes: [
    {
      path: "/main",
      name: "main",
      meta: {
        title: "首页"
      },
      component: () => import("@/views/main")
    },
    {
      path: "/tabs",
      name: "tabs",
      meta: { title: "tab页签" },
      component: () =>
        import(/* webpackChunkName: "tabs" */ "@/views/tabs/tabs"),
      children: [
        {
          path: "/tabs/tab1",
          name: "tab1",
          meta: { title: "tab页签" }
        },
        {
          path: "/tabs/tab2",
          name: "tab2",
          meta: { title: "tab页签" },
          component: () =>
            import(/* webpackChunkName: "tabs" */ "@/views/tabs/tab2")
        },
        {
          path: "/tabs/tab3",
          name: "tab3",
          meta: { title: "tab页签" }
        },
        {
          path: "*",
          name: "404",
          component: () => import("@/views/exception/404")
        }
      ]
    },
    { path: "/", redirect: "/tabs/tab1" }
  ]
});
