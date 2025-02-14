<template>
  <div>
    <button @click="generatePDF">生成 PDF 并下载</button>
    <button @click="previewPDF">预览 PDF</button>
    <div>
      <n-tabs type="segment" animated>
        <n-tab-pane name="chap1" tab="第一章">
          <div ref="chap1">
            <tab1Com />
          </div>
        </n-tab-pane>
        <n-tab-pane name="chap2" tab="第二章">
          <div id="chap2">
            <tab2Com ref="chap2" />
          </div>
          <img :src="mapimg" alt="" />
        </n-tab-pane>
        <n-tab-pane name="chap3" tab="第三章">
          <div id="chap3">
            <tab3Com ref="chap3" />
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
    <n-modal v-model:show="showModal">
      <!-- 预览 PDF 的 iframe -->
      <iframe
        v-if="pdfPreviewUrl"
        :src="pdfPreviewUrl"
        style="width: 1000px; height: 600px"
      ></iframe>
    </n-modal>
    <!-- <exportpdf /> -->
  </div>
</template>

<script setup>
import html2canvas from "html2canvas";
// 普通文本/图表/地图  下载预览 PDF  地图上的marker会被忽略 导出不来
import html2pdf from "html2pdf.js";
import { ref, onMounted } from "vue";
import tab1Com from "./components/tab1Com.vue";
import tab2Com from "./components/tab2Com.vue";
import tab3Com from "./components/tab3Com.vue";
import exportpdf from "./exportpdf.vue";
import { createVNode, render } from "vue";
const pdfPreviewUrl = ref("");
const showModal = ref(false);
const mapimg = ref("");

const chap1 = ref(null);
const chap2 = ref(null);
const chap3 = ref(null);

// 生成 PDF 并下载
const generatePDF = () => {
  const element = document.getElementById("content");
  html2pdf().from(element).save("document.pdf"); // 触发 PDF 下载
};

const captureChart = () => {
  return new Promise((resolve, reject) => {
    const chart = document.getElementById("chart");
    html2canvas(chart)
      .then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png"); // 转为 base64 图像
        resolve(imageUrl);
      })
      .catch(reject);
  });
};
const captureMap = () => {
  return new Promise((resolve, reject) => {
    const map = document.getElementById("map");
    html2canvas(map)
      .then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png"); // 转为 base64 图像
        resolve(imageUrl);
      })
      .catch(reject);
  });
};

// 预览 PDF
const previewPDF = async () => {
  showModal.value = true;
  const tab1txt = document.getElementById("tab1txt").innerHTML;
  const echartImage = await captureChart();

  const mapImage = await captureMap();
  mapimg.value = mapImage;
  // 合并所有内容
  const fullContent = `
        <div style="margin-bottom: 20px;">${tab1txt}</div>
        <div style="margin-bottom: 20px;">
          <img src="${echartImage}" style="height:600px;max-width: 100%;page-break-inside:void"/>
        </div>
        <div id="map" >
          <img src="${mapImage}" style="height:600px;max-width: 100%;page-break-inside:void"/>
        </div>
      `;
  const element = document.createElement("div");
  element.innerHTML = fullContent;

  // 直接渲染子组件到临时容器中 然后导出 图表/地图 会有问题，也需要单独处理进行拼接
  // const container = document.createElement("div");
  // // 动态创建子组件的虚拟节点（VNode）
  // const vnode = createVNode(exportpdf);

  // // 渲染子组件到临时容器中
  // render(vnode, container);

  html2pdf()
    .from(element)
    .toPdf()
    .get("pdf")
    .then((pdf) => {
      // 生成一个用于预览的 URL
      pdfPreviewUrl.value = pdf.output("datauristring");
    });

  // 清理临时容器
  // render(null, container);
};
</script>

<style lang="less" >
img {
  page-break-inside: avoid;
}
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
.border {
  border: 1px solid blue;
  margin: 20px 0;
}
#map {
  height: 100%;
}
</style>