<template>
  <div>
    <h1>ectends</h1>
    <p>{{ message1 }}</p>
    <p>{{ message2 }}</p>
  </div>
  <myButton />
</template>

<script lang="ts">
import myButton from "./components/Test";
// 注册组件

import { defineComponent } from "vue";
const MyBaseComponent = {
  template: `
    <div>
      <h1>Base Component</h1>
      <p>{{ message }}</p>
    </div>
  `,
  data() {
    return {
      message1: "This is a base component!",
    };
  },
};
export default defineComponent({
  extends: MyBaseComponent,
  data() {
    return {
      message2: "This is a derived component!",
    };
  },
});
</script>


<style lang="scss" scoped>
</style>