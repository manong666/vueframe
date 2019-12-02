export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("user/login", {
      telphone: "16619972450",
      password: "String"
    });
  },
  destroyed() {},
  render() {
    return (
      <div>
        <div>{this.$store.state.user.token}</div>
        <div>{JSON.stringify(this.$store.state.user.info)}</div>
      </div>
    );
  },
  methods: {}
};
