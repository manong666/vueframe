import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import Dropdown from "@/components/Dropdown/Dropdown";
import IntegralRankList from "@/components/IntegralRankList/IntegralRankList";
import { get_store_list, get_integralQuery } from "@/api/index";
import S from "./integral.module.scss";
export default {
  data() {
    return {
      title: "积分排名",
      value: [
        { key: "startTime", value: "开始日期" },
        { key: "endTime", value: "结束日期" },
        { key: "store", value: 0 }
      ],
      storeList: [{ value: 0, text: "门店" }],
      rankList: []
    };
  },
  computed: {},
  mounted() {
    this.getStoreList();
    this.getRankList(this.value);
  },
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          <Dropdown
            {...{
              props: { storeList: this.storeList, rankSearch: this.getRankList }
            }}
            v-model={this.value}
          />
          <IntegralRankList {...{ props: { rankList: this.rankList } }} />
        </div>
      </div>
    );
  },
  methods: {
    getStoreList() {
      get_store_list().then(resp => {
        resp.data.data.forEach(v => {
          let obj = { value: v.storeId, text: v.storeName };
          this.storeList.push(obj);
        });
      });
    },
    getRankList(arr) {
      const storeId =
        arr.find(v => v.key === "store").value === "门店"
          ? ""
          : arr.find(v => v.key === "store").value || "";
      const time =
        (arr.find(v => v.key === "startTime").value === "开始日期"
          ? ""
          : arr.find(v => v.key === "startTime").value) || "";
      const startTime = new Date(time).getTime() || "";
      get_integralQuery({
        data: {
          storeId,
          startTime
        }
      }).then(resp => {
        this.rankList = resp.data.data;
      });
    }
  }
};
