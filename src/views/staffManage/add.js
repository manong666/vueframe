import Vue from "vue";
import S from "./add.module.scss";

import StaffAdd from "@/components/StaffList/StaffAdd";
import { get_store_list, get_staff_add } from "@/api/index";
export default Vue.extend({
  data() {
    return {
      title: "新增员工",
      shopList: [],
      shopName: []
    };
  },
  computed: {
    isShop() {
      this.shopName.concat(this.shopList.map(v => v.storeName));
      console.log("shopName", this.shopName);
      return this.shopName;
    }
  },
  mounted() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      get_store_list().then(resp => (this.shopList = resp.data.data));
    }
  },
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <StaffAdd
            {...{
              props: {
                item: {
                  userName: "",
                  phoneNo: "",
                  idCard: "",
                  storeName: "",
                  workTime: "0000-00-00",
                  diploma: "",
                  speciality: ""
                },
                shopList: this.shopList,
                shopName: this.isShop,
                text: "保存"
              },
              on: {
                saveItem: val => {
                  get_staff_add({ data: val }).then(
                    resp => resp.data.code === "0000" && this.$router.go(-1)
                  );
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
});
