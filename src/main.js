import Vue from "vue";
import router from "./router";

import "./styles/base.scss";

import "./plugins/http-base";
import "./plugins/http-interceptors";

import App from "./App";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
