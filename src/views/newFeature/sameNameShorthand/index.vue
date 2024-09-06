<template>
  <h3>模版语法-同名简写</h3>
  <Test :id />
  <Test v-bind:id="id" />
</template>
  
  <script setup>
/**
 * 模版语法-同名简写 3.4+
 */
import { ref } from "vue";
import Test from "./components/Test.vue";
const id = ref("myId");
</script>
  
  <style lang="scss" scoped>
</style>