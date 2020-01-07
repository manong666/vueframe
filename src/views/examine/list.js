import Vue from "vue";
import { Tabs, Tab, Dialog } from "vant";
import { get_list } from "@/api/index";
import SearchByTimeAndTxt from "@/components/SearchByTimeAndTxt/SearchByTimeAndTxt";

import GlobalAdaptionCard from "@/components/GlobalAdaptionCard/GlobalAdaptionCard";
import S from "./list.module.scss";

export default Vue.extend({
  name: "list",
  created() {
    this.state = this.$router.currentRoute.params.approvalId;
  },
  data() {
    return {
      title: "审批列表",
      index: "00",
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
      ],
      examineList: [],
      state: ""
    };
  },
  methods: {
    getExamineList(Date1) {
      const managerApprovalState = this.state;
      const time =
        (Date1.find(v => v.key === "startTime").value === "开始日期"
          ? ""
          : Date1.find(v => v.key === "startTime").value) || "";
      const endt =
        (Date1.find(v => v.key === "endTime").value === "结束日期"
          ? ""
          : Date1.find(v => v.key === "endTime").value) || "";
      const searchInfo = Date1.find(v => v.key === "searchTxt").value;
      //此处需进行身份判断
      const bossApprovalState = Date1.find(v => v.key === "type").value;
      const startTime = new Date(time).getTime() || "";
      const endTime = new Date(endt).getTime() || "";
      get_list({
        data: {
          roleId: "02",
          managerApprovalState,
          bossApprovalState,
          startTime,
          endTime,
          searchInfo
        }
      }).then(resp => (this.examineList = resp.data.data));
    },
    checkBtn(id) {
      this.$router.push(`/examine/detail/${id}`);
    },
    changTab(value) {
      const arr = [
        {
          key: "type",
          value: value === "00" ? "" : value
        },
        {
          key: "searchTxt",
          value: ""
        },
        {
          key: "startTime",
          value: "开始日期"
        },
        { key: "endTime", value: "结束日期" }
      ];

      this.searchData.splice(0, this.searchData.length);
      this.searchData = this.searchData.concat(arr);
      console.log(this.searchData);
      this.getExamineList(this.searchData);
    },
    commitBtn(id) {
      Dialog.confirm({
        title: "确认审批",
        message: "请选择审批类型(遮罩层关闭)",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "通过",
        cancelButtonText: "驳回",
        closeOnPopstate: true,
        closeOnClickOverlay: true,
        beforeClose: (action, done) => {
          console.log(action);
          done(false);
        }
      })
        .then(() => console.log(id))
        .catch(() => console.log("驳回"));
    }
  },
  mounted() {
    this.getExamineList(this.searchData);
  },
  render() {
    //根据身份判断
    const adopt = "老板审批通过";
    const reject = "老板未通过";
    const checkPending = "老板待审核";
    const commitBtn = this.state === "03" ? this.commitBtn : false;
    return (
      <div class={S.main}>
        <div class={S.container}>
          <Tabs
            v-model={this.index}
            animated
            swipeable
            on-change={this.changTab}
          >
            <Tab name="00" title="全部">
              <SearchByTimeAndTxt
                v-model={this.searchData}
                getData={this.getExamineList}
              />
              {this.examineList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        title: v.rewardPunishName,
                        id: v.staffRewardPunishId,
                        price: v.rewardPunishIntegral,
                        time: v.createTime,
                        status: v.bossApprovalState,
                        name: v.userName
                      },
                      checkBtn: this.checkBtn,
                      commitBtn
                    }
                  }}
                ></GlobalAdaptionCard>
              ))}
            </Tab>
            <Tab name="01" title={adopt}>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                getData={this.getExamineList}
              />
              {this.examineList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        title: v.rewardPunishName,
                        id: v.staffRewardPunishId,
                        price: v.rewardPunishIntegral,
                        time: v.createTime,
                        status: v.bossApprovalState,
                        name: v.userName
                      },
                      checkBtn: this.checkBtn,
                      commitBtn
                    }
                  }}
                ></GlobalAdaptionCard>
              ))}
            </Tab>
            <Tab name="02" title={reject}>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                getData={this.getExamineList}
              />
              {this.examineList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        title: v.rewardPunishName,
                        id: v.staffRewardPunishId,
                        price: v.rewardPunishIntegral,
                        time: v.createTime,
                        status: v.bossApprovalState,
                        name: v.userName
                      },
                      checkBtn: this.checkBtn,
                      commitBtn
                    }
                  }}
                ></GlobalAdaptionCard>
              ))}
            </Tab>
            <Tab name="03" title={checkPending}>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                getData={this.getExamineList}
              />
              {this.examineList.map(v => (
                <GlobalAdaptionCard
                  {...{
                    props: {
                      msgData: {
                        title: v.rewardPunishName,
                        id: v.staffRewardPunishId,
                        price: v.rewardPunishIntegral,
                        time: v.createTime,
                        status: v.bossApprovalState,
                        name: v.userName
                      },
                      checkBtn: this.checkBtn,
                      commitBtn
                    }
                  }}
                ></GlobalAdaptionCard>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  },
  destroyed() {}
});
