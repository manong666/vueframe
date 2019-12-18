import { Icon } from "vant";
import S from "./BossCard.module.scss";
export default {
  name: "BossCard",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  render() {
    return (
      <div class={S.total}>
        <div class={S.bossName}>{this.$store.state.user.info.userName}</div>
        <div class={S.icon}>
          <Icon name="manager-o" color="#fff" size="30px" />
        </div>
      </div>
    );
  }
};
