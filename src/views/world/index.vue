<template>
  <div id="world-chart" style="width: 600px; height: 400px"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { worldGeo } from "./worldGeo";
import { onMounted } from "vue";
const initChart = () => {
  const myChart = echarts.init(document.getElementById("world-chart"));

  echarts.registerMap("world", worldGeo);
  const option = {
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    dataRange: {
      min: 0,
      max: 1000000,
      text: ["High", "Low"],
      realtime: false,
      calculable: true,
      color: ["#C8E8FF", "#7ec4ff", "#34A0FF"],
    },
    series: [
      {
        name: "USA PopEstimates",
        type: "map",
        roam: true,
        map: "world",
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [{ name: "台湾", value: 28397.812 }],
      },
    ],
  };
  myChart.setOption(option);
};
onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
</style>