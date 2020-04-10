import Vue from "vue";
import S from "@/App.scss";
export default Vue.extend({
  name: "app",
  data() {
    return { collapsed: false };
  },
  mounted() {},
  render() {
    return (
      <div class={S.view}>
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
