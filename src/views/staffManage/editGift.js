import S from "./editGift.module.scss";

import RewardStaffAdd from "@/components/RewardCard/RewardStaffAdd";
import { get_store_list } from "@/api/index";
export default {
  data() {
    return {
      title: "编辑员工奖扣",
      ruleList: [],
      shopList: [],
      columns: [],
      shopName: [],
      shopDetail: [],
      editItem: {
        log_id: 123,
        staff_name: "张三三",
        rule_name: "护肤护理",
        add_integral: 30
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
    console.log(this.$router.currentRoute.params.id);
    this.getRuleList();
    this.getShopList();
    this.getData();
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
    getData() {
      const log_id = this.$router.currentRoute.params.id;
      const giftList = JSON.parse(localStorage.getItem("giftList"));
      this.editItem = giftList.find(v => {
        if (log_id === v.log_id) {
          return true;
        }
      });
      console.log("log_id", log_id);
      console.log(JSON.stringify(this.editItem));
    }
  },
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <RewardStaffAdd
            {...{
              props: {
                columns: this.columns,
                ruleList: this.ruleList,
                shopList: this.shopList,
                shopName: this.isShop,
                text: "保存"
              }
            }}
          />
        </div>
      </div>
    );
  }
};
