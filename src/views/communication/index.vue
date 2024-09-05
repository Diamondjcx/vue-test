<template>
  <n-tabs type="line" animated>
    <n-tab-pane
      v-for="item in obj"
      :key="item.name"
      :name="item.name"
      :tab="item.name"
    >
      <p>{{ item.desc }}</p>
      <component :is="item.com"></component>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import InjectView from "./inject/index.vue";
import ModelView from "./model/index.vue";
import PropsView from "./props/index.vue";
import RefView from "./ref/index.vue";

const obj = [
  {
    name: "父子/多级inject",
    tab: "inject",
    com: InjectView,
    desc: "主要用于多级传递值",
  },
  {
    name: "父子双向绑定model",
    tab: "model",
    com: ModelView,
    desc: "父子之间双向绑定，主要用于公共组件",
  },
  {
    name: "父子props",
    tab: "props",
    com: PropsView,
    desc: "普通的父子之间通信",
  },
  {
    name: "父子ref",
    tab: "ref",
    com: RefView,
    desc: "父访问子的实例方法属性",
  },
];
</script>



<style lang="scss" scoped>
</style>