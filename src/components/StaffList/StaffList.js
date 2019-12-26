import S from "./StaffList.module.scss";
import { Icon } from "vant";
export default {
  name: "StaffList",
  props: {
    data: Array
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    editStaffInfo(id) {
      this.$router.push({
        name: "edit",
        params: {
          id
        }
      });
    }
  },
  render() {
    return (
      <div class={S.staffList}>
        {this.data.map(v => (
          <div class={S.content}>
            <div class={S.infos}>
              <div class={S.staff}>
                <div class={S.name}>{v.name}</div>
                <div class={S.count}>{v.telephone}</div>
              </div>
              <div class={S.ruleName}>{v.store_name}</div>
            </div>
            <Icon
              name="edit"
              size="16px"
              onClick={() => this.editStaffInfo(v.staff_id)}
            />
            <Icon
              name="delete"
              size="16px"
              onClick={() => this.deleteStaffInfo(v.staff_id)}
            />
          </div>
        ))}
      </div>
    );
  }
};
