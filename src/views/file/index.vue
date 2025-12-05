<template>
  <n-tabs>
    <n-tab-pane name="doc" title="Doc">
      <DocView />
    </n-tab-pane>
    <n-tab-pane name="excel" title="Excel">
      <ExcelView />
    </n-tab-pane>
    <n-tab-pane name="csv" title="Csv">
      <CsvView />
    </n-tab-pane>
    <n-tab-pane name="csv-src" title="Csv-src">
      <CsvSrcView />
    </n-tab-pane>
    <n-tab-pane name="json" title="json">
      <JsonView />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import DocView from "./components/doc-view.vue";
import ExcelView from "./components/excel-view.vue";
import CsvView from "./components/csv-view.vue";
import CsvSrcView from "./components/csv-src-view.vue";
import JsonView from "./components/json-view.vue";
</script>

<style lang="scss" scoped></style>
