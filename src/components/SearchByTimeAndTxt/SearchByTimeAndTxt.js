import Vue from "vue";
import { Row, Col, Search, Cell, Popup, DatetimePicker } from "vant";
import moment from "moment";
export default Vue.extend({
  data() {
    return {
      isShowStart: false,
      isShowEnd: false,
      currentDate: new Date(new Date().toLocaleDateString()),
      endDate: new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          24 * 60 * 60 * 1000 -
          1
      ),
      searchTxt: ""
    };
  },
  props: {
    searchData: Array,
    getData: Function
  },
  model: {
    prop: "searchData",
    event: "changeData"
  },
  methods: {
    onClickStart() {
      this.isShowStart = true;
    },
    onClickEnd() {
      this.isShowEnd = true;
    },
    onChangeTime(value) {
      console.log("object");
      const obj = {
        key: "startTime",
        value: value
      };
      this.searchData.splice(
        this.searchData.findIndex(v => v.key === "startTime"),
        1,
        obj
      );
      this.getData(this.searchData);
      this.$emit("changeData", this.searchData);

      this.isShowStart = false;
    },
    onChangeEndTime(value) {
      const obj = {
        key: "endTime",
        value: value
      };
      this.searchData.splice(
        this.searchData.findIndex(v => v.key === "endTime"),
        1,
        obj
      );
      this.getData(this.searchData);
      this.$emit("changeData", this.searchData);

      this.isShowEnd = false;
    },
    getSearchTxt(value) {
      const obj = {
        key: "searchTxt",
        value: value
      };
      this.searchData.splice(
        this.searchData.findIndex(v => v.key === "searchTxt"),
        1,
        obj
      );
      this.getData(this.searchData);
      this.$emit("changeData", this.searchData);
    },
    clearContent() {
      const obj = {
        key: "searchTxt",
        value: ""
      };
      this.searchData.splice(
        this.searchData.findIndex(v => v.key === "searchTxt"),
        1,
        obj
      );
      this.getData(this.searchData);
      this.$emit("changeData", this.searchData);
    }
  },
  computed: {
    dateChange() {
      return this.searchData;
    }
  },
  mounted() {},
  render() {
    const startTime =
      this.dateChange.find(v => v.key === "startTime").value === "开始日期"
        ? "开始日期"
        : moment(this.dateChange.find(v => v.key === "startTime").value).format(
            "YYYY-MM-DD"
          );
    const endTime =
      this.dateChange.find(v => v.key === "endTime").value === "结束日期"
        ? "结束日期"
        : moment(this.dateChange.find(v => v.key === "endTime").value).format(
            "YYYY-MM-DD"
          );
    return (
      <div>
        <Row>
          <Col span="10">
            <Cell
              title={startTime}
              center
              // size="large"
              // class={S.date}
              {...{ on: { click: this.onClickStart } }}
            />
            <Popup
              v-model={this.isShowStart}
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
          <Col span="4">
            <Cell title="——" center />
          </Col>
          <Col span="10">
            <Cell
              title={endTime}
              center
              // size="large"
              // class={S.date}
              {...{ on: { click: this.onClickEnd } }}
            />
            <Popup
              v-model={this.isShowEnd}
              overlay
              position="bottom"
              style="height:40%"
              get-container="body"
            >
              <DatetimePicker
                v-model={this.endDate}
                type="date"
                {...{ on: { confirm: this.onChangeEndTime } }}
              />
            </Popup>
          </Col>
        </Row>
        <Row>
          <Search
            v-model={this.searchTxt}
            shape="round"
            placeholder="请输入搜索内容"
            clearable
            on-search={this.getSearchTxt}
            on-clear={this.clearContent}
          />
        </Row>
      </div>
    );
  }
});
