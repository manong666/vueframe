import { get_integralDetailQuery } from "@/api/index";
import IntegralDetailTab from "@/components/IntegralDetailTab/IntegralDetailTab";
import SearchByTimeAndTxt from "@/components/SearchByTimeAndTxt/SearchByTimeAndTxt";
import S from "./integralDetail.module.scss";
export default {
  data() {
    return {
      title: "积分明细",
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
        { key: "type", value: "01" }
      ],
      index: 0,
      detailList: []
    };
  },
  mounted() {
    this.getDetail(this.searchData);
  },
  computed: {},
  updated() {},
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <div class={S.container}>
          <SearchByTimeAndTxt
            v-model={this.searchData}
            {...{ props: { getData: this.getDetail } }}
          />
          <IntegralDetailTab
            v-model={this.searchData}
            {...{
              props: { detailList: this.detailList, getData: this.getDetail }
            }}
          />
        </div>
      </div>
    );
  },
  methods: {
    getDetail(Date1) {
      const time =
        (Date1.find(v => v.key === "startTime").value === "开始日期"
          ? ""
          : Date1.find(v => v.key === "startTime").value) || "";
      const endt =
        (Date1.find(v => v.key === "endTime").value === "结束日期"
          ? ""
          : Date1.find(v => v.key === "endTime").value) || "";
      const rewardPunishName = Date1.find(v => v.key === "searchTxt").value;
      const type = Date1.find(v => v.key === "type").value;
      const startTime = new Date(time).getTime() || "";
      const endTime = new Date(endt).getTime() || "";
      // const endTime = "";
      get_integralDetailQuery({
        data: {
          userId: 2,
          startTime,
          endTime,
          type,
          rewardPunishName
        }
      }).then(resp => {
        this.detailList = resp.data.data;
      });
    }
  }
};
