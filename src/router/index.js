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
import world from "../views/world/index.vue";
// css新特性
// 通信
// vue3新特性
// 中英文切换

export const routes = [
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
    meta: {
      title: "ChatGPT",
    },
  },
  {
    path: "/css",
    name: "css-features",
    component: CssView,
    meta: {
      title: "css新特性",
    },
  },

  {
    path: "/language",
    name: "language",
    component: LanguageView,
    meta: {
      title: "语言切换",
    },
  },
  {
    path: "/communication",
    name: "communication-parent",
    component: ParentView,
    meta: {
      title: "新特性通信",
    },
  },
  {
    path: "/new",
    name: "new-feature",
    component: NewFeatureView,
    meta: {
      title: "vue3新特性",
    },
  },
  {
    path: "/extends",
    name: "extends",
    component: ExtendsView,
    meta: {
      title: "vue3继承",
    },
  },
  {
    path: "/tailwindcss",
    name: "tailwindcss",
    component: TailwindcssView,
    meta: {
      title: "tailwindcss测试",
    },
  },
  {
    path: "/codeEditor",
    name: "codeEditor",
    component: CodeEditorView,
    meta: {
      title: "codeEditor测试",
    },
  },
  {
    path: "/upload",
    name: "upload",
    component: upload,
    meta: {
      title: "upload上传",
    },
  },
  {
    path: "/grid",
    name: "grid",
    component: grid,
    meta: {
      title: "grid布局测试",
    },
  },
  // {
  //   path: "/table",
  //   name: "table",
  //   component: table,
  //   meta: {
  //     title: "table",
  //   },
  // },
  {
    path: "/crypto",
    name: "crypto",
    component: crypto,
    meta: {
      title: "加密解密",
    },
  },
  {
    path: "/file",
    name: "file",
    component: file,
    meta: {
      title: "不同文件渲染",
    },
  },
  {
    path: "/input",
    name: "input",
    component: input,
    meta: {
      title: "input上传",
    },
  },
  {
    path: "/request",
    name: "request",
    component: request,
    meta: {
      title: "请求取消",
    },
  },
  {
    path: "/pdf",
    name: "pdf",
    component: pdf,
    meta: {
      title: "pdf渲染",
    },
  },
  {
    path: "/map",
    name: "map",
    component: map,
    meta: {
      title: "高德地图",
    },
  },
  {
    path: "/world",
    name: "world",
    component: world,
    meta: {
      title: "vue3新特性",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
