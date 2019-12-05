import { NavBar, Icon } from "vant";
import S from "./GlobalHeader.module.scss";
export default {
  data() {
    return {};
  },
  props: {
    title: ""
  },
  methods: {
    onLeftClick() {
      this.$router.go(-1);
    },
    onRightClick() {
      console.log("click");
    }
  },
  render() {
    return (
      <div>
        <NavBar
          class={S.header}
          fixed
          {...{ on: { "click-left": this.onLeftClick } }}
          {...{ on: { "click-right": this.onRightClick } }}
          title={this.title}
          left-text="返回"
          left-arrow
        >
          <Icon size="20px" name="search" slot="right" />
        </NavBar>
      </div>
    );
  }
};
