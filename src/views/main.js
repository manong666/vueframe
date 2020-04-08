import { Button } from "ant-design-vue";
import { Chart } from "@antv/g2";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  props: {},
  mounted() {
    const data = [
      { year: "1991", value: 3 },
      { year: "1992", value: 4 },
      { year: "1993", value: 3.5 },
      { year: "1994", value: 5 },
      { year: "1995", value: 4.9 },
      { year: "1996", value: 6 },
      { year: "1997", value: 7 },
      { year: "1998", value: 9 },
      { year: "1999", value: 13 }
    ];
    const chart = new Chart({
      container: "c1",
      autoFit: true,
      height: 500
    });

    chart.data(data);
    chart.scale({
      year: {
        range: [0, 1]
      },
      value: {
        min: 0,
        nice: true
      }
    });

    chart.tooltip({
      showCrosshairs: true, // 展示 Tooltip 辅助线
      shared: true
    });

    chart
      .line()
      .position("year*value")
      .label("value");
    chart.point().position("year*value");

    chart.render();
  },
  methods: {},
  computed: {},
  render() {
    return (
      <div>
        <Button>aaa</Button>
        <div id="c1"></div>
      </div>
    );
  }
});
