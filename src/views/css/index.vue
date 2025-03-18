<template>
  <div>
    <code>&lt;span id=&quot;baidu-link&quot;&gt;百度&lt;/span&gt;</code
    >：这是一个可点击的文本，使用了<code>&lt;span&gt;</code>
    <a href="http://localhost:5173/chat">弹框</a>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <h1>css新特性 垂直居中对齐</h1>
    <div class="layout">这是一段文字</div>
    <a href="https://build-your-own.org/blog/20240813_css_vertical_center/"
      >链接</a
    >
  </div>
</template>
  
  <script setup>
</script>
  
  <style  scoped>
.layout {
  width: 200px;
  height: 200px;
  border: 1px solid pink;
  margin: 10px;
  text-align: center;
  align-content: center;
}
</style>