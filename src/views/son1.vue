<template>
  <!-- <div>{{ msg }}</div> -->
  <div>
    {{ count }}
  </div>
</template>

<script setup>
import { ref, defineExpose, defineProps } from "vue";
const props = defineProps({
  msg: {
    type: String,
    default: "hello",
  },
});
const count = ref(0);
const update = () => {
  count.value++;
};
defineExpose({
  count,
  update,
});
</script>

<style lang="scss" scoped>
</style>