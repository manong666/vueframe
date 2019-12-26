import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "production",
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user
  },
  plugins: [createPersistedState()]
});
