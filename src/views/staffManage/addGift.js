import S from "./addGift.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import RewardStaffAdd from "@/components/RewardCard/RewardStaffAdd";
import {
  get_store_list,
  get_store_detailList,
  get_encourageStaff_add
} from "@/api/index";
export default {
  data() {
    return {
      title: "新增员工奖扣",
      ruleList: [],
      shopList: [],
      columns: [],
      shopName: [],
      shopDetail: [],
      item: {
        rule_store: 111,
        rule_user: 123,
        rule_num: 30
      }
    };
  },
  computed: {
    isShop() {
      this.shopList.map(v => this.shopName.push(v.title));
      console.log("shopName", this.shopName);
      return this.shopName;
    }
  },
  mounted() {
    this.getRuleList();
    this.getShopList();
  },
  methods: {
    getRuleList() {
      this.ruleList = JSON.parse(localStorage.getItem("ruleList"));
      console.log("奖扣规则列表", this.ruleList);
      this.ruleList.map(v => this.columns.push(v.title));
      console.log("columns", this.columns);
    },
    getShopList() {
      get_store_list().then(resp => (this.shopList = resp.data.data));
    },
    getShopStaffDetails() {
      get_store_detailList().then(resp => (this.shopDetail = resp.data.data));
    }
  },
  destroyed() {},
  render() {
    console.log("shopList", this.shopList);
    console.log("shopName", this.shopName);
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <GlobalHeader {...{ props: { title: this.title } }} />
          <RewardStaffAdd
            {...{
              props: {
                columns: this.columns,
                ruleList: this.ruleList,
                shopList: this.shopList,
                shopName: this.isShop,
                text: "保存"
              },
              on: {
                saveItem: val => {
                  get_encourageStaff_add(val).then(resp => (this.data = resp));
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
};
