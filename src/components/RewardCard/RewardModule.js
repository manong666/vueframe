import S from "./RewardModule.module.scss";
import { Stepper, Field, Button } from "vant";

export default {
  props: {
    item: Object,
    text: String
  },
  computed: {
    //监听对象的变化，而不是属性的变化
    c_item() {
      return this.item;
    }
  },
  mounted() {},
  methods: {
    saveRule() {
      this.$emit("chagneItem", this.c_item);
    }
  },

  render() {
    return (
      <div class={S.rule}>
        <Field
          v-model={this.c_item.title}
          label="奖扣名称"
          placeholder="请填写奖扣名称"
        />
        <div class={S.content}>
          <div class={S.text}>积分</div>
          <div class={S.txt}>
            <Stepper
              v-model={this.c_item.integral}
              min="-900000"
              integer
              class={S.stepper}
            />
            分/每个
          </div>
        </div>
        <div class={S.button}>
          <Button
            class={S.btn}
            type="warning"
            size="large"
            round
            color="#1989fa"
            onClick={this.saveRule}
          >
            {this.text}
          </Button>
        </div>
      </div>
    );
  }
};
