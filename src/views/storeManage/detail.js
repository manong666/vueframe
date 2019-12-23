import S from "./detail.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";

export default {
  data() {
    return {
      title: "编辑门店"
    };
  },
  mounted() {},
  methods: {},
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <GlobalHeader {...{ props: { title: this.title } }} />
        </div>
      </div>
    );
  }
};
