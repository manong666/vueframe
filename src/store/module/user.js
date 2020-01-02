import { get_login } from "@/api/index";
export default {
  namespaced: true,
  state: {
    token: undefined,
    info: {}
  },
  getters: {},
  mutations: {
    assignToken(state, token) {
      state.token = token;
    },
    assignInfo(state, info) {
      state.info = info;
      console.log(state.info);
    }
  },
  actions: {
    /**
     *
     * @param {*} params
     * ```
     * {
     *     telphone: String
     *     password: String
     * }
     * ```
     */
    login({ commit }, params) {
      commit("assignToken", "");
      return get_login({ data: { ...params } }).then(resp => {
        commit("assignToken", resp.data["token"]);
        console.log(resp.data["token"]);
      });
    },
    info({ commit }, params) {
      commit("assignInfo", params);
    }
  }
};

// this.$store.dispatch("user/login", { telphone: String, password: String });
