import { Field, Button } from "vant";
import S from "./login.module.scss";
export default {
  data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div>
        <div class={S.imgBox}>
          <img src="./u5.jpg" class={S.img} />
        </div>
        <Field
          v-model={this.userName}
          class={S.input}
          label="用户名:"
          placeholder="请输入用户名/手机号"
          right-icon="user-o"
        />
        <Field
          v-model={this.passWord}
          class={S.input}
          type="password"
          label="密码:"
          placeholder="请输入密码"
          right-icon="closed-eye"
        />

        <div class={S.btn}>
          <Button
            type="primary"
            size="large"
            color="#469AD0"
            round
            onClick={() => this.onClick()}
          >
            登录
          </Button>
        </div>
      </div>
    );
  },
  methods: {
    onClick() {
      this.$store.dispatch("user/login", {
        phone: this.userName,
        pwd: this.passWord
      });
      this.$router.push({ name: "main" });
    }
  }
};
