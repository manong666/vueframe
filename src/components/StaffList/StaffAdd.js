import S from "./StaffAdd.module.scss";
import { Picker, Field, Popup, Button } from "vant";
export default {
  name: "StaffAdd",
  props: {
    item: Object,
    shopName: Array,
    shopList: Array,
    text: String
  },
  computed: {
    c_item() {
      return this.item;
    }
  },
  data() {
    return {
      isShow: false,
      shopTitle: ""
    };
  },
  mounted() {},
  methods: {
    showPicker() {
      this.isShow = true;
    },
    onConfirm(value) {
      this.isShow = false;
      this.c_item.storeId = value.storeId;
      this.c_item.storeName = value.storeName;
      console.log(this.c_item.storeId);
      console.log("value", value);
    },
    onCancel() {
      this.isShow = false;
    },
    saveStaff() {
      console.log("save", this.c_item);
      this.$emit("saveItem", this.c_item);
    }
  },
  render() {
    return (
      <div>
        <Field
          v-model={this.c_item.userName}
          label="姓名"
          placeholder="请输入员工姓名"
        />
        <Field
          v-model={this.c_item.phoneNo}
          label="电话"
          placeholder="请输入员工电话"
        />
        <Field
          v-model={this.c_item.idCard}
          label="身份证"
          placeholder="请输入员工身份证号码"
        />
        <Field
          readonly={true}
          clickable
          label="门店"
          value={this.c_item.storeName}
          placeholder="请选择门店"
          onClick={this.showPicker}
        />
        <Field
          v-model={this.c_item.workTime}
          label="工作开始时间"
          placeholder="请输入yyyy-mm-dd格式"
        />
        <Field
          v-model={this.c_item.diploma}
          label="学历"
          placeholder="请输入员工学历"
        />
        <Field
          v-model={this.c_item.speciality}
          label="特长"
          placeholder="请输入员工特长"
        />
        <Popup v-model={this.isShow} position="bottom">
          <Picker
            {...{
              props: {
                "show-toolbar": true,
                columns: this.shopList,
                "value-key": "storeName",
                title: "门店名称"
              },
              on: { confirm: this.onConfirm, cancel: this.onCancel }
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
            onClick={this.saveStaff}
          >
            {this.text}
          </Button>
        </div>
      </div>
    );
  }
};
