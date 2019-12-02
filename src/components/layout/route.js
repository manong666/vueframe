export default {
  props: {
    alive: Boolean
  },
  render() {
    const {
      $route: { meta }
    } = this;

    return meta.keepAlive || this.alive ? (
      <keep-alive>
        <router-view />
      </keep-alive>
    ) : (
      <router-view />
    );
  }
};
