import S from "./edit.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StoreAdd from "@/components/StoreList/StoreAdd";
import {
  get_store_detailList,
  get_staff_list,
  get_store_add
} from "@/api/index";

export default {
  beforeRouteEnter(to, form, next) {
    next(vm => {
      vm.getData();
      vm.getStaffList();
    });
  },
  data() {
    return {
      title: "编辑门店",
      data: [],
      staffList: [],
      names: [],
      item: {
        storeName: "",
        storeAddress: "",
        storeOwerId: 0,
        storeOwer: "",
        staffName: "",
        storeStaff: []
      }
    };
  },
  // mounted() {
  //   this.getData();
  //   this.getStaffList();
  // },
  methods: {
    getData() {
      const id = this.$router.currentRoute.params.id;
      get_store_detailList(id).then(resp => {
        this.data = resp.data.data;
        this.item = this.data.find(v => {
          if (id === v.id) {
            return true;
          }
          console.log("this.item", this.item);
        });
      });
    },
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
                item: this.item,
                staffList: this.staffList,
                text: "保存"
              },
              on: {
                saveStore: val => {
                  console.log("storeparams", val);
                  get_store_add(val).then(resp => (this.data = resp));
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
};
