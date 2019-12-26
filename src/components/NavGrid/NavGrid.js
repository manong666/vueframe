import { Grid, GridItem } from "vant";
// import S from "./NavGrid.module.scss";
export default {
  data() {
    return {};
  },
  props: {},
  methods: {},
  mounted() {},
  render() {
    return (
      <div>
        <Grid column-num={3} gutter={10} center square clickable>
          <GridItem text="待审核" icon="records" to="list" />
          <GridItem text="审核通过" icon="completed" to="list" />
          <GridItem text="驳回" icon="failure" to="list" />
        </Grid>
      </div>
    );
  }
};
