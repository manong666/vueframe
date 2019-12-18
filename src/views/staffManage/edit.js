import S from "./edit.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StaffAdd from "@/components/StaffList/StaffAdd";
import { get_store_list, get_staff_detailList } from "@/api/index";
export default {
  data() {
    return {
      title: "编辑员工",
      data: [],
      shopList: [],
      shopName: [],
      item: {
        userName: "",
        phoneNo: "",
        idCard: "",
        storeId: "",
        workTime: "",
        diploma: "",
        speciality: ""
      },
      text: "保存"
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
    this.getData();
    this.getShopList();
  },
  methods: {
    getData() {
      const id = this.$router.currentRoute.params.id;
      get_staff_detailList(id).then(resp => {
        this.data = resp.data;
        this.item = this.data.find(v => {
          if (id === v.userId) {
            return true;
          }
        });
      });
    },
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
                item: this.item,
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
