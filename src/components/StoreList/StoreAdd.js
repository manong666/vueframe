import S from "./StoreAdd.module.scss";
import { Picker, Field, Popup, Button } from "vant";
import StaffCheckbox from "@/components/StaffList/StaffCheckbox";
export default {
  name: "StoreAdd",
  props: {
    item: Object,
    staffList: Array,
    text: String
  },
  computed: {
    c_item() {
      console.log(JSON.stringify(this.item));
      const staffName = this.staffList
        .filter(v => this.item.storeStaff.includes(v.userId))
        .map(v => v.userName)
        .join("，");
      const storeOwer = this.staffList
        .filter(v => this.item.storeOwerId == v.userId)
        .map(v => v.userName)
        .join("");
      return { ...this.item, staffName, storeOwer };
    }
  },
  data() {
    return {
      isShow: false,
      isSee: false
      //   names: []
    };
  },
  mounted() {},
  methods: {
    showPicker() {
      this.isShow = true;
    },
    selectStaff() {
      this.isSee = true;
    },
    onConfirm(value) {
      this.isShow = false;
      this.c_item.storeOwerId = value.userId;
      this.c_item.storeOwer = value.userName;
      console.log("value", value);
      console.log("storeOwerId", this.c_item.storeOwerId);
    },
    onCancel() {
      this.isShow = false;
    },
    saveStore() {
      this.$emit("saveStore", this.c_item);
    },
    getStaffName(arr) {
      this.isSee = false;
      this.c_item.storeStaff = [];
      const names = [];
      arr.forEach(v => {
        this.c_item.storeStaff.push(v.userId);
        names.push(v.userName);
        this.c_item.staffName = names.join("，");
      });
      console.log("id", this.c_item.storeStaff);
      console.log("staff", this.c_item.staffName);
    }
  },
  render() {
    return (
      <div>
        <Field
          v-model={this.c_item.storeName}
          label="门店名称"
          placeholder="请输入门店名称"
        />
        <Field
          v-model={this.c_item.storeAddress}
          label="门店地址"
          placeholder="请输入门店地址"
        />
        <Field
          readonly={true}
          clickable
          value={this.c_item.storeOwer}
          label="门店店长"
          placeholder="请输入门店店长"
          onClick={this.showPicker}
        />
        <Field
          readonly={true}
          clickable
          value={this.c_item.staffName}
          label="店内员工"
          placeholder="请选择店内员工"
          onClick={this.selectStaff}
        />
        <Popup v-model={this.isShow} position="bottom">
          <Picker
            {...{
              props: {
                "show-toolbar": true,
                columns: this.staffList,
                "value-key": "userName"
              },
              on: { confirm: this.onConfirm, cancel: this.onCancel }
            }}
          />
        </Popup>
        <Popup v-model={this.isSee} position="bottom" style="height:50%">
          <StaffCheckbox
            {...{
              props: {
                staffList: this.staffList,
                checkedIds: this.c_item.storeStaff
              },
              on: {
                cancel: () => {
                  this.isSee = false;
                },
                sure: this.getStaffName
              }
            }}
          />
        </Popup>
        <div class={S.button}>
          <Button
            class={S.btn}
            type="warning"
            size="large"
            round
            color="#1989fa"
            onClick={this.saveStore}
          >
            {this.text}
          </Button>
        </div>
      </div>
    );
  }
};
