import S from "./list.module.scss";
import { Button } from "vant";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
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
          <GlobalHeader {...{ props: { title: this.title } }} />
          <StoreList
            {...{
              props: { data: this.data },
              on: {
                deleteThis: id => {
                  get_store_delete({ data: { storeId: id } }).then(
                    resp => (this.data = resp)
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
