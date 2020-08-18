import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  props: {},
  mounted() {},
  methods: {},
  computed: {},
  render() {
    return (
      <keep-alive>
        <router-view />
      </keep-alive>
    );
  }
});
