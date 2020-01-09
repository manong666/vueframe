import Vue from "vue";
// import { Tabs, Tab, Popup, Cell } from "vant";
import { Tabs, Tab, Dialog, Toast } from "vant";

import { get_list, get_info } from "@/api/index";
import SearchByTimeAndTxt from "@/components/SearchByTimeAndTxt/SearchByTimeAndTxt";

import GlobalAdaptionCard from "@/components/GlobalAdaptionCard/GlobalAdaptionCard";
import S from "./list.module.scss";

// Vue.use(Dialog);

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
      state: "",
      isShow: false,
      nowId: []
    };
  },
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
      const searchInfo = Date1.find(v => v.key === "searchTxt").value;
      //此处需进行身份判断
      let managerApprovalState = "";
      let bossApprovalState = "";
      if (this.$store.state.user.info.userInfo.roleId === "02") {
        managerApprovalState = this.state;
        bossApprovalState = Date1.find(v => v.key === "type").value;
      } else if (this.$store.state.user.info.userInfo.roleId === "01") {
        bossApprovalState = this.state;
        managerApprovalState = Date1.find(v => v.key === "type").value;
      }
      const startTime = new Date(time).getTime() || "";
      const endTime = new Date(endt).getTime() || "";
      get_list({
        data: {
          roleId: this.$store.state.user.info.userInfo.roleId,
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
      this.nowId.push(id);
      this.isShow = true;
    },
    onConfirm() {
      console.log("通过");
      get_info({
        data: {
          roleId: this.$store.state.user.info.userInfo.roleId,
          state: "01",
          approvalAllId: this.nowId
        }
      }).then(resp => {
        if (resp.data.code === "0000") {
          Toast.success("审批通过");
          this.newId.forEach(id =>
            this.examineList.splice(
              this.examineList.findIndex(v => v.staffRewardPunishId === id),
              1
            )
          );
          this.newId.splice(0, this.newId.length);
        } else {
          Toast.fail("提交失败");
        }
      });
      this.isShow = false;
    },
    onCancel() {
      console.log("驳回");
      get_info({
        data: {
          roleId: this.$store.state.user.info.userInfo.roleId,
          state: "02",
          approvalAllId: this.nowId
        }
      }).then(resp => {
        if (resp.data.code === "0000") {
          Toast.success("成功驳回");
          this.newId.forEach(id =>
            this.examineList.splice(
              this.examineList.findIndex(v => v.staffRewardPunishId === id),
              1
            )
          );
          this.newId.splice(0, this.newId.length);
        } else {
          Toast.fail("提交失败");
        }
      });
      this.isShow = false;
    },
    onClose() {
      this.isShow = false;
    }
  },
  mounted() {
    this.getExamineList(this.searchData);
  },
  render() {
    //根据身份判断
    let adopt = "";
    let reject = "";
    let checkPending = "";
    if (this.$store.state.user.info.userInfo.roleId === "02") {
      adopt = "老板审批通过";
      reject = "老板未通过";
      checkPending = "老板待审核";
    } else if (this.$store.state.user.info.userInfo.roleId === "01") {
      adopt = "店长审批通过";
      reject = "店长未通过";
      checkPending = "店长待审核";
    }

    const commitBtn = this.state === "03" ? this.commitBtn : undefined;
    console.log(this.isShow);
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
              {this.examineList &&
                this.examineList.map(v => (
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
                  />
                ))}
            </Tab>
            <Tab name="01" title={adopt}>
              <SearchByTimeAndTxt
                v-model={this.searchData}
                getData={this.getExamineList}
              />
              {this.examineList &&
                this.examineList.map(v => (
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
              {this.examineList &&
                this.examineList.map(v => (
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
              {this.examineList &&
                this.examineList.map(v => (
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
          <Dialog.Component
            v-model={this.isShow}
            title="审批操作"
            message="请选择你要进行的审批操作"
            overlay={true}
            show-confirm-button={true}
            confirm-button-text="通过"
            show-cancel-button={true}
            cancel-button-text="驳回"
            close-on-popstate={true}
            close-on-click-overlay={true}
            on-confirm={this.onConfirm}
            on-cancel={this.onCancel}
            on-close={this.onClose}
          />
        </div>
      </div>
    );
  },
  destroyed() {}
});
