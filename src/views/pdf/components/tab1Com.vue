<template>
  <div id="tab1txt">
    <h1>Vue 3 页面导出为 PDF</h1>
    <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
    <p>可以生成 PDF 并进行下载，或者预览。</p>
    <div class="border"></div>
  </div>
  <div id="chart" style="width: 600px; height: 400px"></div>

  <div id="map" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
const initMap = () => {
  // 创建地图实例，设置地图容器 ID 和缩放级别
  const map = new AMap.Map("map", {
    zoom: 16, // 设置地图缩放级别
    center: [116.397477, 39.908692], // 设置地图中心点为天安门的经纬度
  });

  // 创建标记
  const marker = new AMap.Marker({
    position: new AMap.LngLat(116.397477, 39.908692), // 设置天安门的经纬度
    title: "天安门", // 鼠标悬停时显示的提示文本
  });

  // 将标记添加到地图
  marker.setMap(map);

  // 在地图上显示一个气泡提示
  const infoWindow = new AMap.InfoWindow({
    content: "<div><h4>天安门</h4><p>北京市中心</p></div>",
    offset: new AMap.Pixel(0, -30), // 设置信息窗的位置
  });

  // 绑定事件，点击标记时弹出信息窗
  marker.on("click", () => {
    infoWindow.open(map, marker.getPosition());
  });
};
const initChart = () => {
  const chart = echarts.init(document.getElementById("chart"));

  const option = {
    title: {
      text: "ECharts 示例",
    },
    tooltip: {},
    xAxis: {
      data: ["苹果", "香蕉", "橙子", "梨子", "葡萄"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  // 设置图表配置
  chart.setOption(option);
};

onMounted(() => {
  initChart();
  initMap();
});
</script>

<style lang="scss" scoped>
</style>