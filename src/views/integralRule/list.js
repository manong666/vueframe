import S from "./list.module.scss";
import { Button } from "vant";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import JfRuleList from "@/components/IntegralList/JfRuleList";
import { get_rule_list, get_rule_delete } from "@/api/index";
export default {
  data() {
    return {
      title: "积分规则管理",
      data: []
    };
  },
  mounted() {
    this.getRuleList();
  },
  methods: {
    getRuleList() {
      get_rule_list().then(resp => {
        this.data = resp.data.data;
        localStorage.setItem("ruleList", JSON.stringify(resp.data.data));
      });
    },
    addRule() {
      console.log("11111");
      this.$router.push({ name: "integralRuleAdd" });
    }
  },
  destroyed() {},
  render() {
    console.log(this.data);
    return (
      <div class={S.mainPage}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <JfRuleList
          {...{
            props: { data: this.data },
            on: {
              deleteItem: id => {
                get_rule_delete(id).then(resp => (this.data = resp));
              }
            }
          }}
        />
        <div class={S.button}>
          <Button
            class={S.btn}
            type="warning"
            size="large"
            round
            color="#1989fa"
            onClick={this.addRule}
          >
            新建积分规则
          </Button>
        </div>
      </div>
    );
  }
};
