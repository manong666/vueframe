import { Row, Col, Tabs, Tab } from "vant";
import IntegralDetailCard from "@/components/IntegralDetailCard/IntegralDetailCard";
import S from "./IntegralDetailTab.module.scss";
export default {
  data() {
    return {};
  },
  methods: {},
  props: {},
  mounted() {},
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col span="15">
            <Tabs v-model={this.index} type="card" class={S.tabs}>
              <Tab name={0} title="全部" class={S.tab}>
                <IntegralDetailCard />
              </Tab>
              <Tab name={1} title="奖励">
                {" "}
              </Tab>
              <Tab name={2} title="扣分">
                {" "}
              </Tab>
            </Tabs>
          </Col>
          <Col span="4">
            <div class={S.txtColor}>+200</div>
            <div>总积分</div>
          </Col>
        </Row>
      </div>
    );
  }
};
