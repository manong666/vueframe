import S from "./IntegralList.module.scss";
import moment from "moment";
import { Cell, Tag, List } from "vant";
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
          {this.data.integralList.map(
            (v, i) =>
              i < 10 && (
                <List class={S.list}>
                  <div>
                    {v.name},{v.ruleName}--{v.ruleNum}
                  </div>
                  <div>{this.getDate(v.time)}</div>
                </List>
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
