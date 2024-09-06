<template>
  <input type="text" v-model="count" />
  <son :count :name />
</template>

<script setup>
import { ref } from "vue";
import son from "./components/son.vue";
const count = ref("默认值");
const name = ref("默认name");
</script>

<style lang="scss" scoped>
</style>