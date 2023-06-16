import thCard from "./src/main.vue";

thCard.install = function (Vue) {
  Vue.component(thCard.name, thCard);
};

export default thCard;
