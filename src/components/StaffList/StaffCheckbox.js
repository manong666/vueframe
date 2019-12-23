import S from "./StaffCheckbox.module.scss";
import { Cell, CellGroup, Checkbox, CheckboxGroup } from "vant";
export default {
  name: "StaffCheckbox",
  props: {
    staffList: Array,
    checkedIds: Array
  },
  data() {
    return {
      arr: [],
      checked: true
    };
  },
  mounted() {
    this.arr.push(
      ...this.staffList.filter(v => this.checkedIds.includes(v.userId))
    );
  },
  computed: {},
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
      setTimeout(() => {
        console.log("timearr", JSON.stringify(this.arr));
      }, 0);
    },
    sure() {
      this.$emit("sure", this.arr);
    },
    cancel() {
      this.$emit("cancel");
    }
  },
  render() {
    return (
      <div class={S.box}>
        {/* <div
          on-click={() => {
            console.log(this.$refs.checkboxGroup);
            this.$refs.checkboxGroup.toggleAll();
          }}
        >
          sssss
        </div> */}
        <div class={S.btn}>
          <div class={S.cancel} on-click={() => this.cancel()}>
            取消
          </div>
          <div class={S.sure} on-click={() => this.sure()}>
            确定
          </div>
        </div>
        <CheckboxGroup v-model={this.arr} ref="checkboxGroup">
          <CellGroup>
            {this.staffList.map((v, i) => (
              <Cell
                clickable
                key={v.userId}
                title={v.userName}
                on-click={() => this.toggle(i)}
              >
                <Checkbox
                  v-model={this.checkedIds}
                  name={v}
                  ref={`checkboxes`}
                  refInFor={true}
                  slot="right-icon"
                />
              </Cell>
            ))}
          </CellGroup>
        </CheckboxGroup>
      </div>
    );
  }
};
