<template>
  <n-tabs>
    <n-tab-pane name="doc" title="Doc">
      <DocView />
    </n-tab-pane>
    <n-tab-pane name="excel" title="Excel">
      <ExcelView />
    </n-tab-pane>
    <n-tab-pane name="csv" title="Csv">
      <csvView />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import DocView from "./components/doc-view.vue";
import ExcelView from "./components/excel-view.vue";
import csvView from "./components/csv-view.vue";
</script>

<style lang="scss" scoped>
</style>