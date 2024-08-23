<template>
  <h1>父传子</h1>
  <div class="container">
    <h3>父传子 props/defineProps</h3>
    <son1 :msg="parent_msg" />
  </div>
  <h1>父传子/子孙</h1>
  <div class="container">
    <h3>父传子孙 provide/inject</h3>
    <grandson />
  </div>
  <h1>父子间通讯</h1>
  <div class="container">
    <h3>3.4版本之前--父子互相通讯 v-model</h3>
    <son2 v-model="count" @update:modelValue="($event) => (foo = $event)" />
    {{ count }}
  </div>
  <h1>vue3.4版本之后的 父子间通讯</h1>
  <div class="container">
    <h3>父子互相通讯 v-model/defineModel</h3>
    <son2 v-model="countModel" />
    <h3>v-model 的参数</h3>
    <son2 v-model:title="bookTitle" />
    {{ bookTitle }}
    <h3>多个model绑定</h3>
    <son2 v-model:firstName="firstName" v-model:lastName="lastName" />
    {{ firstName }} {{ lastName }}
  </div>
  <h1>父访问子组件</h1>
  <div class="container">
    <h3>父组件访问子组件 ref/defineExpose</h3>
    <son1 ref="son1Ref" />
    <button @click="update">父组件点击调用子组件方法</button>
  </div>
  <div class="container">
    <cssVue />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import son1 from "./son1.vue";
import son2 from "./son2.vue";
import grandson from "./grandson.vue";
import cssVue from "./css.vue";
// 父传子	props/defineProps
// 父传子	provide/inject
// 父子互相通讯	v-model/defineModel
// 父组件访问子组件	ref/defineExpose
// 子传父	@/defineEmits
// pinia\vuex
const parent_msg = ref("父组件定义的值");
provide("msg", "默认值");
provide("parent_msg", parent_msg.value);

const countModel = ref(0);
const count = ref(0);
const bookTitle = ref("bookTitle");
const firstName = ref("姓");
const lastName = ref("名");

const son1Ref = ref(null);

const update = () => {
  son1Ref.value.update();
};
console.log(lastName.value);
</script>

<style  scoped>
.container {
  padding: 10px;
  border: 1px solid red;
  margin: 10px;
}
</style>