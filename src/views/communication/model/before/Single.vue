<template>
  <div class="container">
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
  </div>
</template>
      
      <script setup>
defineProps({
  title: {
    required: true,
  },
});
defineEmits(["update:title"]);
</script>
      
      <style lang="scss" scoped>
</style>