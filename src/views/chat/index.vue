<template>
  <div class="chat-container ds-markdown">
    <div class="message assistant">
      <!-- <vue-markdown :source="displayedText" /> -->
      <div v-html="processedHtml" @click="handleClick"></div>
      <!-- <v-md-editor v-model="fullText" height="400px"></v-md-editor> -->
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
const fullText = ref(mockData2);

// console.log("fullText", fullText.value);
// 逐字加载文本（流式效果）
const displayedText = ref("");
let index = 0;

// 解析 Markdown
const renderedMarkdown = ref("");
const processedHtml = ref("");

const replaceZhangXinming = () => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = marked(fullText.value); // 将字符串解析为 DOM
  console.log("fullText.value", fullText.value);
  console.log("marked(fullText.value)", marked(fullText.value));
  // 查找包含“张新明”的节点
  const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    // console.log("node", node);
    // 只需要处理张新明增加点击事件，
    if (node.textContent.trim().includes("张新明")) {
      // 只给张新明添加点击事件
      // 创建一个 span 元素来替换文本节点
      const span = document.createElement("span");
      span.style.color = "blue";
      span.className = "clickable";
      span.style.cursor = "pointer";

      span.textContent = node.textContent;
      node.replaceWith(span);
    }
  }
  processedHtml.value = tempDiv.innerHTML; // 更新处理后的 HTML
};
// const handleClick = (event) => {
//   if (event.target.classList.contains("clickable")) {
//     alert("你点击了张新明！");
//   }
// };
const test = () => {
  // 转换 Markdown，并给 "张新明" 和 "蓝军" 添加 span 包裹
  processedHtml.value = marked(fullText.value)
    .replace(
      /张新明/g,
      '<span class="highlight" @click="handleClick">张新明</span>'
    )
    .replace(
      /蓝军/g,
      '<span class="highlight" @click="handleClick">蓝军</span>'
    );
};
const handleClick = (event) => {
  if (event.target.classList.contains("highlight")) {
    alert(`${event.target.textContent} 被点击！`);
  }
};

onMounted(async () => {
  displayedText.value = fullText.value;
  nextTick(() => Prism.highlightAll()); // 确保代码高亮更新

  // replaceZhangXinming();
  // document.addEventListener("click", (event) => {
  //   if (event.target.getAttribute("data-clickable") === "true") {
  //     alert("你点击了张鑫明！");
  //   }
  test();
  document.querySelectorAll(".highlight").forEach((el) => {
    el.addEventListener("click", handleClick);
  });
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
.highlight {
  color: blue;
  cursor: pointer;
}
</style>
  