<template>
  <vue-office-excel
    :src="csv"
    style="height: 100vh"
    @rendered="renderedHandler"
    @error="errorHandler"
  />
</template>

<script>
//引入VueOfficeExcel组件
import VueOfficeExcel from "@vue-office/excel";
//引入相关样式
import "@vue-office/excel/lib/index.css";

export default {
  components: {
    VueOfficeExcel,
  },
  data() {
    return {
      excel: "http://static.shanhuxueyuan.com/demo/excel.xlsx", //设置文档地址
      csv: "http://10.10.15.16:18000/api/v1/proxy/user/file/comm/download?filename=%2Fdisk02%2Fatti%2Fdata%2Fdata%2FProviderying1%2F20549306%2Fall%2F%2Fdata-table.csv&node=10.10.15.21",
    };
  },
  methods: {
    renderedHandler() {
      console.log("渲染完成");
    },
    errorHandler() {
      console.log("渲染失败");
    },
  },
};
</script>