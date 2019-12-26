import { Tabs, Tab } from "vant";
import { get_applyList } from "@/api/index";
// import ExamineCard from "@/components/ExamineCard/ExamineCard";
import GlobalAdaptionCard from "@/components/GlobalAdaptionCard/GlobalAdaptionCard";
import SearchByTimeAndTxt from "../SearchByTimeAndTxt/SearchByTimeAndTxt";
export default {
  data() {
    return {
      applyList: [],
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
  props: {},
  methods: {
    getExamineList(Date1) {
      const time =
        (Date1.find(v => v.key === "startTime").value === "开始日期"
          ? ""
          : Date1.find(v => v.key === "startTime").value) || "";
      const endt =
        (Date1.find(v => v.key === "endTime").value === "结束日期"
          ? ""
          : Date1.find(v => v.key === "endTime").value) || "";
      const rewardPunishName = Date1.find(v => v.key === "searchTxt").value;
      const bossApprovalState = Date1.find(v => v.key === "type").value;
      const startTime = new Date(time).getTime() || "";
      const endTime = new Date(endt).getTime() || "";
      get_applyList({
        data: {
          userId: 3,
          startTime,
          endTime,
          bossApprovalState,
          rewardPunishName
        }
      }).then(resp => {
        this.applyList = resp.data.data;
      });
    },
    checkBtn(id) {
      this.$router.push(`applyOne/${id}`);
    },
    changTab(value) {
      const obj = {
        key: "type",
        value: value === "00" ? "" : value
      };
      this.searchData.splice(
        this.searchData.findIndex(v => v.key === "type"),
        1,
        obj
      );
      this.getExamineList(this.searchData);
    }
  },
  mounted() {
    this.getExamineList(this.searchData);
  },
  render() {
    return (
      <div>
        <Tabs v-model={this.index} animated swipeable on-change={this.changTab}>
          <Tab name="00" title="全部">
            <div>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                {...{ props: { getData: this.getExamineList } }}
              />
              {this.applyList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        id: v.staffRewardPunishId,
                        title: v.rewardPunishName,
                        status: v.bossApprovalState,
                        price: v.integralNumber,
                        time: v.createTime
                      },
                      checkBtn: this.checkBtn
                    }
                  }}
                />
              ))}
            </div>
          </Tab>
          <Tab name="01" title="审批通过">
            <div>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                {...{ props: { getData: this.getExamineList } }}
              />
              {this.applyList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        id: v.staffRewardPunishId,
                        title: v.rewardPunishName,
                        status: v.bossApprovalState,
                        price: v.integralNumber,
                        time: v.createTime
                      },
                      checkBtn: this.checkBtn
                    }
                  }}
                />
              ))}
            </div>
          </Tab>
          <Tab name="02" title="驳回">
            <div>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                {...{ props: { getData: this.getExamineList } }}
              />
              {this.applyList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        id: v.staffRewardPunishId,
                        title: v.rewardPunishName,
                        status: v.bossApprovalState,
                        price: v.integralNumber,
                        time: v.createTime
                      },
                      checkBtn: this.checkBtn
                    }
                  }}
                />
              ))}
            </div>
          </Tab>
          <Tab name="03" title="待审核">
            <div>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                {...{ props: { getData: this.getExamineList } }}
              />
              {this.applyList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        id: v.staffRewardPunishId,
                        title: v.rewardPunishName,
                        status: v.bossApprovalState,
                        price: v.integralNumber,
                        time: v.createTime
                      },
                      checkBtn: this.checkBtn
                    }
                  }}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
};
