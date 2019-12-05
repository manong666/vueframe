import { Card, Cell, Popup, Area } from "vant";
import GlobalTab from "@/components/GlobalTab/GlobalTab";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import { get_rule_list } from "@/api/index";
export default {
  data() {
    return {
      title: "申请",
      reward: "请选择奖扣名称",
      isShow: false
    };
  },
  methods: {
    changeShow() {
      this.isShow = true;
    },
    getRuleList() {
      get_rule_list().then(resp => console.log(resp));
    }
  },
  render() {
    return (
      <div>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <Card>
          <Cell
            title="奖项名称"
            slot="desc"
            value={this.reward}
            onClick={this.changeShow}
          />
        </Card>
        <Popup
          v-model={this.isShow}
          position="bottom"
          overlay
          style="height:20%"
        >
          <Area />
        </Popup>
        <GlobalTab />
      </div>
    );
  }
};
