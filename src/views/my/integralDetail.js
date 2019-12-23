import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import { Row, Col, Search, Cell, Popup, DatetimePicker } from "vant";
import moment from "moment";
import IntegralDetailTab from "@/components/IntegralDetailTab/IntegralDetailTab";
import S from "./integralDetail.module.scss";
export default {
  data() {
    return {
      title: "积分明细",
      currentDate: new Date(),
      date: "日期",
      isShow: false,
      index: 0
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          {/* 是否需要封装为组件 */}
          <Row>
            <Col span="16">
              <Search
                shape="round"
                placeholder="请输入搜索内容"
                clearable
                show-action
                action-text="搜索"
              />
            </Col>
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
          </Row>
          <IntegralDetailTab />
        </div>
      </div>
    );
  },
  methods: {
    onClick() {
      this.isShow = true;
    },
    onChangeTime(value) {
      this.date = moment(value).format("YYYY.MM.DD");
      this.isShow = false;
    }
  }
};
