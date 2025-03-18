<template>
  <div class="chat-container ds-markdown">
    <div class="message assistant">
      <vue-markdown :source="displayedText" />
      <!-- <div v-html="displayedText"></div> -->
    </div>
  </div>
</template>
  
  <script setup>
import { ref, watchEffect, nextTick, onMounted, computed } from "vue";
import VueMarkdown from "vue-markdown-render";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // 代码高亮样式
import { mockData, mockData1, mockData2, mockData3 } from "./mock";
// AI 返回的 Markdown 代码
const fullText = ref(mockData3);

// const fullText = computed(() => marked(mockData));
console.log("fullText", fullText.value);
// 逐字加载文本（流式效果）
const displayedText = ref("");
let index = 0;

onMounted(async () => {
  //   for (let i = 0; i < fullText.value.length; i++) {
  //     await new Promise((resolve) => setTimeout(resolve, 10)); // 控制速度
  //     displayedText.value += fullText.value[i];
  //     nextTick(() => Prism.highlightAll()); // 确保代码高亮更新
  //   }
  displayedText.value = fullText.value;
  nextTick(() => Prism.highlightAll()); // 确保代码高亮更新
});
</script>
  
  <style >
.chat-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 10px;
}
.message {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.ds-markdown li::marker {
  line-height: var(--ds-md-line-height);
  color: rgb(var(--ds-rgb-label-2));
}
code {
  font-size: 0.875em;
  font-weight: var(--ds-font-weight-strong);
  font-family: var(--ds-font-family-code);
  background-color: var(--ds-md-inline-code-color, #ececec);
  border-radius: 4px;
  padding: 0.15rem 0.3rem;
}
hr {
  height: 1px;
  margin: 12px 0;
  background: rgb(var(--ds-rgb-label-3));
  border: none;
  display: block;
}
</style>
  