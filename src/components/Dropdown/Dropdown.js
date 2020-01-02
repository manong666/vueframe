import { DropdownMenu, DropdownItem, DatetimePicker } from "vant";
export default {
  data() {
    return {
      currentDate: new Date(),
      store: ""
    };
  },
  props: {
    storeList: Array,
    value: Array,
    rankSearch: Function
  },
  model: {
    prop: "value",
    event: "changeData"
  },
  computed: {
    getResult() {
      this.$emit("changeData", this.value);
      return this.value;
    }
  },
  methods: {
    onChangeTime(picker) {
      let date = `${picker.getValues()[0]}-${picker.getValues()[1]}`;
      const obj = {
        key: "startTime",
        value: date
      };
      this.value.splice(
        this.value.findIndex(v => v.key === "startTime"),
        1,
        obj
      );
      this.rankSearch(this.value);
    },
    onChangeStore(value) {
      const obj = {
        key: "store",
        value
      };
      this.value.splice(
        this.value.findIndex(v => v.key === "store"),
        1,
        obj
      );
      this.rankSearch(this.value);
    }
  },
  mounted() {
    this.store = this.value.find(v => v.key === "store")?.value;
  },
  render() {
    const startTime = this.value.find(v => v.key === "startTime")?.value;
    const endTime = this.value.find(v => v.key === "startTime")?.value;
    return (
      <div>
        <DropdownMenu>
          <DropdownItem title={startTime}>
            <DatetimePicker
              show-toolbar={false}
              v-model={this.currentDate}
              type="year-month"
              slot="default"
              {...{ on: { change: this.onChangeTime } }}
            />
          </DropdownItem>
          <DropdownItem title={endTime}>
            <DatetimePicker
              show-toolbar={false}
              v-model={this.currentDate}
              type="year-month"
              slot="default"
              {...{ on: { change: this.onChangeTime } }}
            />
          </DropdownItem>
          <DropdownItem
            v-model={this.store}
            options={this.storeList}
            on-change={this.onChangeStore}
          />
        </DropdownMenu>
      </div>
    );
  }
};
