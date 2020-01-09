import S from "./logList.module.scss";
import { Button } from "vant";

import RewardList from "@/components/RewardList/RewardList";
import {
  get_encourageStaff_list,
  get_encourageStaff_delete
} from "@/api/index";
import SearchByTimeAndTxt from "@/components/SearchByTimeAndTxt/SearchByTimeAndTxt";
export default {
  data() {
    return {
      title: "员工奖扣",
      data: [],
      searchData: [
        {
          key: "searchTxt",
          value: ""
        },
        {
          key: "startTime",
          value: "开始日期"
        },
        { key: "endTime", value: "结束日期" },
        { key: "type", value: "" }
      ]
    };
  },
  mounted() {
    this.getStaffRewardList(this.searchData);
  },
  methods: {
    getStaffRewardList(data) {
      const time =
        (data.find(v => v.key === "startTime").value === "开始日期"
          ? ""
          : data.find(v => v.key === "startTime").value) || "";
      const endt =
        (data.find(v => v.key === "endTime").value === "结束日期"
          ? ""
          : data.find(v => v.key === "endTime").value) || "";
      const searchInfo = data.find(v => v.key === "searchTxt").value;
      const startTime = new Date(time).getTime() || "";
      const endTime = new Date(endt).getTime() || "";
      get_encourageStaff_list({
        data: {
          startTime,
          endTime,
          searchInfo
        }
      }).then(resp => {
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
          <SearchByTimeAndTxt
            searchData={this.searchData}
            getData={this.getStaffRewardList}
          />
          <RewardList
            {...{
              props: { data: this.data },
              on: {
                deleteThis: id => {
                  get_encourageStaff_delete({
                    data: { rewardPunishId: id }
                  }).then(
                    resp =>
                      resp.data.code === "0000" &&
                      this.data.splice(
                        this.data.findIndex(v => v.rewardPunishId === id),
                        1
                      )
                  );
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
