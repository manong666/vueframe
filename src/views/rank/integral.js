import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import Dropdown from "@/components/Dropdown/Dropdown";
import IntegralRankList from "@/components/IntegralRankList/IntegralRankList";
import { get_store_list, get_integralQuery } from "@/api/index";
import S from "./integral.module.scss";
export default {
  data() {
    return {
      title: "积分排名",
      value: { date: "日期", store: "0000" },
      storeList: [{ value: "0000", text: "门店" }],
      rankList: []
    };
  },
  mounted() {
    this.getStoreList();
    this.getRankList();
  },
  destroyed() {},
  render() {
    return (
      <div class={S.main}>
        <GlobalHeader {...{ props: { title: this.title } }} />
        <div class={S.container}>
          <Dropdown
            {...{ props: { storeList: this.storeList } }}
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
          let obj = { value: v.store_id, text: v.store_name };
          this.storeList.push(obj);
        });
      });
    },
    getRankList() {
      get_integralQuery().then(resp => {
        this.rankList = resp.data.data;
      });
    }
  }
};
