import { Button } from "vant";
import S from "./IntegralDetailCard.module.scss";
export default {
  data() {},
  mounted() {},
  props: {},
  methods: {},
  render() {
    return (
      <div class={S.box}>
        <div class={S.container}>
          <div class={S.line}>
            <div class={S.title}>卖出超出1000元的单子,50分/个</div>
            <div class={S.price}>+50分</div>
          </div>
          <div class={S.line}>
            <div class={S.applyTime}>申请时间：2018年11月12日</div>
            <Button type="info" size="mini">
              查看
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
