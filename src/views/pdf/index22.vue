<template>
  <div ref="content">
    <h1>页面标题</h1>
    <p>这是一个包含普通文本、ECharts 图表和地图的页面。</p>

    <!-- ECharts 图表 -->
    <div ref="chart" style="width: 600px; height: 400px"></div>

    <!-- 地图容器 -->
    <div ref="map" style="width: 600px; height: 400px"></div>
  </div>

  <button @click="exportToPdf(true)">预览 PDF</button>
  <button @click="exportToPdf(false)">导出为 PDF</button>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { set } from "vue-demi";

pdfMake.vfs = pdfFonts?.pdfMake?.vfs;

const chart = ref(null);
const map = ref(null);
const content = ref(null);
let mapInstance = null;

onMounted(() => {
  // 初始化 ECharts 图表
  const chartInstance = echarts.init(chart.value);
  chartInstance.setOption({
    title: {
      text: "示例图表",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  });

  // 初始化 Leaflet 地图
  mapInstance = L.map(map.value).setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(mapInstance);

  // 添加标记
  L.marker([51.5, -0.09])
    .addTo(mapInstance)
    .bindPopup("这是一个标记位置")
    .openPopup();
});

// 等待地图瓦片加载完成
const waitForTilesToLoad = () => {
  return new Promise((resolve) => {
    console.log("mapInstance", mapInstance);
    const tileLayer = mapInstance?.getLayers()[0];
    let loadedTiles = 0;
    const totalTiles = tileLayer.getTileSize().x * tileLayer.getTileSize().y;

    tileLayer.on("tileload", () => {
      loadedTiles++;
      if (loadedTiles >= totalTiles) {
        resolve();
      }
    });
  });
};

const exportToPdf = async (preview = false) => {
  // 等待地图瓦片加载完成
  setTimeout(async () => {
    await waitForTilesToLoad();
  }, 1000);

  // 将 ECharts 图表转换为图片
  const chartImage = await html2canvas(chart.value).then((canvas) => {
    return canvas.toDataURL("image/png");
  });

  // 将地图转换为图片
  const mapImage = await html2canvas(map.value).then((canvas) => {
    return canvas.toDataURL("image/png");
  });

  // 定义 PDF 内容
  const docDefinition = {
    content: [
      { text: "页面标题", style: "header" },
      { text: "这是一个包含普通文本、ECharts 图表和地图的页面。" },
      { image: chartImage, width: 500 },
      { image: mapImage, width: 500 },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  };

  // 生成 PDF
  const pdfDoc = pdfMake.createPdf(docDefinition);

  if (preview) {
    // 预览 PDF
    pdfDoc.open();
  } else {
    // 下载 PDF
    pdfDoc.download("page.pdf");
  }
};
</script>
  
  <style scoped>
/* 样式可以根据需要自定义 */
</style>