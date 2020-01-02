import { get_index } from "@/api/index";
import PersonCard from "@/components/PersonCard/PersonCard";
import RankList from "@/components/RankList/RankList";
import IntegralList from "@/components/IntegralList/IntegralList";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import GlobalTab from "@/components/GlobalTab/GlobalTab";
import BossCard from "@/components/PersonCard/BossCard";
import { Cell, CellGroup } from "vant";
import S from "./main.module.scss";
export default {
  data() {
    return {
      title: "首页",
      data: {
        userInfo: {
          rank: "", // 总榜排名
          integral: "",
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
            id: "",
            name: "",
            ruleName: "",
            ruleNum: 1,
            time: 1 // 绝对时间
          }
        ]
      }
    };
  },
  mounted() {
    this.getUserData();
  },
  destroyed() {},
  render() {
    const data = this.data;
    return this.$store.state.user.info.roleID === "01" ? (
      <div class={S.mainPage} style="background:#fff">
        <GlobalHeader {...{ props: { title: this.title } }} />
        <BossCard {...{ props: { data } }} />
        <CellGroup>
          <Cell title="积分管理" is-link to="integralRule/list" />
          <Cell title="员工奖扣" is-link to="staffManage/logList" />
          <Cell title="员工管理" is-link to="staffManage/list" />
          <Cell title="门店管理" is-link to="storeManage/list" />
        </CellGroup>
        <GlobalTab />
      </div>
    ) : (
      <div class={S.mainPage}>
        <GlobalHeader {...{ props: { title: this.title } }} />
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
      }).then(resp => (this.data = resp.data.data[0]));
    }
  }
};

// integralMonth: -195
// integralToday: null
// integralYear: -145
// rankWeek: 2
// rankMonth: 2
// role_id: "03"
// user_name: "李四"
// rankToday: null
// rank: 2
// integralWeek: -140
// rankYear: 2
// integralTotal: -145
