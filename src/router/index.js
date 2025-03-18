import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import ChatView from "../views/chat/index.vue";
import CssView from "../views/css/index.vue";
import ParentView from "../views/communication/index.vue";
import LanguageView from "../views/Header.vue";
import NewFeatureView from "../views/newFeature/index.vue";
import ExtendsView from "../views/extends/index.vue";
import TailwindcssView from "../views/tailwindcss/index.vue";
import CodeEditorView from "../views/codeEditorView/index.vue";
import upload from "../views/upload/index.vue";
import grid from "../views/grid/index.vue";
import table from "../views/table/index.vue";
import crypto from "../views/crypto/index.vue";
import file from "../views/file/index.vue";
import input from "../views/input/index.vue";
import request from "../views/request/index.vue";
import pdf from "../views/pdf/index.vue";
import map from "../views/map/index.vue";
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
      path: "/chat",
      name: "chat",
      component: ChatView,
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
    {
      path: "/upload",
      name: "upload",
      component: upload,
    },
    {
      path: "/grid",
      name: "grid",
      component: grid,
    },
    {
      path: "/table",
      name: "table",
      component: table,
    },
    {
      path: "/crypto",
      name: "crypto",
      component: crypto,
    },
    {
      path: "/file",
      name: "file",
      component: file,
    },
    {
      path: "/input",
      name: "input",
      component: input,
    },
    {
      path: "/request",
      name: "request",
      component: request,
    },
    {
      path: "/pdf",
      name: "pdf",
      component: pdf,
    },
    {
      path: "/map",
      name: "map",
      component: map,
    },
  ],
});

export default router;
