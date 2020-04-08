import Vue from "vue";
import { Button } from "ant-design-vue";
import S from "@/App.scss";
Vue.use(Button);
export default Vue.extend({
  name: "app",
  data() {
    return {};
  },
  mounted() {},
  render() {
    return (
      <div class={S.view}>
        <router-view />
        <a-button>hahaa</a-button>
      </div>
    );
  },
  provide() {
    return {};
  },
  methods: {},
  computed: {}
});
