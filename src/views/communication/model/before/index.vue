<template>
  <div class="container">
    <n-tabs type="line" animated>
      <n-tab-pane name="oasis" tab="默认写法（单个绑定）">
        <h3>v-model默认单值</h3>
        <Default v-model="countModel" />
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="加参数（单个绑定）">
        <h3>v-model 的参数</h3>
        <Single v-model:title="bookTitle" />
        {{ bookTitle }}
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="加参数（多个绑定）">
        <h3>多个model绑定</h3>
        <Muti v-model:firstName="firstName" v-model:lastName="lastName" />
        {{ firstName }} {{ lastName }}
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import Single from "./Single.vue";
import Default from "./Default.vue";
import Muti from "./Muti.vue";
const countModel = ref("");
const bookTitle = ref("bookTitle");
const firstName = ref("姓");
const lastName = ref("名");
</script>
  
  <style lang="scss" scoped>
</style>