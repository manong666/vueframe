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
            color="linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
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
      this.$store
        .dispatch("user/login", {
          phone: this.userName,
          pwd: this.passWord
        })
        .then(() => {
          console.log(
            "this.$store.state.user?.token",
            this.$store.state.user?.token
          );
          if (this.$store.state.user?.token) {
            console.log("tioazhuan ");
            this.$router.push({ name: "main" });
          }
        });
    }
  }
};
