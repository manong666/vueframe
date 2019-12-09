import http from "../plugins/http-base.js";
import api_URL from "./name";
import { merge } from "lodash";

// http.request(merge(defaultConf, reqConf))

/**
 * @description 登录接口
 */
export const get_login = () =>
  // param =>
  // http.request(
  //   merge(
  //     {
  //       url: api_URL.login
  //     },
  //     param
  //   )
  // );
  import("@/mock/login").then(resp => resp.default);
/**
 * @description 首页接口
 */
export const get_index = () =>
  // param =>
  //   http.request(
  //     merge(
  //       {
  //         url: api_URL.index
  //       },
  //       param
  //     )
  //   );
  import("@/mock/userInfo").then(resp => resp.default);
/**
 * @description 积分排名查询接口
 */
export const get_integralQuery = param =>
  http.request(
    merge(
      {
        url: api_URL.integralQuery
      },
      param
    )
  );

/**
 * @description 奖券排名查询接口
 */
export const get_ticketQuery = param =>
  http.request(
    merge(
      {
        url: api_URL.ticketQuery
      },
      param
    )
  );

/**
 * @description 我的_申请列表接口
 */
export const get_applyList = param =>
  http.request(
    merge(
      {
        url: api_URL.applyList
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
        url: api_URL.applyDetailList
      },
      param
    )
  );

/**
 * @description 我的_申请积分接口
 */
export const get_applyIntegral = () =>
  // param =>
  //   http.request(
  //     merge(
  //       {
  //         url: api_URL.applyIntegral
  //       },
  //       param
  //     )
  //   );
  import("@/mock/applyRuleResult").then(resp => resp.default);
/**
 * @description 我的_奖项名称和对应ID列表接口
 */
export const get_integralNameList = () =>
  import("@/mock/integralList").then(resp => resp.default);
// param =>
//   http.request(
//     merge(
//       {
//         url: api_URL.integralNameList
//       },
//       param
//     )
//   );

/**
 * @description 首页_积分明细查询接口__我的_积分明细查询接口
 */
export const get_integralDetailQuery = param =>
  http.request(
    merge(
      {
        url: api_URL.integralDetailQuery
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
        url: api_URL.list
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
        url: api_URL.detailList
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
        url: api_URL.info
      },
      param
    )
  );

/**
 * @description 员工列表接口
 */
export const get_staff_list = param =>
  http.request(
    merge(
      {
        url: api_URL.staff_list
      },
      param
    )
  );

/**
 * @description 员工详情接口
 */
export const get_staff_detailList = param =>
  http.request(
    merge(
      {
        url: api_URL.staff_detailList
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
        url: api_URL.staff_delete
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
        url: api_URL.staff_add
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
        url: api_URL.encourageStaff_list
      },
      param
    )
  );

/**
 * @description 新增员工奖扣接口
 */
export const get_encourageStaff_add = param =>
  http.request(
    merge(
      {
        url: api_URL.encourageStaff_add
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
        url: api_URL.store_list
      },
      param
    )
  );

/**
 * @description 门店详情接口
 */
export const get_store_detailList = param =>
  http.request(
    merge(
      {
        url: api_URL.store_detailList
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
        url: api_URL.store_add
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
        url: api_URL.store_delete
      },
      param
    )
  );

/**
 * @description 积分规则列表查询
 */
export const get_rule_list = () =>
  // param =>
  //   http.request(
  //     merge(
  //       {
  //         url: api_URL.rule_list
  //       },
  //       param
  //     )
  //   );
  import("@/mock/ruleList").then(resp => resp.default);
/**
 * @description 积分规则列表详情
 */
export const get_rule_detailList = param =>
  http.request(
    merge(
      {
        url: api_URL.rule_detailList
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
        url: api_URL.rule_add
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
        url: api_URL.rule_delete
      },
      param
    )
  );
