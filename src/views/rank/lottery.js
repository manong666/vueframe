import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import Dropdown from "@/components/Dropdown/Dropdown";
import LotteryRankList from "@/components/LotteryRankList/LotteryRankList";
import { get_store_list, get_ticketQuery } from "@/api/index";
import S from "./integral.module.scss";
export default {
  data() {
    return {
      title: "奖券排名",
      value: { date: "日期", store: "111111" },
      storeList: [],
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
          <LotteryRankList {...{ props: { rankList: this.rankList } }} />
        </div>
      </div>
    );
  },
  methods: {
    getStoreList() {
      get_store_list().then(resp => {
        this.storeList = resp.storeList.map(v => {
          let obj = { value: v.id, text: v.title };
          return obj;
        });
      });
    },
    getRankList() {
      get_ticketQuery().then(resp => {
        this.rankList = resp.rank;
      });
    }
  }
};
