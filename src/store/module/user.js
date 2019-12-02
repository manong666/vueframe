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
      get_login({ data: { ...params } }).then(resp => {
        commit("assignToken", resp.data.data["api_token"]);
        commit("assignInfo", resp.data.data);
      });
    }
  }
};

// this.$store.dispatch("user/login", { telphone: String, password: String });
