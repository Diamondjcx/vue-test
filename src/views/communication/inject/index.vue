<template>
  <div class="container">
    <h3>父传子孙 provide/inject</h3>
    <Grandson />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Grandson from "./Grandson.vue";

const parent_msg = ref("父组件定义的值");
provide("msg", "默认值");
provide("parent_msg", parent_msg.value);
</script>

<style lang="scss" scoped>
</style>