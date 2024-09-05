<template>
  <div class="container">
    <h3>父组件访问子组件 ref/defineExpose</h3>
    <Son1 ref="son1Ref" />
    <button @click="update">父组件点击调用子组件方法</button>
  </div>
</template>
  
  <script setup>
import Son1 from "./Son1.vue";
import { ref } from "vue";
const son1Ref = ref(null);
const update = () => {
  son1Ref.value.update();
};
</script>

  
  <style lang="scss" scoped>
</style>