import S from "./PersonCard.module.scss";
export default {
  name: "PersonCard",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toMonth() {}
  },
  render() {
    return (
      <div class={S.total}>
        <div class={S.lineOne}>
          <div>
            {
              <div class={S.user}>
                {this.data.userInfo.userName || "请登录"}
              </div>
            }
            <div class={S.post}>员工</div>
          </div>
          {/* <div class={S.options}>设置</div> */}
        </div>
        <div class={S.lineTwo}>
          <div onClick={this.toMonth}>
            <div class={S.monthIntegral}>
              +{this.data.userInfo.integralMonth}
            </div>
            <div class={S.detail}>本月积分</div>
            <div class={S.rankMonth}>
              第{this.data.userInfo.rankMonth || "-"}名
            </div>
          </div>
        </div>
        <div class={S.lineThree}>
          <div class={S.integral}>
            <div>总积分</div>
            <div>{this.data.userInfo.integralTotal}</div>
          </div>
          <div class={S.rank}>
            <div>总榜</div>
            <div>{this.data.userInfo.rank}</div>
          </div>
        </div>
      </div>
    );
  }
};
