<template>
  <div>
    <a :href="src">data-table.csv</a>
  </div>
  <div>
    <input type="file" @change="handleFileUpload" accept=".csv" />
    <div v-if="csvData.length">
      <table border="1">
        <thead>
          <tr>
            <th v-for="(header, index) in csvData[0]" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in csvData.slice(1)" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Papa from "papaparse";
import { ref } from "vue";
const src =
  "http://10.10.15.16:18000/api/v1/proxy/user/file/comm/download?filename=%2Fdisk02%2Fatti%2Fdata%2Fdata%2FProviderying1%2F57574367%2Fex%2F%2Fdata-table.csv&node=10.10.15.21";

const csvData = ref([]);
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type === "text/csv") {
    parseCSV(file);
  } else {
    alert("请上传 CSV 格式文件");
  }
};

const parseCSV = (file) => {
  Papa.parse(file, {
    complete: (result) => {
      csvData.value = result.data;
    },
    header: false, // 如果 CSV 文件有表头，设置为 true
    skipEmptyLines: true, // 跳过空行
  });
};
</script>

<style lang="scss" scoped>
</style>