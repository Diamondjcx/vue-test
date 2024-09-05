<template>
  <input type="text" v-model="inputValue" />
  <p>input值变化了，新值{{ newValue }} - 旧值{{ oldValue }}</p>
</template>

<script setup>
import { ref, watch } from "vue";
const inputValue = ref("");
const newValue = ref("");
const oldValue = ref("");
watch(
  inputValue,
  (newVal, oldVal) => {
    console.log("变化了", newVal, oldVal);
    newValue.value = newVal;
    oldValue.value = oldVal;
  },
  // 当 `inputValue` 变化时，仅触发一次
  { once: true }
);
</script>

<style lang="scss" scoped>
</style>