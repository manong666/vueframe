import S from "./edit.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StaffAdd from "@/components/StaffList/StaffAdd";
import {
  get_store_list,
  get_staff_detailList,
  get_staff_add
} from "@/api/index";
export default {
  beforeRouteEnter(to, form, next) {
    next(vm => {
      vm.getData();
      vm.getShopList();
    });
  },
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
        storeName: "",
        storeId: 0,
        workTime: "",
        diploma: "",
        speciality: ""
      },
      text: "保存",
      shopTitle: ""
    };
  },
  computed: {
    isShop() {
      this.shopList.map(v => this.shopName.push(v.storeName));
      console.log("shopName", this.shopName);
      return this.shopName;
    }
  },
  mounted() {},
  methods: {
    getData() {
      const id = this.$router.currentRoute.params.id;
      get_staff_detailList({ data: { userId: id } }).then(resp => {
        this.data = resp.data.data;
        console.log("this.data", this.data);
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
              },
              on: {
                saveItem: val => {
                  get_staff_add({ data: val }).then(resp => (this.data = resp));
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
};
