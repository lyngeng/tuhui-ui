# 快速开始

### 安装组件库

```bash
npm i tuhui-ui
```

### 使用组件库

> 在 main.js 中引用组件库

```js
// 全部引入
import "tuhui-ui/dist/css/index.css";
import THUI from "tuhui-ui";
Vue.use(THUI);

// 按需引入
import "tuhui-ui/dist/css/demo.css";
import { Demo } from "tuhui-ui";
Vue.use(Demo);
```
