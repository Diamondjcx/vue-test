import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VueMcp } from "vite-plugin-vue-mcp";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueMcp({
      // 可选配置项
      host: "localhost",
      port: 3000,
      printUrls: true,
    }),
  ],
  esbuild: {
    drop: ["debugger"],
    pure: ["console.log"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        additionalData: `@while: #fff;`,
        javascriptEnabled: true,
      },
    },
  },
});
