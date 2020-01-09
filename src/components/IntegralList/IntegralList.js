import S from "./IntegralList.module.scss";
import moment from "moment";
import { Cell, Button, Panel } from "vant";
export default {
  data() {
    return {};
  },
  props: {
    data: Object
  },
  render() {
    return (
      <div class={S.listBox}>
        <Cell title="积分信息" size="large">
          <Button
            slot="default"
            type="info"
            round
            size="mini"
            to="/my/integralDetail"
          >
            详情
          </Button>
        </Cell>
        <div class={S.listBox}>
          {this.data.integralList &&
            this.data.integralList.map(
              (v, i) =>
                i < 10 && (
                  <Panel
                    title={v.rewardPunishName}
                    status={v.integralNumber}
                    desc={
                      <div class={S.slotBox}>
                        <div>{v.userName}</div>
                        <div>{this.getDate(v.bossApprovalTime)}</div>
                      </div>
                    }
                  />
                )
            )}
        </div>
      </div>
    );
  },
  methods: {
    getDate(date) {
      let dateObj = new Date(date);
      let newDate = moment(dateObj).format("YYYY.MM.DD H:mm:ss");
      return newDate;
    }
  }
};
