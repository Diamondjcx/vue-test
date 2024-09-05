<template>
  <div class="container">
    <div>Parent bind v-model is: {{ model }}</div>
    <button @click="update">Increment</button>
  </div>
</template>
    
    <script setup>
import { defineModel } from "vue";

const model = defineModel();
const update = () => {
  model.value++;
};
</script>
    
    <style lang="scss" scoped>
</style>