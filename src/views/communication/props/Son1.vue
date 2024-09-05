<template>
  <div>{{ msg }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  msg: {
    type: String,
    default: "hello",
  },
});
</script>

<style lang="scss" scoped>
</style>