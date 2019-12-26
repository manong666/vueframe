import S from "./main.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import NavGrid from "@/components/NavGrid/NavGrid";
export default {
  data() {
    return {
      title: "审批"
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          <NavGrid />
        </div>
      </div>
    );
  },
  methods: {}
};
