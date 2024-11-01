<template>
  <div>
    <input type="file" @change="handleFileChange" accept=".zip" />
    <button @click="unzipFile" :disabled="!file">解压ZIP文件</button>
    <div v-if="extractedFiles.length">
      <h3>解压后的文件:</h3>
      <ul>
        <li v-for="(file, index) in extractedFiles" :key="index">{{ file }}</li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
import JSZip from "jszip";

export default {
  data() {
    return {
      file: null,
      extractedFiles: [],
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    async unzipFile() {
      if (!this.file) {
        alert("请先选择一个ZIP文件");
        return;
      }

      const zip = new JSZip();
      const reader = new FileReader();

      reader.onload = async (e) => {
        const content = e.target.result;

        try {
          const zipContent = await zip.loadAsync(content);
          this.extractedFiles = [];
          console.log("zipContent.files", zipContent.files);
          for (const fileName in zipContent.files) {
            console.log("zipContent.file(fileName)", zipContent.file(fileName));
            const fileData = await zipContent
              .file(fileName)
              ?.async("arraybuffer"); // 可以根据需要选择其他类型
            console.log("fileData", fileData);
            this.extractedFiles.push(fileName);
            // 如果需要处理文件内容，可以在这里使用 fileData
          }
        } catch (error) {
          console.error("解压错误:", error);
        }
      };

      reader.readAsArrayBuffer(this.file);
    },
  },
};
</script>
  