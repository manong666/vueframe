import Vue from "vue";
import { CellGroup, Cell } from "vant";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import { get_detailList } from "@/api/index";
import S from "./detail.module.scss";
export default Vue.extend({
  data() {
    return { title: "详情", detailObj: {} };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      const staffRewardPunishId = this.$router.currentRoute.params.detailId;
      get_detailList({ data: { staffRewardPunishId } }).then(
        resp => (this.detailObj = resp.data.data[0])
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
  },
  destroyed() {},
  render() {
    const data = this.detailObj;
    return (
      <div class={S.main}>
        <GlobalHeader title={this.title} />
        <div class={S.container}>
          <CellGroup>
            <Cell title="员工姓名" value={data.userName} />
            <Cell title="奖项名称" value={data.rewardPunishName} />
            <Cell title="申请数量" value={data.rewardNumCount} />
            <Cell title="申请积分" value={data.integralNumber} />
            <Cell title="申请时间" value={data.createTime} />
            <Cell
              title="老板审批"
              value={this.getState(data.bossApprovalState)}
            />
            <Cell title="老板审批时间" value={data.bossApprovalTime} />
            {/* 店长身份不可查看店长审批这两行 */}
            {data.managerApprovalState && (
              <Cell
                title="店长审批"
                value={this.getState(data.managerApprovalState)}
              />
            )}
            {data.managerApprovalTime && (
              <Cell title="店长审批时间" value={data.managerApprovalTime} />
            )}
          </CellGroup>
        </div>
      </div>
    );
  }
});
