<template>
  <vue-office-docx :src="docx" style="height: 100vh" @rendered="rendered" />
</template>

<script>
//引入VueOfficeDocx组件
import VueOfficeDocx from "@vue-office/docx";
//引入相关样式
import "@vue-office/docx/lib/index.css";

export default {
  components: {
    VueOfficeDocx,
  },
  data() {
    return {
      docx: "http://static.shanhuxueyuan.com/test6.docx", //设置文档网络地址，可以是相对地址
    };
  },
  methods: {
    rendered() {
      console.log("渲染完成");
    },
  },
};
</script>