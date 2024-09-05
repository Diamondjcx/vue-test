<template>
  <n-tabs type="line" animated placement="left">
    <n-tab-pane name="3.4之前" tab="3.4之前"> <Before /></n-tab-pane>
    <n-tab-pane name="3.4之后" tab="3.4之后"> <After /></n-tab-pane>
  </n-tabs>
</template>
  
  <script setup>
import After from "./after/index.vue";
import Before from "./before/index.vue";
</script>
  
  <style lang="scss" scoped>
</style>