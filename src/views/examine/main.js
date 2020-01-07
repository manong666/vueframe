import S from "./main.module.scss";

import NavGrid from "@/components/NavGrid/NavGrid";
export default {
  data() {
    return {
      title: "审批"
    };
  },
  mounted() {},
  methods: {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <div class={S.container}>
          <NavGrid />
        </div>
      </div>
    );
  }
};
