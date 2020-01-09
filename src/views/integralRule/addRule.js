import S from "./addRule.module.scss";
// import { Button } from "vant";

import RewardModule from "@/components/RewardCard/RewardModule";
import { get_rule_add } from "@/api/index";
export default {
  data() {
    return { title: "新建积分规则" };
  },
  mounted() {},
  methods: {},
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <RewardModule
          {...{
            props: {
              item: {
                rewardPunishName: "",
                rewardPunishIntegral: 5
              },
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
