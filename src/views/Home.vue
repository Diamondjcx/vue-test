<template>
  <n-menu
    style="width: 200px; height: calc(100vh- 100 px); overflow: auto"
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
import { useRoute } from "vue-router";

const route = useRoute();

const createMenuOption = (key, name, label) => ({
  key,
  label: () =>
    h(
      RouterLink,
      {
        to: {
          name,
        },
      },
      { default: () => label }
    ),
});

const menuOptions = [
  createMenuOption("css-features", "css-features", "css新特性"),
  createMenuOption("chat", "chat", "chat"),
  createMenuOption("language", "language", "语言切换"),
  createMenuOption("communication", "communication-parent", "通信"),
  createMenuOption("new-feature", "new-feature", "vue3新特性"),
  createMenuOption("extends", "extends", "继承"),
  createMenuOption("tailwindcss", "tailwindcss", "tailwindcss测试"),
  createMenuOption("codeEditor", "codeEditor", "codeEditor测试"),
  createMenuOption("upload", "upload", "upload测试"),
  createMenuOption("grid", "grid", "grid"),
  createMenuOption("crypto", "crypto", "crypto"),
  createMenuOption("file", "file", "file"),
  createMenuOption("input", "input", "input"),
  createMenuOption("request", "request", "request"),
  createMenuOption("pdf", "pdf", "pdf"),
  createMenuOption("map", "map", "map"),
  createMenuOption("world", "world", "world"),
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref("css-features"),
      menuOptions,
    };
  },
});
</script>