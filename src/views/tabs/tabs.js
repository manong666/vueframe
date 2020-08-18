import Vue from "vue";
import { tabs, button } from "ant-design-vue";
import S from "./tabs.module.scss";
import RouterView from "./routeView";
import tab1 from "./tab1.js";
Vue.component("tabFrame", tab1);
Vue.use(tabs);
Vue.use(button);
export default Vue.extend({
  beforeRouteUpdate(to, from, next) {
    console.log("update");
    this.getComponentsArr(to);
    this.isShow = to.name !== "tab1";
    next();
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("enter");
    next(vm => {
      vm.isShow = to.name !== "tab1";
      vm.activeKey = to.name;
    });
  },
  data() {
    return {
      activeKey: "",
      panes: [{ key: "tab1" }, { key: "tab2" }, { key: "tab3" }],
      componentsArr: [],
      currentRoute: {},
      isShow: true,
      alwaysTrue: true
    };
  },
  created() {
    this.getComponentsArr();
  },
  props: {},
  mounted() {},
  methods: {
    toOtherTab(key) {
      console.log(key);
      const one = this.panes.find(v => v.key === key);
      const isNowTab = this.activeKey === key;
      this.activeKey = one;
      !isNowTab && this.$router.push({ name: key });
    },
    getComponentsArr(to) {
      let route = {};
      if (to) {
        route = to;
      } else {
        route = this.$route;
      }
      const name = route.name;
      if (
        (name === "tab1" || name === "tab3") &&
        !this.componentsArr.find(v => v.name === name)
      ) {
        this.componentsArr.push({
          name,
          key: name,
          isOpened: false
        });
      }
      this.changeOpened(route);
    },
    changeOpened(route) {
      const routeName = route.name;
      if (routeName === "tab1" || routeName === "tab3") {
        this.componentsArr.forEach(v => (v.isOpened = false));
        this.componentsArr.find(v => v.name === routeName).isOpened = true;
      } else {
        this.componentsArr.forEach(v => (v.isOpened = false));
      }
    }
  },
  computed: {},
  render() {
    return (
      <div>
        {this.isShow && <div>show</div>}
        {/* <a-button onClick={this.changeShow}>show</a-button> */}
        <div key="kkk">
          <a-tabs
            v-model={this.activeKey}
            animated={true}
            on-tabClick={this.toOtherTab}
          >
            {this.panes.map(v => (
              <a-tab-pane key={v.key} tab={v.key}></a-tab-pane>
            ))}
          </a-tabs>

          <div class={S.tabCont}>
            <RouterView
              v-show={
                this.$route.name !== "tab1" && this.$route.name !== "tab3"
              }
            />

            {this.componentsArr.map(v => (
              <tabFrame v-show={v.isOpened} key={v.name} code={v.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
});
