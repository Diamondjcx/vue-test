<template>
  <div>
    <button @click="fetchCsv">加载并预览 CSV</button>
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
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import Papa from "papaparse";

const csvData = ref([]);
const errorMessage = ref("");

// 函数：从 URL 加载并解析 CSV 文件
async function fetchCsv() {
  const txt =
    "Name,Age,Address\nJohn Brown,18 years old,New York No. 1 Lake Park\nJim Green,28 years old,London No. 1 Lake Park\nJoe Black,38 years old,Sidney No. 1 Lake Park\nJim Red,48 years old,London No. 2 Lake Park";

  try {
    const csvText = txt;

    // 使用 PapaParse 解析 CSV
     Papa.parse(csvText, {
      complete: (result) => {
        csvData.value = result.data;
        console.log("csvData", csvData.value);
      },
      header: false, // 如果 CSV 包含表头，设置为 true
      skipEmptyLines: true,
    });
  } catch (error) {
    errorMessage.value = error.message;
  }
}
</script>
  
  <style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
  