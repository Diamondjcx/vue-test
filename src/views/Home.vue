<template>
  <n-flex class="app-container" gap="20px">
    <n-menu
      style="width: 200px; height: calc(100vh - 100px); overflow: auto"
      v-model:value="activeKey"
      :options="menuOptions"
      responsive
    />
    <div class="app-main">
      <router-view></router-view>
    </div>
  </n-flex>
</template>

<script>
import { computed, defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { routes } from "../router/index.js";
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
const menuOptions = computed(() => {
  return routes
    .filter((item) => item.meta && item.meta.title)
    .map((item) =>
      createMenuOption(item.name, item.name, item.meta.title || item.name)
    );
});

export default defineComponent({
  setup() {
    return {
      activeKey: ref("css-features"),
      menuOptions,
    };
  },
});
</script>

<style lang="less">
.app-container {
  // height: 100vh;
  // width: 100vw;
  .app-main {
    flex: 1;
    height: calc(100vh - 100px);
    overflow: auto;
    padding: 20px;
  }
}
</style>
