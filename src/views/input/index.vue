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
</template>

<script setup>
const handleFileChange = (e) => {
  console.log("e", e);
};
</script>

<style lang="less" scoped>
</style>