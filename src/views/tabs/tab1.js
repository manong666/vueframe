import Vue from "vue";
import S from "./tabs.module.scss";
export default Vue.extend({
  data() {
    return {
      info: ""
    };
  },
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  mounted() {
    window.getInfo = this.getInfo;
  },
  //修改window方法绑定
  watch: {
    $route(val) {
      if (val.name === this.code) {
        window.getInfo = this.getInfo;
      }
    }
  },
  methods: {
    getInfo(info) {
      this.info = info;
      console.log(info);
    }
  },
  computed: {},
  render() {
    return (
      <div class={S.flex}>
        <iframe src="/cloud/tab" style="width:100%;height:100vh"></iframe>
        <div>{this.info}</div>
      </div>
    );
  }
});
