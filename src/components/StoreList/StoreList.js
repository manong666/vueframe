import S from "./StoreList.module.scss";
import { Icon } from "vant";
export default {
  name: "StoreList",
  props: {
    data: Array
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    editStoreInfo(id) {
      this.$router.push({
        name: "storeManageEdit",
        params: {
          id
        }
      });
    },
    deleteStoreInfo(id) {
      this.$emit("deleteThis", id);
    }
  },
  render() {
    return (
      <div class={S.storeList}>
        <div class={S.title}>
          <div class={S.titleName}>门店名称</div>
          <div class={S.titleNum}>店长</div>
        </div>
        <div class={S.list}>
          {this.data.map(v => (
            <div class={S.content}>
              <div class={S.infos}>
                <div class={S.store}>{v.storeName}</div>
                <div class={S.manager}>{v.storeOwer}</div>
              </div>
              <Icon
                name="edit"
                size="16px"
                onClick={() => this.editStoreInfo(v.id)}
              />
              <Icon
                name="delete"
                size="16px"
                onClick={() => this.deleteStoreInfo(v.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
