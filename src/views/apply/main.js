import { Button, Toast } from "vant";
import GlobalTab from "@/components/GlobalTab/GlobalTab";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import RewardCard from "@/components/RewardCard/RewardCard";
import { get_integralNameList, get_applyIntegral } from "@/api/index";
import S from "./main.module.scss";
export default {
  data() {
    return {
      title: "申请",
      children: [
        {
          reward: "请选择奖扣名称",
          number: this.number
        }
      ],
      columns: [],
      ruleList: [],
      commitList: [],
      number: 1
    };
  },
  computed: {
    isRepeat() {
      this.children.map(kid => {
        console.log(this.columns.findIndex(v => v === kid.reward));
        this.columns.findIndex(v => v === kid.reward) !== -1 &&
          this.columns.splice(this.columns.findIndex(v => v === kid.reward), 1);
      });
      console.log(this.columns);
      return this.columns;
    }
  },
  mounted() {
    this.getRuleList();
  },
  methods: {
    getRuleList() {
      get_integralNameList().then(resp => {
        resp.data.data.map(v => this.columns.push(v.reward_punish_name));
        this.ruleList = resp.data.data.map(v => {
          var {
            reward_punish_name: name,
            reward_punish_id: id,
            reward_punish_integral: price
          } = v;
          return { name, id, price };
        });
        console.log("columns", this.columns, "ruleList", this.ruleList);
      });
    },
    addCard() {
      this.children.push({ reward: "请选择奖扣名称:" });
    },
    remove(title) {
      this.children.splice(this.children.findIndex(v => v.reward === title), 1);
      this.columns.push(title);
    },
    commit() {
      this.commitList = this.children.map(
        kid =>
          kid.reward !== "请选择奖扣名称" &&
          JSON.parse(
            JSON.stringify(this.ruleList.find(rule => rule.name === kid.reward))
          )
      );
      this.children.forEach(kid => {
        this.commitList.find(v => v.name === kid.reward)?.price &&
          (this.commitList.find(v => v.name === kid.reward).price =
            kid.number *
            this.commitList.find(v => v.name === kid.reward).price);
      });
      const commitArr = this.commitList.map(v => {
        const obj = {
          rewardPunishId: v.id,
          userId: this.$store.state.user.info.userId,
          rewardNum: this.number
        };
        return obj;
      });
      get_applyIntegral({
        data: commitArr
      }).then(resp => {
        if (resp.code === "0001") {
          Toast("提交成功");
        }
      });
    }
  },
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          {this.children.map(v => (
            <RewardCard
              v-model={v}
              {...{
                props: {
                  ruleList: this.ruleList,
                  columns: this.isRepeat,
                  delete: this.remove
                }
              }}
            />
          ))}

          <div class={S.button}>
            <Button
              class={S.btn}
              type="info"
              size="large"
              round
              onClick={this.addCard}
            >
              添加
            </Button>
          </div>
          <div class={S.button}>
            <Button
              class={S.btn}
              type="warning"
              size="large"
              round
              onClick={this.commit}
            >
              提交
            </Button>
          </div>
        </div>
        <GlobalTab />
      </div>
    );
  }
};
