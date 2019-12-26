import S from "./JfRuleList.module.scss";
import { Icon } from "vant";
export default {
  name: "JfRuleList",
  props: {
    data: Array
  },
  data() {
    return {
      // chosenAddressId: "235234"
    };
  },
  mounted() {},
  methods: {
    editRule(id) {
      console.log("编辑当前");
      this.$router.push({
        name: "integralRuleEdit",
        params: {
          id
        }
      });
    },
    deleteRule(id) {
      console.log("删除它！");
      this.$emit("deleteItem", id);
    }
  },
  render() {
    return (
      <div class={S.jfRuleList}>
        <div class={S.title}>
          <div class={S.titleName}>奖扣名称</div>
          <div class={S.titleNum}>积分</div>
        </div>
        <div class={S.ruleList}>
          {this.data.map(v => (
            <div class={S.content}>
              <div class={S.ruleName}>{v.rewardPunishName}</div>
              <div class={S.count}>
                <i>{v.rewardPunishIntegral}</i>分/每个
              </div>
              <Icon
                name="edit"
                size="16px"
                onClick={() => this.editRule(v.rewardPunishId)}
                class={S.edit}
              />
              <Icon
                name="delete"
                size="16px"
                onClick={() => this.deleteRule(v.rewardPunishId)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
