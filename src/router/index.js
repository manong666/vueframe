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
  routes: [
    {
      path: "/",
      name: "main",
      meta: {
        title: "首页"
      },
      component: () => import("@/views/main")
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录"
      },
      component: () => import("@/views/login")
    },
    {
      path: "/rank",
      name: "rank",
      meta: {
        title: "排名"
      },
      component: RouteView,
      children: [
        {
          path: "main",
          name: "rankMain",
          meta: {
            title: "排名"
          },
          component: () => import("@/views/rank/main")
        },
        {
          path: "integral",
          name: "rankIntegral",
          meta: {
            title: "积分排名"
          },
          component: () => import("@/views/rank/integral")
        },
        {
          path: "lottery",
          name: "lottery",
          meta: {
            title: "奖券排名"
          },
          component: () => import("@/views/rank/lottery")
        }
      ]
    },
    {
      path: "/apply",
      name: "apply",
      meta: {
        title: "申请"
      },
      component: RouteView,
      children: [
        {
          path: "main",
          name: "applyMain",
          meta: {
            title: "申请"
          },
          component: () => import("@/views/apply/main")
        }
      ]
    },
    {
      path: "/my",
      name: "my",
      meta: {
        title: "我的"
      },
      component: RouteView,
      children: [
        {
          path: "main",
          name: "myMain",
          meta: {
            title: "我的"
          },
          component: () => import("@/views/my/main")
        },
        {
          path: "applyList",
          name: "applyList",
          meta: {
            title: "申请池"
          },
          component: () => import("@/views/my/applyList")
        },
        {
          path: "applyOne/:applyId",
          name: "applyOne",
          meta: {
            title: "申请单项"
          },
          component: () => import("@/views/my/applyOne")
        },
        {
          path: "integralDetail",
          name: "integralDetail",
          meta: {
            title: "积分明细"
          },
          component: () => import("@/views/my/integralDetail")
        }
      ]
    },
    {
      path: "/examine",
      name: "examine",
      meta: {
        title: "审批"
      },
      component: RouteView,
      children: [
        {
          path: "main",
          name: "examineMain",
          meta: {
            title: "我的"
          },
          component: () => import("@/views/examine/main")
        },
        {
          path: "list/:approvalId",
          name: "examineList",
          meta: {
            title: "审批列表"
          },
          component: () => import("@/views/examine/list")
        },
        {
          path: "detail/:detailId",
          name: "examineDetail",
          meta: {
            title: "审批详情"
          },
          component: () => import("@/views/examine/detail")
        }
      ]
    },
    {
      path: "/staffManage",
      name: "staffManage",
      meta: {
        title: "员工管理"
      },
      component: RouteView,
      children: [
        {
          path: "list",
          name: "staffManageList",
          meta: {
            title: "员工列表"
          },
          component: () => import("@/views/staffManage/list")
        },
        {
          path: "info",
          name: "info",
          meta: {
            title: "员工信息"
          },
          component: () => import("@/views/staffManage/info")
        },
        {
          path: "add",
          name: "add",
          meta: {
            title: "新增员工"
          },
          component: () => import("@/views/staffManage/add")
        },
        {
          path: "edit/:id",
          name: "edit",
          meta: {
            title: "编辑员工"
          },
          component: () => import("@/views/staffManage/edit")
        },
        {
          path: "logList",
          name: "logList",
          meta: {
            title: "员工奖扣列表"
          },
          component: () => import("@/views/staffManage/logList")
        },
        {
          path: "addGift",
          name: "addGift",
          meta: {
            title: "新增员工奖扣"
          },
          component: () => import("@/views/staffManage/addGift")
        },
        {
          path: "editGift/:id",
          name: "editGift",
          meta: {
            title: "编辑员工奖扣"
          },
          component: () => import("@/views/staffManage/editGift")
        }
      ]
    },
    {
      path: "/storeManage",
      name: "storeManage",
      meta: {
        title: "门店管理"
      },
      component: RouteView,
      children: [
        {
          path: "list",
          name: "storeManageList",
          meta: {
            title: "门店列表"
          },
          component: () => import("@/views/storeManage/list")
        },
        {
          path: "detail",
          name: "storeManageDetail",
          meta: {
            title: "门店详情"
          },
          component: () => import("@/views/storeManage/detail")
        },
        {
          path: "addStore",
          name: "storeManageAdd",
          meta: {
            title: "新增门店"
          },
          component: () => import("@/views/storeManage/add")
        },
        {
          path: "editStore/:id",
          name: "storeManageEdit",
          meta: {
            title: "编辑门店"
          },
          component: () => import("@/views/storeManage/edit")
        }
      ]
    },
    {
      path: "/integralRule",
      name: "integralRule",
      meta: {
        title: "积分规则"
      },
      component: RouteView,
      children: [
        {
          path: "list",
          name: "integralRuleList",
          meta: {
            title: "积分规则列表"
          },
          component: () => import("@/views/integralRule/list")
        },
        {
          path: "detail",
          name: "integralRuleDetail",
          meta: {
            title: "积分规则详情"
          },
          component: () => import("@/views/integralRule/detail")
        },
        {
          path: "addRule",
          name: "integralRuleAdd",
          meta: {
            title: "新建积分规则"
          },
          component: () => import("@/views/integralRule/addRule")
        },
        {
          path: "editRule/:id",
          name: "integralRuleEdit",
          meta: {
            title: "编辑积分规则"
          },
          component: () => import("@/views/integralRule/editRule")
        }
      ]
    }
  ]
});
