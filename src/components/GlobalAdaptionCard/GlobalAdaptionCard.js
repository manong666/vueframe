import Vue from "vue";
import { Button } from "vant";
import S from "./GlobalAdaptionCard.module.scss";
/**
 * @description 用于生成自适应高度展示信息列表的card
 */
export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  props: {
    msgData: {
      type: Object,
      default() {
        return {
          id: "",
          title: "",
          time: "",
          name: "",
          status: "",
          price: "",
          approvalTime: ""
        };
      }
    },
    checkBtn: Function,
    commitBtn: Function
  },

  methods: {
    getStatus(state) {
      if (state === "01") {
        return "通过";
      } else if (state === "02") {
        return "未通过";
      } else if (state === "03") {
        return "待审核";
      }
    }
  },
  render() {
    return (
      <div class={S.box}>
        <div class={S.left}>
          {this.msgData.title && <div class={S.txt}>{this.msgData.title}</div>}
          {this.msgData.time && (
            <div class={S.txt}>申请时间:{this.msgData.time}</div>
          )}
          {this.msgData.approvalTime && (
            <div class={S.txt}>审批时间:{this.msgData.approvalTime}</div>
          )}
          {this.msgData.name && (
            <div class={S.txt}>申请人:{this.msgData.name}</div>
          )}
          {this.msgData.status && (
            <div class={S.txt}>{this.getStatus(this.msgData.status)}</div>
          )}
        </div>
        <div class={S.right}>
          {this.msgData.price && this.msgData.price >= 0 ? (
            <div class={S.price}>+{this.msgData.price}</div>
          ) : (
            <div class={S.pricefu}>{this.msgData.price}</div>
          )}
          {this.commitBtn && (
            <div class={S.button}>
              <Button
                type="warning"
                size="mini"
                text="审批"
                on-click={() => this.commitBtn(this.msgData.id)}
              />
            </div>
          )}
          {this.checkBtn && (
            <div class={S.button}>
              <Button
                type="info"
                size="mini"
                text="查看"
                on-click={() => this.checkBtn(this.msgData.id)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
});
