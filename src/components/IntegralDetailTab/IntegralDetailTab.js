import { Row, Col, Tabs, Tab } from "vant";
import GlobalAdaptionCard from "@/components/GlobalAdaptionCard/GlobalAdaptionCard";
import S from "./IntegralDetailTab.module.scss";
export default {
  data() {
    return {
      index: "01"
    };
  },
  props: {
    detailList: Array,
    searchData: Array,
    getData: Function
  },
  model: {
    prop: "searchData",
    event: "changeData"
  },
  methods: {
    checkBtn(id) {
      this.$router.push(`applyOne/${id}`);
    },
    changTab(value) {
      const obj = {
        key: "type",
        value: value
      };
      this.searchData.splice(
        this.searchData.findIndex(v => v.key === "type"),
        1,
        obj
      );
      this.getData(this.searchData);
      this.$emit("changeData", this.searchData);
    }
  },
  mounted() {},
  render() {
    this.index = this.searchData.find(v => v.key === "type").value;
    const totalNum = this.detailList.slice(-1)[0]?.totalNumber;
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col span="15">
            <Tabs
              v-model={this.index}
              type="card"
              class={S.tabs}
              on-change={this.changTab}
            >
              <Tab name="01" title="全部" class={S.tab}>
                {this.detailList.map(
                  (v, i, arr) =>
                    i < arr.length - 1 && (
                      <GlobalAdaptionCard
                        {...{
                          props: {
                            msgData: {
                              title: v.rewardPunishName,
                              id: v.staffRewardPunishId,
                              price: v.integralNumber,
                              time: v.createTime,
                              approvalTime: v.bossApprovalTime
                            },
                            checkBtn: this.checkBtn
                          }
                        }}
                      />
                    )
                )}
              </Tab>
              <Tab name="02" title="奖励" class={S.tab}>
                {this.detailList.map(
                  (v, i, arr) =>
                    i < arr.length - 1 && (
                      <GlobalAdaptionCard
                        {...{
                          props: {
                            msgData: {
                              title: v.rewardPunishName,
                              id: v.staffRewardPunishId,
                              price: v.integralNumber,
                              time: v.createTime,
                              approvalTime: v.bossApprovalTime
                            },
                            checkBtn: this.checkBtn
                          }
                        }}
                      />
                    )
                )}
              </Tab>
              <Tab name="03" title="扣分" class={S.tab}>
                {this.detailList.map(
                  (v, i, arr) =>
                    i < arr.length - 1 && (
                      <GlobalAdaptionCard
                        {...{
                          props: {
                            msgData: {
                              title: v.rewardPunishName,
                              id: v.staffRewardPunishId,
                              price: v.integralNumber,
                              time: v.createTime,
                              approvalTime: v.bossApprovalTime
                            },
                            checkBtn: this.checkBtn
                          }
                        }}
                      />
                    )
                )}
              </Tab>
            </Tabs>
          </Col>
          <Col span="4">
            <div class={S.txtColor}>{totalNum}</div>
            <div>总积分</div>
          </Col>
        </Row>
      </div>
    );
  }
};
