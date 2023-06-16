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

<style lang="scss">
.th-card {
  width: 270px;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
  padding-bottom: 8px;

  &-img {
    height: 152px;
    img {
      width: 100%;
      height: 100%;
      // object-fit: cover;
    }
  }

  &-summary {
    padding: 8px;
    text-align: left;
  }
}
</style>
