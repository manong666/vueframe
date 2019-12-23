import S from "./logList.module.scss";
import { Button } from "vant";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import StaffList from "@/components/StaffList/StaffList";
import { get_staff_list, get_staff_delete } from "@/api/index";
export default {
  data() {
    return {
      title: "员工列表",
      data: []
    };
  },
  mounted() {
    this.getStaffList();
  },
  methods: {
    getStaffList() {
      get_staff_list().then(resp => {
        this.data = resp.data.data;
        console.log(this.data);
      });
    },
    addStaff() {
      this.$router.push({ name: "add" });
    }
  },
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <GlobalHeader {...{ props: { title: this.title } }} />
          <StaffList
            {...{
              props: { data: this.data },
              on: {
                deleteThis: id => {
                  get_staff_delete(id).then(resp => (this.data = resp));
                }
              }
            }}
          />
          <div class={S.button}>
            <Button
              class={S.btn}
              type="warning"
              size="large"
              round
              color="#1989fa"
              onClick={this.addStaff}
            >
              新增员工
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
