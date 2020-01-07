import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { get_applyDetailList } from "@/api/index";
import S from "./applyOne.module.scss";

export default Vue.extend({
  data() {
    return {
      title: "申请单项",
      infoId: "",
      detailObj: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  destroyed() {},
  render() {
    this.infoId = this.$router.currentRoute.params?.applyId;
    const data = this.detailObj;
    return (
      <div class={S.main}>
        <div class={S.container}>
          <CellGroup>
            <Cell title="奖项名称" value={data.rewardPunishName} size="large" />
            <Cell title="申请数量" value={`${data.rewardNum}个`} size="large" />
            <Cell
              title="申请积分"
              value={`${data.integralNumber}分`}
              size="large"
              value-class={S.numb}
            />
            <Cell title="申请时间" value={data.createTime} size="large" />
            <Cell
              title="老板审批"
              value={this.getState(data.bossApprovalState)}
              size="large"
            />
            <Cell
              title="老板审批时间"
              value={data.bossApprovalTime}
              size="large"
            />
            <Cell
              title="店长审批"
              value={this.getState(data.managerApprovalState)}
              size="large"
            />
            <Cell
              title="店长审批时间"
              value={data.managerApprovalTime}
              size="large"
            />
          </CellGroup>
        </div>
      </div>
    );
  },
  methods: {
    getInfo() {
      get_applyDetailList({ data: { staffRewardPunishId: this.infoId } }).then(
        resp => {
          this.detailObj = resp.data.data[0];
        }
      );
    },
    getState(state) {
      if (state === "01") {
        return "审核通过";
      } else if (state === "02") {
        return "未通过";
      } else {
        return "待审核";
      }
    }
  }
});
