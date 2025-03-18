<template>
  <div id="tab1txt">
    <div class="box">
      <h1>Vue 3 页面导出为 PDF</h1>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。</p>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。</p>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。</p>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。</p>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。</p>
      <p>这是一个简单的示例，展示如何将 HTML 页面导出为 PDF。</p>
      <p>可以生成 PDF 并进行下载，或者预览。1111111</p>
    </div>
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
      text: "",
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    label: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 12,
        },
      },
    },
    legend: {
      x: "center",
      show: false,
      data: ["夫妻", "战友", "亲戚"],
    },
    series: [
      {
        type: "graph",
        layout: "force",
        symbolSize: 45,
        focusNodeAdjacency: true,
        roam: true,
        categories: [
          {
            name: "夫妻",
            itemStyle: {
              normal: {
                color: "#009800",
              },
            },
          },
          {
            name: "战友",
            itemStyle: {
              normal: {
                color: "#4592FF",
              },
            },
          },
          {
            name: "亲戚",
            itemStyle: {
              normal: {
                color: "#3592F",
              },
            },
          },
        ],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        force: {
          repulsion: 1000,
        },
        edgeSymbolSize: [4, 50],
        edgeLabel: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 10,
            },
            formatter: "{c}",
          },
        },
        data: [
          {
            name: "徐贱云",
            draggable: true,
          },
          {
            name: "冯可梁",
            category: 1,
            draggable: true,
          },
          {
            name: "邓志荣",
            category: 1,
            draggable: true,
          },
          {
            name: "李荣庆",
            category: 1,
            draggable: true,
          },
          {
            name: "郑志勇",
            category: 1,
            draggable: true,
          },
          {
            name: "赵英杰",
            category: 1,
            draggable: true,
          },
          {
            name: "王承军",
            category: 1,
            draggable: true,
          },
          {
            name: "陈卫东",
            category: 1,
            draggable: true,
          },
          {
            name: "邹劲松",
            category: 1,
            draggable: true,
          },
          {
            name: "赵成",
            category: 1,
            draggable: true,
          },
          {
            name: "陈现忠",
            category: 1,
            draggable: true,
          },
          {
            name: "陶泳",
            category: 1,
            draggable: true,
          },
          {
            name: "王德福",
            category: 1,
            draggable: true,
          },
        ],
        links: [
          {
            source: 0,
            target: 1,
            category: 0,
            value: "夫妻",
          },
          {
            source: 0,
            target: 2,
            value: "子女",
          },
          {
            source: 0,
            target: 3,
            value: "夫妻",
          },
          {
            source: 0,
            target: 4,
            value: "父母",
          },
          {
            source: 1,
            target: 2,
            value: "表亲",
          },
          {
            source: 0,
            target: 5,
            value: "朋友",
          },
          {
            source: 4,
            target: 5,
            value: "朋友",
          },
          {
            source: 2,
            target: 8,
            value: "叔叔",
          },
          {
            source: 0,
            target: 12,
            value: "朋友",
          },
          {
            source: 6,
            target: 11,
            value: "爱人",
          },
          {
            source: 6,
            target: 3,
            value: "朋友",
          },
          {
            source: 7,
            target: 5,
            value: "朋友",
          },
          {
            source: 9,
            target: 10,
            value: "朋友",
          },
          {
            source: 3,
            target: 10,
            value: "朋友",
          },
          {
            source: 2,
            target: 11,
            value: "同学",
          },
        ],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 1,
            curveness: 0,
          },
        },
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

<style lang="less" scoped>
.box {
  height: 100px;
  overflow: auto;
}
</style>