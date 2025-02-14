<template>
  <div>
    <div id="content">
      <h1>Vue 3 页面导出为 PDF</h1>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。</p>
    </div>

    <button @click="generatePDF">生成 PDF 并下载</button>
    <button @click="previewPDF">预览 PDF（新窗口）</button>
  </div>
</template>
  
  <script>
/**
 * 普通文本的pdf预览及导出
 */
//   打开新窗口预览 PDF
import html2pdf from "html2pdf.js";

export default {
  methods: {
    // 生成 PDF 并下载
    generatePDF() {
      const element = document.getElementById("content");
      html2pdf().from(element).save("document.pdf"); // 触发 PDF 下载
    },

    // 在新窗口预览 PDF
    previewPDF() {
      const element = document.getElementById("content");
      html2pdf()
        .from(element)
        .toPdf()
        .get("pdf")
        .then((pdf) => {
          // 生成 PDF 的 Data URI 字符串
          const pdfDataUrl = pdf.output("datauristring");

          // 打开一个新的窗口，并在其中显示 PDF
          const newWindow = window.open("", "_blank");
          newWindow.document.write(
            "<html><head><title>PDF Preview</title></head><body>"
          );
          newWindow.document.write(
            '<iframe width="100%" height="100%" src="' +
              pdfDataUrl +
              '" frameborder="0"></iframe>'
          );
          newWindow.document.write("</body></html>");
          newWindow.document.close();
        });
    },
  },
};
</script>
  
  <style scoped>
#content {
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}
button:hover {
  background-color: #0056b3;
}
</style>
  