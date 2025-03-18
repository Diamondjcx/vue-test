<template>
  <div id="map-container" style="width: 100%; height: 600px"></div>
  <div>
    <button @click="handleMarker()">标记</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      mapObj: null,
    };
  },

  methods: {
    initMap() {
      const startLngLat = [116.402394, 39.937182];
      // 自定义地图层
      const base_url = "/";
      const layers = [
        new AMap.TileLayer({
          getTileUrl: function (x, y, z) {
            console.log("x, y, z", x, y, z);
            const res = `${base_url}MAP_zxy/${z}/${x}/${y}.png`;
            console.log("res", res);
            return res;
          },
          opacity: 1,
          zIndex: 99,
        }),
      ];

      this.mapObj = new AMap.Map("map-container", {
        zoom: 15,
        center: startLngLat,
        layers: layers,
      });
      // 创建标记
      const marker = new AMap.Marker({
        position: new AMap.LngLat(116.402394, 39.937182), // 设置天安门的经纬度
        title: "天安门", // 鼠标悬停时显示的提示文本
      });
      marker.setMap(this.mapObj);
      // 在地图上显示一个气泡提示
      const infoWindow = new AMap.InfoWindow({
        content: "<div><h4>天安门</h4><p>北京市中心</p></div>",
        offset: new AMap.Pixel(0, -30), // 设置信息窗的位置
      });

      // 绑定事件，点击标记时弹出信息窗
      marker.on("click", () => {
        infoWindow.open(this.mapObj, marker.getPosition());
      });
    },

    handleMarker() {
      const marker = new AMap.Marker({
        position: [113.09898, 23.36134], //位置
      });
      this.mapObj.add(marker); //添加到地图
    },
  },

  mounted() {
    this.initMap();
  },
};
</script>
  
  <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  