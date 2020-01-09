import S from "./addGift.module.scss";

import RewardStaffAdd from "@/components/RewardCard/RewardStaffAdd";
import {
  get_store_list,
  get_store_detailList,
  get_encourageStaff_add,
  get_staff_list
} from "@/api/index";
export default {
  data() {
    return {
      title: "新增员工奖扣",
      ruleList: [],
      shopList: [],
      staffLists: [],
      columns: [],
      shopName: [],
      shopDetail: [],
      item: {
        storeId: 111,
        userId: 123,
        rewardPunishIntegral: 30
      }
    };
  },
  computed: {
    isShop() {
      this.shopList.map(v => this.shopName.push(v.storeName));
      console.log("shopName", this.shopName);
      return this.shopName;
    }
  },
  mounted() {
    this.getRuleList();
    this.getShopList();
    this.getStaffList();
  },
  methods: {
    getRuleList() {
      this.ruleList = JSON.parse(localStorage.getItem("ruleList"));
      console.log("奖扣规则列表", this.ruleList);
      this.ruleList &&
        this.ruleList.map(v => this.columns.push(v.rewardPunishName));
      console.log("columns", this.columns);
    },
    getShopList() {
      get_store_list().then(resp => (this.shopList = resp.data.data));
    },
    getStaffList() {
      get_staff_list().then(resp => (this.staffLists = resp.data.data));
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
          <RewardStaffAdd
            {...{
              props: {
                columns: this.columns,
                ruleList: this.ruleList,
                shopList: this.shopList,
                staffLists: this.staffLists,
                shopName: this.isShop,
                text: "保存"
              },
              on: {
                saveItem: val => {
                  get_encourageStaff_add({ data: val }).then(() =>
                    this.$router.go(-1)
                  );
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
};
