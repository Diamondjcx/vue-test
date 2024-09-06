<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
const name = ref("son1");
defineExpose({ name });
</script>
  
  <style lang="scss" scoped>
</style>