import S from "./RewardStaffAdd.module.scss";
import { Picker, Field, Popup, Button, Stepper } from "vant";
import { get_store_detailList } from "@/api/index";

export default {
  name: "RewardStaffAdd",
  props: {
    columns: Array,
    ruleList: Array,
    shopList: Array,
    staffLists: Array,
    shopName: Array,
    text: String
  },
  data() {
    return {
      isShow: false,
      isSee: false,
      isLook: false,
      reward: "",
      shopTitle: "",
      rule: "",
      stepNum: 1,
      staffList: [],
      nameList: [],
      staffName: "",
      id: 10,
      item: {
        rewardPunishId: 0,
        storeId: 0,
        userId: 0,
        rewardPunishIntegral: 0,
        rewardNumCount: 1
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {
    getRule() {
      this.rule =
        this.ruleList.find(v => v.rewardPunishName === this.reward)
          ?.rewardPunishIntegral || "";
      console.log("hhghhh", this.rule);
    },
    getShopStaffDetails() {
      get_store_detailList({ data: { storeId: this.id } }).then(resp => {
        const dataList = resp.data.data;
        console.log("detailList", JSON.stringify(dataList));
        const list =
          dataList.find(v => v.storeName === this.shopTitle)?.storeStaff || [];
        this.staffList = list;
        console.log("liststaff", this.staffLists);
        console.log("list", JSON.stringify(list));
        this.nameList = [];
        // this.staffList.map(v => this.nameList.push(v.staff_name));
        this.nameList.push(
          ...this.staffLists.filter(v => this.staffList.includes(v.userId))
        );
        console.log("namelist", this.nameList);
      });
    },
    getShopId() {
      this.id = this.shopList.find(
        v => v.storeName === this.shopTitle
      )?.storeId;
      this.item.storeId = this.id;
    },
    showPicker() {
      this.isShow = true;
    },
    showSelect() {
      this.isSee = true;
    },
    showTrue() {
      this.isLook = true;
    },
    onConfirm(value) {
      this.reward = value.rewardPunishName;
      this.isShow = false;
      this.item.rewardPunishId = value.rewardPunishId;
      this.getRule();
    },
    onConfirms(value) {
      this.shopTitle = value;
      this.isSee = false;
      this.getShopId();
      this.getShopStaffDetails();
    },
    onConfirmal(value) {
      this.staffName = value.userName;
      this.isLook = false;
      //   this.item.userId =
      //     this.staffList.find(v => v.staff_name === this.staffName)?.staff_id ||
      //     0;
      this.item.userId = value.userId;
    },
    onCancel() {
      this.isShow = false;
      this.isSee = false;
      this.isLook = false;
    },
    saveRule() {
      this.item.rewardPunishIntegral = Number(this.rule) * this.stepNum;
      this.item.rewardNumCount = this.stepNum;
      console.log("this.item", this.item);
      this.$emit("saveItem", this.item);
    }
  },
  render() {
    // console.log("rule", this.rule);
    // console.log("ruleList", this.ruleList);
    // console.log("shopId", this.id);
    // console.log("shopTitle", this.shopTitle);
    // console.log("staffList", this.staffList);
    // console.log("nameList", this.nameList);
    return (
      <div>
        <Field
          readonly={true}
          clickable
          label="奖扣名称"
          value={this.reward}
          placeholder="请选择奖扣名称"
          onClick={this.showPicker}
        />
        <Field
          readonly={true}
          label="门店"
          placeholder="请选择门店名称"
          clickable
          value={this.shopTitle}
          onClick={this.showSelect}
        />
        <Field
          readonly={true}
          label="员工"
          placeholder="请选择员工名称"
          clickable
          disabled={this.shopTitle ? false : true}
          value={this.staffName}
          onClick={this.showTrue}
        />
        <div class={S.grade}>
          <div>积分</div>
          <div class={S.price}>
            {this.rule ? Number(this.rule) * this.stepNum : 0} 分
          </div>
          <Stepper
            v-model={this.stepNum}
            min="0"
            integer
            disabled={this.reward ? false : true}
          />
        </div>
        <Popup v-model={this.isShow} position="bottom">
          <Picker
            show-toolbar
            columns={this.ruleList}
            title="奖项名称"
            value-key="rewardPunishName"
            on-confirm={this.onConfirm}
            on-cancel={this.onCancel}
          />
        </Popup>
        <Popup v-model={this.isSee} position="bottom">
          <Picker
            {...{
              props: {
                "show-toolbar": true,
                columns: this.shopName,
                title: "门店名称"
              },
              on: { confirm: this.onConfirms, cancel: this.onCancel }
            }}
          />
        </Popup>
        <Popup v-model={this.isLook} position="bottom">
          <Picker
            {...{
              props: {
                "show-toolbar": true,
                columns: this.nameList,
                "value-key": "userName",
                title: "员工名称"
              },
              on: { confirm: this.onConfirmal, cancel: this.onCancel }
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
            onClick={this.saveRule}
          >
            {this.text}
          </Button>
        </div>
      </div>
    );
  }
};
