import { Button } from "vant";
import S from "./ExamineCard.module.scss";
export default {
  data() {
    return {};
  },
  props: {},
  methods: {},
  mounted() {},
  render() {
    return (
      <div class={S.container}>
        <div class={S.lineOne}>
          <div class={S.title}>卖出临期限产品</div>
          <div class={S.price}>+10积分</div>
        </div>
        <div class={S.lineTwo}>申请时间:2018年11月12日</div>
        {/** 判断是否有姓名 */}
        <div class={S.name}>Liuwei</div>
        <div class={S.footer}>
          <div class={S.state}>审批通过</div>
          <Button type="info" size="mini">
            查看
          </Button>
        </div>
      </div>
    );
  }
};
