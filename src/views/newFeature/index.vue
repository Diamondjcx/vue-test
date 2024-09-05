<template>
  <n-tabs type="line" animated placement="left">
    <n-tab-pane name="same" tab="模版语法同名简写">
      <SameNameShorthand
    /></n-tab-pane>
    <n-tab-pane name="once" tab="一次性侦听器"> <OnceWatch /> </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import SameNameShorthand from "./components/SameNameShorthand.vue";
import OnceWatch from "./components/OnceWatch.vue";
</script>

<style lang="scss" scoped>
</style>