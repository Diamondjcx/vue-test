<template>
  <div>
    <p>.aes</p>
    <input type="file" @change="handleFileChange" accept=".aes" />
  </div>
  <div>
    <p>.json</p>
    <input type="file" @change="handleFileChange" accept=".json" />
  </div>
  <div>
    <p>.zip</p>
    <input type="file" @change="handleFileChange" accept=".zip" />
  </div>
  <div>
    <p>.tar / .TAR</p>
    <input type="file" @change="handleFileChange" accept=".tar" />
    <input type="file" @change="handleFileChange" accept=".TAR" />
  </div>
  <div>
    <p>.zip,.tar</p>
    <input type="file" @change="handleFileChange" accept=".zip,.tar" />
  </div>
</template>

<script setup>
const handleFileChange = (e) => {
  console.log("e", e);
};
</script>

<style lang="less" scoped>
</style>