import Vue from "vue";
import App from "./App.vue";

// import "../components/css/demo.scss";
// import "../components/css/thCard.scss";

// import thDemo from "../components/lib/demo";
// import thCard from "../components/lib/thCard";
// Vue.use(thDemo);
// Vue.use(thCard);

// import "tuhui-ui/dist/index.css";
// import "tuhui-ui"
// import { thCard } from "tuhui-ui";
// Vue.use(thCard);

import "tuhui-ui/dist/css/demo.css";
import "tuhui-ui/dist/css/thCard.css";
import { thDemo, thCard } from "tuhui-ui";
Vue.use(thDemo);
Vue.use(thCard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
