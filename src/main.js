import "./assets/main.css";
import "@/styles/index.less";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import enUSLocale from "./plugin/locales/en-US.json";
import zhLocale from "./plugin/locales/zh-CN.json";
import naive from "naive-ui";
import App from "./App.vue";
import router from "./router";
import { zhCN, enUS, dateZhCN } from "naive-ui";
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "zh-CN", // 默认语言
  messages: {
    "en-US": {
      ...enUSLocale,
      ...enUS,
    },
    "zh-CN": {
      ...zhLocale,
      ...zhCN,
    },
  },
});

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(naive);
app.use(VueMarkdownEditor);
app.mount("#app");
