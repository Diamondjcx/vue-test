<template>
  <div>祖父组件传递过来的值msg：{{ msg }}</div>
  <div>祖父组件传递过来的值parent_msg：{{ parent_msg }}</div>
  <button @click="updateLocation">{{ location }}</button>
</template>

<script setup>
import { inject } from "vue";
const { location, updateLocation } = inject("location");
const msg = inject("msg");
const parent_msg = inject("parent_msg");
console.log(parent_msg);
</script>

<style scoped>
</style>