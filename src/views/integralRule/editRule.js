import S from "./editRule.module.scss";
// import { Button } from "vant";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import RewardModule from "@/components/RewardCard/RewardModule";
import { get_rule_add } from "@/api/index";
export default {
  beforeRouterEnter(to, from, next) {
    next(vm => vm.getData());
  },
  data() {
    return {
      title: "编辑积分规则",
      item: { id: "235234", title: "", integral: 0 }
    };
  },
  mounted() {
    console.log(this.$router.currentRoute.params.id);
    this.getData();
  },
  methods: {
    getData() {
      const list = JSON.parse(localStorage.getItem("ruleList"));
      const id = this.$router.currentRoute.params.id;
      console.log(list instanceof Array, list);
      console.log(id);
      this.item = list.find(v => {
        if (id === v.id) {
          return true;
        }
      });
      console.log(JSON.stringify(this.item));
    }
  },
  render() {
    return (
      <div class={S.mainPage}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <RewardModule
          {...{
            props: {
              item: this.item,
              text: "保存"
            },
            on: {
              chagneItem: val => {
                get_rule_add(val).then(resp => (this.data = resp));
              }
            }
          }}
        />
      </div>
    );
  }
};
