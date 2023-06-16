const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

// 组件入口文件列表
/* 
const list = {
  demo: "./components/lib/demo/index.js",
  thCard: "./components/lib/thCard/index.js",
};
*/

const list = {};
const glob = require("glob");
// 获取文件列表
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let i = 0, len = files.length; i < len; i++) {
    const file = files[i];
    const name = file.split(/[/.]/)[2];
    list[name] = `./${file}`;
  }
}
makeList("components/lib", list);

// webpack配置
module.exports = {
  entry: list,
  mode: "development",
  output: {
    filename: "[name].umd.js", // demo.umd.js
    path: path.resolve(__dirname, "dist"),
    library: "thui", // demo
    libraryTarget: "umd",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
    ],
  },
};
