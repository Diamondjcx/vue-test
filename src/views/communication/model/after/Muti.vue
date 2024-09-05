<template>
  <div class="container">
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
</template>
        
        <script setup>
import { defineModel } from "vue";

// ----
const firstName = defineModel("firstName");
const lastName = defineModel("lastName");
</script>
        
        <style lang="scss" scoped>
</style>