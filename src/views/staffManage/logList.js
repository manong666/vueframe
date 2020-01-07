import S from "./logList.module.scss";
import { Button } from "vant";

import RewardList from "@/components/RewardList/RewardList";
import {
  get_encourageStaff_list,
  get_encourageStaff_delete
} from "@/api/index";
export default {
  data() {
    return {
      title: "员工奖扣",
      data: []
    };
  },
  mounted() {
    this.getStaffRewardList();
  },
  methods: {
    getStaffRewardList() {
      get_encourageStaff_list().then(resp => {
        this.data = resp.data.data;
        localStorage.setItem("giftList", JSON.stringify(resp.data.data));
        console.log(this.data);
      });
    },
    addGift() {
      this.$router.push({ name: "addGift" });
    }
  },
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <RewardList
            {...{
              props: { data: this.data },
              on: {
                deleteThis: id => {
                  get_encourageStaff_delete({
                    data: { rewardPunishId: id }
                  }).then(resp => (this.data = resp));
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
              onClick={this.addGift}
            >
              新建员工奖扣
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
