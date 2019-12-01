import S from "@/App.scss";

export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {},
  render() {
    return (
      <div class={S.view} id="view">
        {this.isRouterAlive ? <router-view /> : <div />}
      </div>
    );
  },
  provide() {
    return {};
  },
  methods: {},
  computed: {}
};
