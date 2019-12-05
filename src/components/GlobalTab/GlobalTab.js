import S from "./GlobalTab.module.scss";
import { Tabbar, TabbarItem, Icon } from "vant";
export default {
  data() {
    return {
      tab: "main"
    };
  },
  methods: {},
  render() {
    return this.$store.state.user.info.roleID === "01" ? (
      <div />
    ) : this.$store.state.user.info.roleID === "02" ? (
      <div />
    ) : (
      <div>
        <Tabbar v-model={this.tab} fixed route class={S.tab}>
          <TabbarItem name="main" to="/">
            <div class={S.tabItem}>
              <Icon name="home-o" size="20px" />
              首页
            </div>
          </TabbarItem>
          <TabbarItem name="apply" to="/apply/main">
            <div class={S.tabItem}>
              <Icon name="edit" size="20px" />
              申请
            </div>
          </TabbarItem>
          <TabbarItem name="rank" to="/rank/main">
            <div class={S.tabItem}>
              <Icon name="bar-chart-o" size="20px" />
              排名
            </div>
          </TabbarItem>
          <TabbarItem name="my" to="/my/main">
            <div class={S.tabItem}>
              <Icon name="contact" size="20px" />
              我的
            </div>
          </TabbarItem>
        </Tabbar>
      </div>
    );
  }
};
