import { Cell } from "vant";

import S from "./main.module.scss";
import GlobalTab from "@/components/GlobalTab/GlobalTab";
export default {
  data() {
    return {
      title: "我的"
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <div class={S.container}>
          <Cell title="申请池" is-link to="/my/applyList" />
          <Cell title="积分明细" is-link to="/my/integralDetail" />
        </div>
        <GlobalTab />
      </div>
    );
  },
  methods: {}
};
