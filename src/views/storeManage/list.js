import S from "./list.module.scss";
import { Button } from "vant";

import StoreList from "@/components/StoreList/StoreList";
import { get_store_list, get_store_delete } from "@/api/index";
export default {
  data() {
    return {
      title: "门店列表",
      data: []
    };
  },
  mounted() {
    this.getStoreList();
  },
  methods: {
    getStoreList() {
      get_store_list().then(resp => {
        this.data = resp.data.data;
        console.log("storelist", this.data);
      });
    },
    addStore() {
      this.$router.push({ name: "storeManageAdd" });
    }
  },
  destroyed() {},
  render() {
    return (
      <div class={S.mainPage}>
        <div class={S.container}>
          <StoreList
            {...{
              props: { data: this.data },
              on: {
                deleteThis: id => {
                  get_store_delete({ data: { storeId: id } }).then(
                    resp =>
                      resp.data.code === "0000" &&
                      this.data.splice(
                        this.data.findIndex(v => v.storeId === id),
                        1
                      )
                  );
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
              onClick={this.addStore}
            >
              新增门店
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
