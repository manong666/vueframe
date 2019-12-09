import { get_index } from "@/api/index";
import PersonCard from "@/components/PersonCard/PersonCard";
import RankList from "@/components/RankList/RankList";
import IntegralList from "@/components/IntegralList/IntegralList";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import GlobalTab from "@/components/GlobalTab/GlobalTab";
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
    return this.$store.state.user.info.roleID === "01" ? (
      <div> </div>
    ) : this.$store.state.user.info.roleID === "02" ? (
      <div />
    ) : (
      <div class={S.mainPage}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          <PersonCard {...{ props: { data: this.data } }} />
          <RankList {...{ props: { data: this.data } }} />
          <IntegralList {...{ props: { data: this.data } }} />
        </div>
        <GlobalTab />
      </div>
    );
  },
  methods: {
    getUserData() {
      get_index().then(resp => (this.data = resp));
    }
  }
};
