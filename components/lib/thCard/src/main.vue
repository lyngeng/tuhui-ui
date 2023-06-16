<template>
  <div class="th-card" :style="width && { width: width + 'px' }">
    <div class="th-card-img" :style="imgHeight && { height: imgHeight + 'px' }">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="th-card-summary">
      {{ summary }}
    </div>
    <div v-else class="th-card-summary">
      <slot></slot>
    </div>
    <div class="th-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "thCard",
  props: {
    // 卡片宽度
    width: {
      type: Number,
      default: 0,
    },
    // 图片地址
    imgSrc: {
      type: String,
      default: "",
    },
    // 图片高度
    imgHeight: {
      type: Number,
      default: 0,
    },
    // 卡片概要
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>
