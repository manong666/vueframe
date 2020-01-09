import S from "./editRule.module.scss";
// import { Button } from "vant";

import RewardModule from "@/components/RewardCard/RewardModule";
import { get_rule_add } from "@/api/index";
export default {
  beforeRouterEnter(to, from, next) {
    next(vm => vm.getData());
  },
  data() {
    return {
      title: "编辑积分规则",
      item: {
        rewardPunishId: "235234",
        rewardPunishName: "",
        rewardPunishIntegral: 0
      }
    };
  },
  mounted() {
    console.log(this.$router.currentRoute.params.id);
    this.getData();
  },
  methods: {
    getData() {
      const list = JSON.parse(localStorage.getItem("ruleList"));
      const id = this.$router.currentRoute.params.id;
      console.log(list instanceof Array, list);
      console.log(id);
      this.item = list.find(v => {
        if (id === v.rewardPunishId) {
          return true;
        }
      });
      console.log(JSON.stringify(this.item));
    }
  },
  render() {
    return (
      <div class={S.mainPage}>
        <RewardModule
          {...{
            props: {
              item: this.item,
              text: "保存"
            },
            on: {
              chagneItem: val => {
                get_rule_add({ data: val }).then(() => this.$router.go(-1));
              }
            }
          }}
        />
      </div>
    );
  }
};
