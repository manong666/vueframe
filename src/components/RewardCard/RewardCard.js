import { Card, Cell, Popup, Picker, Stepper, Button } from "vant";
import S from "./RewardCard.module.scss";
export default {
  // 模拟联调接口的方法
  data() {
    return { isShow: false };
  },
  props: {
    value: Object,
    ruleList: Array,
    columns: Array,
    delete: Function
  },
  mounted() {},
  computed: {
    rule() {
      return this.value;
    }
  },
  methods: {
    changeShow() {
      this.isShow = true;
    },
    onConfirm(value) {
      this.rule.reward = value;
      this.isShow = false;
    },
    onCancel() {
      this.isShow = false;
    },
    onDelete(title) {
      this.delete(title);
    }
  },
  render() {
    return (
      <div>
        <Card>
          <Cell
            title="奖项名称"
            slot="title"
            value={this.rule.reward}
            onClick={this.changeShow}
          />
          <Stepper
            slot="num"
            v-model={this.rule.number}
            min="0"
            integer
            disabled={this.rule.reward === "请选择奖扣名称" ? true : false}
          />
          <div slot="price" class={S.price}>
            {this.ruleList.find(v => v.name === this.rule.reward)?.price *
              this.rule.number || 0}
            积分
          </div>
          <div slot="footer">
            <Button
              type="danger"
              size="mini"
              round
              onClick={() => this.onDelete(this.rule.reward)}
            >
              删除
            </Button>
          </div>
        </Card>
        <Popup
          v-model={this.isShow}
          position="bottom"
          overlay
          style="height:40%"
        >
          <Picker
            columns={this.columns}
            show-toolbar
            title="奖项名称"
            {...{ on: { confirm: this.onConfirm } }}
            {...{ on: { cancel: this.onCancel } }}
          />
        </Popup>
      </div>
    );
  }
};
