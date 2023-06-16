# 卡片组件-thCard

### 示例

<thCard imgSrc="/tuhuiUI/logo.png" summary="Vue" />

### 代码

```html
<thCard imgSrc="/logo.png" summary="Vue" />
```

### 属性

| 参数      | 说明     | 类型        | 是否必要 | 默认值 | 插槽名称 |
| --------- | -------- | ----------- | -------- | ------ | -------- |
| width     | 卡片宽度 | Number      | false    | 270    | -        |
| imgSrc    | 图片路径 | String      | true     | -      | -        |
| imgHeight | 图片高度 | Number      | false    | 152    | -        |
| summary   | 卡片概要 | String/Slot | false    | -      | -        |
| footer    | 卡片底部 | Slot        | false    | -      | footer   |
