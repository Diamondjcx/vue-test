import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import CssView from "../views/css/index.vue";
import ParentView from "../views/communication/index.vue";
import LanguageView from "../views/Header.vue";
import NewFeatureView from "../views/newFeature/index.vue";
import ExtendsView from "../views/extends/index.vue";
import TailwindcssView from "../views/tailwindcss/index.vue";
import CodeEditorView from "../views/codeEditorView/index.vue";
// css新特性
// 通信
// vue3新特性
// 中英文切换

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/css",
      name: "css-features",
      component: CssView,
    },

    {
      path: "/language",
      name: "language",
      component: LanguageView,
    },
    {
      path: "/communication",
      name: "communication-parent",
      component: ParentView,
    },
    {
      path: "/new",
      name: "new-feature",
      component: NewFeatureView,
    },
    {
      path: "/extends",
      name: "extends",
      component: ExtendsView,
    },
    {
      path: "/tailwindcss",
      name: "tailwindcss",
      component: TailwindcssView,
    },
    {
      path: "/codeEditor",
      name: "codeEditor",
      component: CodeEditorView,
    },
  ],
});

export default router;
