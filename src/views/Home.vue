<template>
  <n-menu
    style="width: 200px"
    v-model:value="activeKey"
    :options="menuOptions"
    responsive
  />
  <router-view></router-view>
</template>
  
  <script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
console.log("route", useRoute());
const menuOptions = [
  {
    key: "css-features",
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "css-features",
          },
        },
        { default: () => "css新特性" }
      ),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "language",
          },
        },
        { default: () => "语言切换" }
      ),
    key: "language",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "communication-parent",
          },
        },
        { default: () => "通信" }
      ),
    key: "communication",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "new-feature",
          },
        },
        { default: () => "vue3新特性" }
      ),
    key: "new-feature",
  },
  {
    key: "extends",
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "extends",
          },
        },
        { default: () => "继承" }
      ),
  },
  {
    key: "tailwindcss",
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "tailwindcss",
          },
        },
        { default: () => "tailwindcss测试" }
      ),
  },
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref(null),
      menuOptions,
    };
  },
});
</script>