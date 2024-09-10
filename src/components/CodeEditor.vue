<template>
  <div class="codemirror">
    <Codemirror
      class="code"
      v-model="code"
      :style="{ height: '100%', width: '100%' }"
      :mode="mode"
      :spellcheck="true"
      :autofocus="true"
      :indent-with-tab="true"
      :tabSize="4"
      :extensions="extensions"
      @change="onChange"
    />
  </div>
</template>
<script setup>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { ref, reactive, onMounted, watch } from "vue";

const emit = defineEmits(["input"]);
let mode = ref("text/javascript");
let extensions = [javascript(), oneDark];

// 定义从父组件接收的属性
const props = defineProps({
  modelValue: "",
});
const code = ref(props.modelValue);
watch(code, (newValue) => {
  // console.log(newValue);
  emit("input", newValue);
});
const onChange = (line, value) => {
  console.log("onChange", line, value);
};
</script>
<style scoped>
.codemirror {
  height: 100%;
  width: 600px;
}
</style>