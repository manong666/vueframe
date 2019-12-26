import Vue from "vue";
import S from "./add.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StoreAdd from "@/components/StoreList/StoreAdd";
import { get_staff_list, get_store_add } from "@/api/index";
export default Vue.extend({
  //   beforeRouteEnter(to, form, next) {
  //     next(vm => {
  //       vm.getStaffList();
  //     });
  //   },
  data() {
    return {
      title: "新增门店",
      staffList: []
    };
  },
  mounted() {
    this.getStaffList();
  },
  methods: {
    getStaffList() {
      get_staff_list().then(resp => (this.staffList = resp.data.data));
    }
  },
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <GlobalHeader {...{ props: { title: this.title } }} />
          <StoreAdd
            {...{
              props: {
                item: {
                  storeName: "",
                  storeAddress: "",
                  storeOwerId: 0,
                  storeOwer: "",
                  staffName: "",
                  storeStaff: []
                },
                staffList: this.staffList,
                text: "保存"
              },
              on: {
                saveStore: val => {
                  console.log("storeparams", val);
                  get_store_add({ data: val }).then(resp => (this.data = resp));
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
});
