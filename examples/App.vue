<template>
  <div id="app">
    <th-demo />
    <th-card :imgSrc="demoImg" :width="500" :imgHeight="300">
      我是简介简介简介简介
      <template v-slot:footer>
        <div>footer</div>
      </template>
    </th-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      demoImg: require("./assets/logo.png"),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
