import { Tabs, Tab, Row, Col, Search, Cell } from "vant";
import S from "./ApplyTab.module.scss";
export default {
  data() {
    return {
      index: 0,
      isShow: false
    };
  },
  props: {},
  methods: {
    onClick() {
      this.isShow = true;
    }
  },
  mounted() {},
  render() {
    return (
      <div>
        <Tabs v-model={this.index} animated swipeable>
          <Tab name={0} title="全部">
            <Row>
              <Col span="8">
                <Cell
                  title="日期"
                  center
                  size="large"
                  class={S.date}
                  {...{ on: { click: this.onClick } }}
                />
                {/* TODO:弹出层未完成 */}
                <Popup v-model={this.isShow} overlay position="bottom" />
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
          </Tab>
          <Tab name={0} title="待审批" />
          <Tab name={0} title="审批通过" />
          <Tab name={0} title="驳回" />
        </Tabs>
      </div>
    );
  }
};
