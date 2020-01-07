import Vue from "vue";
import S from "@/App.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
export default Vue.extend({
  name: "app",
  data() {
    return {};
  },
  mounted() {},
  render() {
    return (
      <div class={S.view}>
        <GlobalHeader title={this.$router.currentRoute.meta.title} />
        <router-view />
      </div>
    );
  },
  provide() {
    return {};
  },
  methods: {},
  computed: {}
});
