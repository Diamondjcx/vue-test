<template>
  <n-tabs type="line" animated placement="left">
    <n-tab-pane name="same" tab="模版语法同名简写">
      <SameNameShorthand
    /></n-tab-pane>
    <n-tab-pane name="once" tab="一次性侦听器"> <OnceWatch /> </n-tab-pane>
    <n-tab-pane name="props" tab="响应式 Props 解构"> <Props /> </n-tab-pane>
    <n-tab-pane name="useTemplateRef" tab="useTemplateRef()获取模板引用实例">
      <UseTemplateRef />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import SameNameShorthand from "./sameNameShorthand/index.vue";
import OnceWatch from "./onceWatch/index.vue";
import Props from "./props/index.vue";
import UseTemplateRef from "./useTemplateRef/index.vue";
</script>

<style lang="scss" scoped>
</style>