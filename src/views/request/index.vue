<template>
  <div>
    <n-button @click="send">发起请求</n-button>
    <n-button @click="cancelSend">取消最近一次请求</n-button>
    <n-button @click="cancelAllSend">取消所有请求</n-button>
  </div>
</template>

<script setup>
import { cancelToken, clearAllToken } from "../../axios/globalCancelToken";
import axios from "../../axios/index";
const send = () => {
  axios.get("/getLongData").then(() => {
    console.log(111);
  });
};

const cancelSend = () => {
  cancelToken();
};

const cancelAllSend = () => {
  clearAllToken();
};
</script>

<style lang="less" scoped>
</style>