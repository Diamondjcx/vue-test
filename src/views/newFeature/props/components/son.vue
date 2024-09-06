<template>
  <div>父组件传递过来的值：count{{ count }}</div>
  <div>父组件传递过来的值：name{{ name }}</div>
  子组件：<input type="text" v-model="count1" />
</template>

<script setup>
import { defineProps, toRef, ref } from "vue";
// const props = defineProps({
//   count: {
//     type: String,
//     default: "",
//   },
// });
const { count = 2, name } = defineProps({
  count: String,
  name: String,
});
console.log("count", count);
console.log("name", name);
const count1 = ref(count);
console.log("count1", count1.value);
</script>

<style lang="scss" scoped>
</style>