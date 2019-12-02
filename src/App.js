import S from "@/App.scss";

export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {},
  render() {
    return (
      <div class={S.view}>
        <router-view />
      </div>
    );
  },
  provide() {
    return {};
  },
  methods: {},
  computed: {}
};
