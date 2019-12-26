import S from "./RewardList.module.scss";
import { Icon } from "vant";
export default {
  name: "RewardList",
  props: {
    data: Array
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    deleteStaffRule(id) {
      console.log("删除当前", id);
      this.$emit("deleteThis", id);
    }
  },
  render() {
    return (
      <div class={S.staffList}>
        {this.data.map(v => (
          <div class={S.content}>
            <div class={S.infos}>
              <div class={S.staff}>
                <div class={S.name}>{v.staff_name}</div>
                <div class={S.count}>{v.add_integral}分</div>
              </div>
              <div class={S.ruleName}>{v.rule_name}</div>
            </div>
            <Icon
              name="delete"
              size="16px"
              onClick={() => this.deleteStaffRule(v.log_id)}
            />
          </div>
        ))}
      </div>
    );
  }
};
