<template>
  <div>
    <a :href="src">data-table.csv</a>
  </div>
</template>

<script setup>
const src =
  "http://10.10.15.16:18000/api/v1/proxy/user/file/comm/download?filename=%2Fdisk02%2Fatti%2Fdata%2Fdata%2FProviderying1%2F57574367%2Fex%2F%2Fdata-table.csv&node=10.10.15.21";
</script>

<style lang="scss" scoped>
</style>