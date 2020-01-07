import S from "./RankList.module.scss";
export default {
  data() {
    return {};
  },
  props: {
    data: Object
  },
  mounted() {},
  methods: {},
  render() {
    console.log(this.data);
    return (
      <div class={S.rankBox}>
        <div class={S.today}>
          <div class={S.title}>今日积分</div>
          <div class={S.integral}>
            {this.data.userInfo.integralToday ?? "-"}
          </div>
          <div class={S.rank}>第{this.data.userInfo.rankToday ?? "-"}名</div>
        </div>
        <div class={S.month}>
          <div class={S.title}>本周积分</div>
          <div class={S.integral}>{this.data.userInfo.integralWeek ?? "-"}</div>
          <div class={S.rank}>第{this.data.userInfo.rankWeek ?? "-"}名</div>
        </div>
        <div class={S.year}>
          <div class={S.title}>本年积分</div>
          <div class={S.integral}>{this.data.userInfo.integralYear ?? "-"}</div>
          <div class={S.rank}>第{this.data.userInfo.rankYear ?? "-"}名</div>
        </div>
      </div>
    );
  }
};
