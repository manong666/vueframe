import { Tabs, Tab, Row, Col, Search, Cell, Popup, DatetimePicker } from "vant";
import { get_applyList } from "@/api/index";
import ExamineCard from "@/components/ExamineCard/ExamineCard";
import GlobalAdaptionCard from "@/components/GlobalAdaptionCard/GlobalAdaptionCard";
import moment from "moment";
import S from "./ApplyTab.module.scss";
export default {
  data() {
    return {
      index: 0,
      isShow: false,
      currentDate: new Date(),
      date: "日期"
    };
  },
  props: {},
  methods: {
    onClick() {
      this.isShow = true;
    },
    onChangeTime(value) {
      this.date = moment(value).format("YYYY.MM.DD");
      this.isShow = false;
    },
    getExamineList() {
      get_applyList({
        data: {
          userId: 3,
          startTime: "",
          endTime: "",
          bossApprovalState: "",
          rewardPunishName: ""
        }
      }).then(resp => {
        console.log(resp);
      });
    }
  },
  mounted() {
    this.getExamineList();
  },
  render() {
    return (
      <div>
        <Tabs v-model={this.index} animated swipeable>
          <Tab name={0} title="全部">
            <div>
              <Row>
                <Col span="8">
                  <Cell
                    title={this.date}
                    center
                    size="large"
                    class={S.date}
                    {...{ on: { click: this.onClick } }}
                  />
                  <Popup
                    v-model={this.isShow}
                    overlay
                    position="bottom"
                    style="height:40%"
                    get-container="body"
                  >
                    <DatetimePicker
                      v-model={this.currentDate}
                      type="date"
                      {...{ on: { confirm: this.onChangeTime } }}
                    />
                  </Popup>
                </Col>
                <Col span="16">
                  <Search
                    shape="round"
                    placeholder="请输入搜索内容"
                    clearable
                    show-action
                    action-text="搜索"
                  />
                </Col>
              </Row>
              <ExamineCard />
              <GlobalAdaptionCard />
            </div>
          </Tab>
          <Tab name={1} title="待审批" />
          <Tab name={2} title="审批通过" />
          <Tab name={3} title="驳回" />
        </Tabs>
      </div>
    );
  }
};
