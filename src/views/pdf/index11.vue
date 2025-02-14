<template>
  <div id="app">
    <!-- 页面内容 -->
    <div id="chart" style="width: 100%; height: 300px">
      <!-- 图表的渲染区域 -->
    </div>

    <div id="map" style="width: 100%; height: 500px"></div>
    <!-- 地图容器 -->

    <div id="content" style="padding: 20px; background-color: lightgray">
      <h1>示例页面</h1>
      <p>这个页面包含了图表、地图以及其他内容。</p>
    </div>

    <!-- 导出为 PDF 按钮 -->
    <button @click="exportToPDF">导出为PDF</button>

    <!-- 预览 PDF 按钮 -->
    <button @click="previewPDF">预览 PDF</button>

    <!-- PDF 预览容器 -->
    <div
      id="pdf-preview"
      style="width: 100%; height: 600px; overflow: auto"
    ></div>
  </div>
</template>
  
  <script>
import html2canvas from "html2canvas"; // 引入 html2canvas
import jsPDF from "jspdf"; // 引入 jsPDF
import * as pdfjsLib from "pdfjs-dist/webpack"; // 引入 pdfjs-dist 用于预览 PDF
import * as echarts from "echarts"; // 引入 echarts
export default {
  mounted() {
    this.initMap(); // 初始化地图
    this.initChart(); // 初始化图表
  },
  methods: {
    // 初始化地图
    initMap() {
      const map = new AMap.Map("map", {
        zoom: 16, // 设置地图缩放级别
        center: [116.397477, 39.908692], // 设置地图中心点为天安门的经纬度
      });

      const marker = new AMap.Marker({
        position: new AMap.LngLat(116.397477, 39.908692), // 设置天安门的经纬度
        title: "天安门",
      });

      marker.setMap(map);
    },

    // 初始化图表（使用 echarts）
    initChart() {
      const chart = echarts.init(document.getElementById("chart"));
      const option = {
        title: { text: "示例图表" },
        tooltip: {},
        xAxis: {
          data: ["A", "B", "C", "D", "E", "F"],
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      chart.setOption(option);
    },

    // 导出为 PDF
    exportToPDF() {
      const content = document.getElementById("app"); // 获取整个页面内容

      // 使用 html2canvas 捕获整个页面截图
      html2canvas(content).then((canvas) => {
        const pdf = new jsPDF();

        // 捕获地图容器并生成地图截图
        const mapContainer = document.getElementById("map");
        html2canvas(mapContainer).then((mapCanvas) => {
          const mapImgData = mapCanvas.toDataURL("image/png"); // 获取地图截图
          pdf.addImage(mapImgData, "PNG", 10, 10, 180, 160); // 插入地图截图

          // 将页面的其他内容（图表和其他 div）插入 PDF
          const imgData = canvas.toDataURL("image/png");
          pdf.addImage(imgData, "PNG", 10, 180, 180, 160); // 添加其他页面内容

          // 保存 PDF 文件
          pdf.save("full_page_with_map_and_chart.pdf");
        });
      });
    },

    // 预览 PDF
    previewPDF() {
      const pdfFile = "full_page_with_map_and_chart.pdf"; // 假设文件已经生成

      // 使用 pdf.js 渲染 PDF 进行预览
      pdfjsLib
        .getDocument(pdfFile)
        .promise.then((pdf) => {
          pdf.getPage(1).then((page) => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            // 创建 canvas 渲染 PDF 页面
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            // 渲染页面到 canvas
            page
              .render({
                canvasContext: ctx,
                viewport: viewport,
              })
              .promise.then(() => {
                // 将渲染的 canvas 显示在预览容器中
                const previewContainer = document.getElementById("pdf-preview");
                previewContainer.innerHTML = ""; // 清空容器
                previewContainer.appendChild(canvas); // 将 canvas 添加到容器
              });
          });
        })
        .catch((error) => {
          console.error("Error rendering PDF:", error);
        });
    },
  },
};
</script>
  
  <style scoped>
#map {
  height: 100%;
}
#chart {
  height: 100%;
}
#pdf-preview canvas {
  max-width: 100%;
}
</style>
  