<template>
  <div class="container">
    <h3>父传子 props/defineProps</h3>
    <Son1 :msg="parent_msg" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import Son1 from "./Son1.vue";
const parent_msg = ref("父组件定义的值");
</script>
  
  <style lang="scss" scoped>
</style>