import S from "./add.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StaffAdd from "@/components/StaffList/StaffAdd";
import { get_store_list, get_staff_add } from "@/api/index";
export default {
  data() {
    return {
      title: "新增员工",
      shopList: [],
      shopName: []
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
          <GlobalHeader {...{ props: { title: this.title } }} />
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
                  console.log("val", val);
                  get_staff_add(val).then(resp => (this.data = resp));
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
};
