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
    console.log("scrollBehavior", to, from, savedPosition);
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
      path: "/",
      name: "main",
      title: "首页",
      component: () => import("@/views/main")
    },
    {
      path: "/login",
      name: "login",
      title: "登录",
      component: () => import("@/views/login")
    },
    {
      path: "/rank",
      name: "rank",
      title: "排名",
      component: RouteView,
      children: [
        {
          path: "main",
          name: "rankMain",
          title: "排名",
          component: () => import("@/views/rank/main")
        },
        {
          path: "integral",
          name: "rankIntegral",
          title: "积分排名",
          component: () => import("@/views/rank/integral")
        },
        {
          path: "lottery",
          name: "lottery",
          title: "奖券排名",
          component: () => import("@/views/rank/lottery")
        }
      ]
    },
    {
      path: "/apply",
      name: "apply",
      title: "申请",
      component: RouteView,
      children: [
        {
          path: "main",
          name: "applyMain",
          title: "申请",
          component: () => import("@/views/apply/main")
        }
      ]
    },
    {
      path: "/my",
      name: "my",
      title: "我的",
      component: RouteView,
      children: [
        {
          path: "main",
          name: "myMain",
          title: "我的",
          component: () => import("@/views/my/main")
        },
        {
          path: "applyList",
          name: "applyList",
          title: "申请池",
          component: () => import("@/views/my/applyList")
        },
        {
          path: "applyOne/:applyId",
          name: "applyOne",
          title: "申请单项",
          component: () => import("@/views/my/applyOne")
        },
        {
          path: "integralDetail",
          name: "integralDetail",
          title: "积分明细",
          component: () => import("@/views/my/integralDetail")
        }
      ]
    },
    {
      path: "/examine",
      name: "examine",
      title: "审批",
      component: RouteView,
      children: [
        {
          path: "main",
          name: "examineMain",
          title: "我的",
          component: () => import("@/views/examine/main")
        },
        {
          path: "list",
          name: "examineList",
          title: "审批列表",
          component: () => import("@/views/examine/list")
        },
        {
          path: "detail",
          name: "examineDetail",
          title: "审批详情",
          component: () => import("@/views/examine/detail")
        }
      ]
    },
    {
      path: "/staffManage",
      name: "staffManage",
      title: "员工管理",
      component: RouteView,
      children: [
        {
          path: "list",
          name: "staffManageList",
          title: "员工列表",
          component: () => import("@/views/staffManage/list")
        },
        {
          path: "info",
          name: "info",
          title: "员工信息",
          component: () => import("@/views/staffManage/info")
        },
        {
          path: "add",
          name: "add",
          title: "新增员工",
          component: () => import("@/views/staffManage/add")
        },
        {
          path: "logList",
          name: "logList",
          title: "员工奖扣列表",
          component: () => import("@/views/staffManage/logList")
        },
        {
          path: "addGift",
          name: "addGift",
          title: "新增员工奖扣",
          component: () => import("@/views/staffManage/addGift")
        }
      ]
    },
    {
      path: "/storeManage",
      name: "storeManage",
      title: "门店管理",
      component: RouteView,
      children: [
        {
          path: "list",
          name: "storeManageList",
          title: "门店列表",
          component: () => import("@/views/storeManage/list")
        },
        {
          path: "detail",
          name: "storeManageDetail",
          title: "门店详情",
          component: () => import("@/views/storeManage/detail")
        }
      ]
    },
    {
      path: "/integralRule",
      name: "integralRule",
      title: "积分规则",
      component: RouteView,
      children: [
        {
          path: "list",
          name: "integralRuleList",
          title: "积分规则列表",
          component: () => import("@/views/integralRule/list")
        },
        {
          path: "detail",
          name: "integralRuleDetail",
          title: "积分规则详情",
          component: () => import("@/views/integralRule/detail")
        }
      ]
    }
  ]
});
