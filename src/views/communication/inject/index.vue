<template>
  <div class="container">
    <h3>父传子孙 provide/inject</h3>
    <input type="text" v-model="parent_msg" />
    <Grandson />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Grandson from "./Grandson.vue";

const parent_msg = ref("父组件定义的值");
function updateLocation() {
  location.value = "South Pole";
}
provide("msg", "默认值");
provide("parent_msg", parent_msg);

const location = ref("North Pole");
provide("location", {
  location,
  updateLocation,
});
</script>

<style lang="scss" scoped>
</style>