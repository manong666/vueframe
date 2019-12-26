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
/**
 * @description 首页接口
 */
export const get_index = param =>
  http.request(
    merge(
      {
        url: api_URL.index,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
// () =>
// import("@/mock/userInfo").then(resp => resp.default);
/**
 * @description 积分排名查询接口
 */
export const get_integralQuery = param =>
  http.request(
    merge(
      {
        url: api_URL.integralQuery,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
// () =>
//   import("@/mock/integralRank").then(resp => resp.default);

/**
 * @description 奖券排名查询接口
 */
export const get_ticketQuery = param =>
  http.request(
    merge(
      {
        url: api_URL.ticketQuery,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
// () =>
// import("@/mock/lotteryRank").then(resp => resp.default);

/**
 * @description 我的_申请列表接口
 */
export const get_applyList = param =>
  http.request(
    merge(
      {
        url: api_URL.applyList,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 我的_申请详情查询接口
 */
export const get_applyDetailList = param =>
  http.request(
    merge(
      {
        url: api_URL.applyDetailList,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 我的_申请积分接口
 */
export const get_applyIntegral = param =>
  http.request(
    merge(
      {
        url: api_URL.applyIntegral,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
//   () =>
// import("@/mock/applyRuleResult").then(resp => resp.default);
/**
 * @description 我的_奖项名称和对应ID列表接口
 */
export const get_integralNameList =
  // () =>
  // import("@/mock/integralList").then(resp => resp.default);
  param =>
    http.request(
      merge(
        {
          url: api_URL.integralNameList,
          method: "post",
          headers: { "content-type": "application/json;charset=UTF-8" },
          data: {}
        },
        param
      )
    );

/**
 * @description 首页_积分明细查询接口__我的_积分明细查询接口
 */
export const get_integralDetailQuery = param =>
  http.request(
    merge(
      {
        url: api_URL.integralDetailQuery,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 审批列表接口
 */
export const get_list = param =>
  http.request(
    merge(
      {
        url: api_URL.list,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 审批列表详情查询接口
 */
export const get_detailList = param =>
  http.request(
    merge(
      {
        url: api_URL.detailList,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 审批接口
 */
export const get_info = param =>
  http.request(
    merge(
      {
        url: api_URL.info,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 员工列表接口
 */
export const get_staff_list =
  // () => import("@/mock/staffList").then(resp => resp.default);
  param =>
    http.request(
      merge(
        {
          url: api_URL.staff_list,
          method: "post",
          headers: { "content-type": "application/json;charset=UTF-8" },
          data: {}
        },
        param
      )
    );

/**
 * @description 员工详情接口
 */
export const get_staff_detailList =
  // () => import("@/mock/staffDetail").then(resp => resp.default);
  param =>
    http.request(
      merge(
        {
          url: api_URL.staff_detailList,
          method: "post",
          headers: { "content-type": "application/json;charset=UTF-8" },
          data: {}
        },
        param
      )
    );

/**
 * @description 删除员工接口
 */
export const get_staff_delete = param =>
  http.request(
    merge(
      {
        url: api_URL.staff_delete,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 新增员工接口
 */
export const get_staff_add = param =>
  http.request(
    merge(
      {
        url: api_URL.staff_add,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 员工奖扣记录接口
 */
export const get_encourageStaff_list = param =>
  http.request(
    merge(
      {
        url: api_URL.encourageStaff_list,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
// () => import("@/mock/staffRewardList").then(resp => resp.default);

/**
 * @description 新增员工奖扣接口
 */
export const get_encourageStaff_add = param =>
  http.request(
    merge(
      {
        url: api_URL.encourageStaff_add,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 删除员工奖扣接口
 */
export const get_encourageStaff_delete = param =>
  http.request(
    merge(
      {
        url: api_URL.encourageStaff_delete,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 门店列表接口
 */
export const get_store_list = param =>
  http.request(
    merge(
      {
        url: api_URL.store_list,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
// () => import("@/mock/shopList").then(resp => resp.default);

/**
 * @description 门店详情接口
 */
export const get_store_detailList =
  // () => import("@/mock/shopDetails").then(resp => resp.default);
  param =>
    http.request(
      merge(
        {
          url: api_URL.store_detailList,
          method: "post",
          headers: { "content-type": "application/json;charset=UTF-8" },
          data: {}
        },
        param
      )
    );

/**
 * @description 新增门店接口
 */
export const get_store_add = param =>
  http.request(
    merge(
      {
        url: api_URL.store_add,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 删除门店接口
 */
export const get_store_delete = param =>
  http.request(
    merge(
      {
        url: api_URL.store_delete,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 积分规则列表查询
 */
export const get_rule_list = param =>
  http.request(
    merge(
      {
        url: api_URL.rule_list,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
// () =>
// import("@/mock/ruleList").then(resp => resp.default);
/**
 * @description 积分规则列表详情
 */
export const get_rule_detailList = param =>
  http.request(
    merge(
      {
        url: api_URL.rule_detailList,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 新增积分规则
 */
export const get_rule_add = param =>
  http.request(
    merge(
      {
        url: api_URL.rule_add,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );

/**
 * @description 删除积分规则
 */
export const get_rule_delete = param =>
  http.request(
    merge(
      {
        url: api_URL.rule_delete,
        method: "post",
        headers: { "content-type": "application/json;charset=UTF-8" },
        data: {}
      },
      param
    )
  );
