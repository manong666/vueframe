import { Cell } from "vant";

import GlobalTab from "@/components/GlobalTab/GlobalTab";
import S from "./main.module.scss";
export default {
  data() {
    return {
      title: "排名"
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <Cell title="积分排名" to="/rank/integral" is-link />
          <Cell title="奖券排名" to="/rank/lottery" is-link />
        </div>

        <GlobalTab />
      </div>
    );
  },
  methods: {}
};
