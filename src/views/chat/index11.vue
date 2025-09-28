<template>
  <div>
    <h1>Vue Markdown 示例</h1>
    <!-- <vue-markdown :source="markdownText" /> -->
  </div>
</template>

<script>
// import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      markdownText: `
  # 这是一个标题
  
  这是一个段落，**加粗文字**，*斜体文字*。
  
  - 列表项 1
  - 列表项 2
  - 列表项 3
  
  [这是一个链接](https://vuejs.org)
  
  \`\`\`javascript
  // 这是一段代码
  const message = "Hello, Vue Markdown!";
  console.log(message);
  \`\`\`
        `,
    };
  },
};
</script>

<style>
/* 你可以在这里添加自定义样式 */
</style>
