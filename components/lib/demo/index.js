import thDemo from "./src/main.vue";

thDemo.install = function (Vue) {
  Vue.component(thDemo.name, thDemo);
};

export default thDemo;
