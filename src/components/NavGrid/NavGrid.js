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
          <GridItem text="审核通过" icon="completed" to="list/01" />
          <GridItem text="驳回" icon="failure" to="list/02" />
          <GridItem text="待审核" icon="records" to="list/03" />
        </Grid>
      </div>
    );
  }
};
