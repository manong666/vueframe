import { get_index, get_integralInformation } from "@/api/index";
import PersonCard from "@/components/PersonCard/PersonCard";
import RankList from "@/components/RankList/RankList";
import IntegralList from "@/components/IntegralList/IntegralList";

import GlobalTab from "@/components/GlobalTab/GlobalTab";
import BossCard from "@/components/PersonCard/BossCard";
import { Cell, CellGroup } from "vant";
import S from "./main.module.scss";
export default {
  data() {
    //  "role_id":"03",
    //  "userName":"张三",

    return {
      title: "首页",
      data: {
        userInfo: {
          rank: 1, // 总榜排名
          integralTotal: 0,
          integralToday: 0, // 今日积分
          integralWeek: 0, // 本周积分
          integralMonth: 0, // 本月积分
          integralYear: 0, // 本年积分
          rankToday: 1, // 今日积分排名
          rankWeek: 1, // 本周积分排名
          rankMonth: 1, // 本月积分排名
          rankYear: 1 // 本年积分排名
        },
        integralList: [
          // 10条
          {
            bossApprovalTime: "2020-01-09 11:50:43",
            integralNumber: -40,
            rewardPunishName: "wdfgbn",
            userName: "ccc"
          }
        ]
      }
    };
  },
  mounted() {
    this.getUserData();
    this.getIntegralList();
  },
  destroyed() {},
  render() {
    const data = this.data;
    return this.$store.state.user.info.userInfo.roleId === "01" ? (
      <div class={S.mainPage} style="background:#fff">
        <BossCard {...{ props: { data } }} />
        <CellGroup>
          <Cell title="积分管理" is-link to="/integralRule/list" />
          <Cell title="员工奖扣" is-link to="/staffManage/logList" />
          <Cell title="员工管理" is-link to="/staffManage/list" />
          <Cell title="门店管理" is-link to="/storeManage/list" />
        </CellGroup>
        <GlobalTab />
      </div>
    ) : (
      <div class={S.mainPage}>
        <div class={S.container}>
          <PersonCard {...{ props: { data } }} />
          <RankList {...{ props: { data } }} />
          <IntegralList {...{ props: { data } }} />
        </div>
        <GlobalTab />
      </div>
    );
  },
  methods: {
    getUserData() {
      get_index({
        data: {}
      }).then(resp => {
        this.data.userInfo = resp.data.data[0];
        console.log(this.data);
        this.$store.dispatch("user/info", this.data);
      });
    },
    getIntegralList() {
      get_integralInformation({ data: {} }).then(resp => {
        this.data.integralList = resp.data.data;
      });
    }
  }
};
