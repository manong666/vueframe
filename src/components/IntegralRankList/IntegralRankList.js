import { Cell, List } from "vant";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      showList: [],
      index: 0
    };
  },
  props: {
    rankList: Array
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++, this.index++) {
          if (this.index < this.rankList.length) {
            this.showList.push(this.rankList[this.index]);
          }
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (
          this.showList.length >= this.rankList.length &&
          this.showList != 0
        ) {
          this.finished = true;
        }
      }, 500);
    }
  },
  mounted() {},
  render() {
    return (
      <div>
        <Cell title="排名 姓名" value="积分" />
        <List
          v-model={this.loading}
          finished={this.finished}
          finished-text="没有更多了"
          offset={5}
          immediate-check={true}
          {...{ on: { load: this.onLoad } }}
        >
          {this.showList.map((v, i) => (
            <Cell
              slot="default"
              title={`${i} ${v.userName}`}
              value={v.integralNumber}
            />
          ))}
        </List>
      </div>
    );
  }
};
