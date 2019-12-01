import Vue from "vue";
import router from "./router";

import "./styles/base.scss";

import "./plugins/http-base.js";
import "./plugins/http-interceptors.js";

import App from "./App.jsx";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
