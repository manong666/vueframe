import S from "./IntegralList.module.scss";
import moment from "moment";
import { Cell, Tag, Panel } from "vant";
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
        <Cell title="积分信息" size="large" to="/my/integralDetail">
          <Tag slot="default" type="primary" round>
            详情
          </Tag>
        </Cell>
        <div class={S.listBox}>
          {this.data.integralList &&
            this.data.integralList.map(
              (v, i) =>
                i < 10 && (
                  //TODO: 改为Panel
                  // <List class={S.list}>
                  //   <div>
                  //     {v.name},{v.ruleName}--{v.ruleNum}
                  //   </div>
                  //   <div>{this.getDate(v.time)}</div>
                  // </List>
                  <Panel
                    // title={v.ruleName}
                    // status={v.ruleNum}
                    // desc={`${v.name},${this.getDate(v.time)}`}
                    title="adsfdgfhgasdfdghdf"
                    status="500"
                    desc={
                      <div class={S.slotBox}>
                        <div>{v.name}</div>
                        <div>{this.getDate(v.time)}</div>
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
