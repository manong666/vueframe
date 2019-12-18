import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import ApplyTab from "@/components/ApplyTab/ApplyTab";
import S from "./applyList.module.scss";
export default {
  data() {
    return {
      title: "申请池"
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          <ApplyTab />
        </div>
      </div>
    );
  },
  methods: {}
};
