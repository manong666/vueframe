import Vue from "vue";
import { Layout, Menu, Icon, Breadcrumb } from "ant-design-vue";
import S from "@/App.scss";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Breadcrumb);
export default Vue.extend({
  name: "app",
  data() {
    return { collapsed: false };
  },
  mounted() {},
  render() {
    return (
      <div class={S.view}>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    );
  },
  provide() {
    return {};
  },
  methods: {},
  computed: {}
});
