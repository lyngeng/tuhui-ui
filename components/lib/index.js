import thDemo from "./demo";
import thCard from "./thCard";

const components = {
  thDemo,
  thCard,
};

// 统一注册组件
const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = {
  install,
};

// 独立注册组件
export { thDemo, thCard };

export default API;
