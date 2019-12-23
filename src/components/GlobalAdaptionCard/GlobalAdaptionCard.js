import Vue from "vue";
import { Button } from "vant";
import S from "./GlobalAdaptionCard.module.scss";
/**
 * @description 用于生成自适应高度展示信息列表的card
 */
export default Vue.extend({
  data() {},
  mounted() {},
  props: {
    msgData: {
      type: Object,
      default() {
        return {
          title: "",
          time: "",
          name: "",
          status: ""
        };
      }
    }
  },

  methods: {},
  render() {
    return (
      <div class={S.box}>
        <div class={S.left}>
          <div class={S.txt}>asdf</div>
          <div class={S.txt}>wa1234</div>
          <div class={S.txt}>wa1234</div>
          <div class={S.txt}>wa1234</div>
        </div>
        <div class={S.right}>
          <div class={S.price}>+10积分</div>
          <div class={S.button}>
            <Button
              type="info"
              size="mini"
              text="查看"
              on-click={e => this.func(e)}
            />
          </div>
        </div>
      </div>
    );
  }
});
