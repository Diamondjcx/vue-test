<template>
  <div class="container">
    <input type="text" v-model="title" />
  </div>
</template>
      
<script setup>
import { defineModel } from "vue";

const title = defineModel("title");
</script>
      
      <style lang="scss" scoped>
</style>