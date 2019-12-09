import { DropdownMenu, DropdownItem, DatetimePicker } from "vant";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import S from "./integral.module.scss";
export default {
  data() {
    return {
      title: "积分排名",
      currentDate: new Date(),
      date: "日期"
    };
  },
  mounted() {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          <DropdownMenu direction="up">
            <DropdownItem title={this.date} get-container="body">
              <DatetimePicker
                v-model={this.currentDate}
                type="year-month"
                show-toolbar={false}
                slot="default"
                {...{ on: { change: this.onChangeTime } }}
              />
            </DropdownItem>
          </DropdownMenu>
        </div>
      </div>
    );
  },
  methods: {
    onChangeTime(picker) {
      // getValues()
      console.log(picker);
    }
  }
};
