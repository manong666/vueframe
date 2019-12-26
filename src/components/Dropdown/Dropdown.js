import { DropdownMenu, DropdownItem, DatetimePicker } from "vant";
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  props: {
    storeList: Array,
    value: Object
  },
  computed: {
    getResult() {
      return this.value;
    }
  },
  methods: {
    onChangeTime(picker) {
      let date = `${picker.getValues()[0]}年${picker.getValues()[1]}月`;
      this.date = date;
    }
  },
  mounted() {},
  render() {
    return (
      <div>
        <DropdownMenu>
          <DropdownItem title={this.getResult.date}>
            <DatetimePicker
              v-model={this.currentDate}
              type="year-month"
              show-toolbar={false}
              slot="default"
              {...{ on: { change: this.onChangeTime } }}
            />
          </DropdownItem>
          <DropdownItem
            v-model={this.getResult.store}
            options={this.storeList}
          />
        </DropdownMenu>
      </div>
    );
  }
};
