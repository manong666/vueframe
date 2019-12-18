import S from "./edit.module.scss";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StaffAdd from "@/components/StaffList/StaffAdd";
// import { get_store_list, get_staff_add } from "@/api/index";
export default {
  data() {
    return {
      title: "编辑员工",
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
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {}
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
                item: {}
              }
            }}
          />
        </div>
      </div>
    );
  }
};
