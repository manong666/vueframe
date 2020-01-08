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
    return this.$store.state.user.info.roleId === "01" ? (
      <div>
        <Tabbar v-model={this.tab} fixed route class={S.tab}>
          <TabbarItem name="main" to="/">
            <div class={S.tabItem} style="width:50px">
              <Icon name="home-o" class={S.icon} />
              业务管理
            </div>
          </TabbarItem>
          <TabbarItem name="apply" to="/examine/main">
            <div class={S.tabItem}>
              <Icon name="todo-list-o" class={S.icon} />
              审批
            </div>
          </TabbarItem>
          <TabbarItem name="rank" to="/rank/main">
            <div class={S.tabItem}>
              <Icon name="bar-chart-o" class={S.icon} />
              排名
            </div>
          </TabbarItem>
        </Tabbar>
      </div>
    ) : this.$store.state.user.info.roleId === "02" ? (
      <div>
        <Tabbar v-model={this.tab} fixed route class={S.tab}>
          <TabbarItem name="main" to="/">
            <div class={S.tabItem}>
              <Icon name="home-o" class={S.icon} />
              首页
            </div>
          </TabbarItem>
          <TabbarItem name="apply" to="/apply/main">
            <div class={S.tabItem}>
              <Icon name="edit" class={S.icon} />
              申请
            </div>
          </TabbarItem>
          <TabbarItem name="main" to="/examine/main">
            <div class={S.tabItem}>
              <Icon name="todo-list-o" class={S.icon} />
              审批
            </div>
          </TabbarItem>
          <TabbarItem name="rank" to="/rank/main">
            <div class={S.tabItem}>
              <Icon name="bar-chart-o" class={S.icon} />
              排名
            </div>
          </TabbarItem>
          <TabbarItem name="my" to="/my/main">
            <div class={S.tabItem}>
              <Icon name="contact" class={S.icon} />
              我的
            </div>
          </TabbarItem>
        </Tabbar>
      </div>
    ) : (
      <div>
        <Tabbar v-model={this.tab} fixed route class={S.tab}>
          <TabbarItem name="main" to="/">
            <div class={S.tabItem}>
              <Icon name="home-o" class={S.icon} />
              首页
            </div>
          </TabbarItem>
          <TabbarItem name="apply" to="/apply/main">
            <div class={S.tabItem}>
              <Icon name="edit" class={S.icon} />
              申请
            </div>
          </TabbarItem>
          <TabbarItem name="rank" to="/rank/main">
            <div class={S.tabItem}>
              <Icon name="bar-chart-o" class={S.icon} />
              排名
            </div>
          </TabbarItem>
          <TabbarItem name="my" to="/my/main">
            <div class={S.tabItem}>
              <Icon name="contact" class={S.icon} />
              我的
            </div>
          </TabbarItem>
        </Tabbar>
      </div>
    );
  }
};
