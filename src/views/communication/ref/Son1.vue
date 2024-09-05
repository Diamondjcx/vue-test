<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

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