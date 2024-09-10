<template>
  <div>
    <CodeEditor v-model="code" />
  </div>
</template>

<script setup>
import CodeEditor from "@/components/CodeEditor.vue";
import { ref, reactive } from "vue";
const code = ref(`console.log("Hello World")`);
</script>

<style lang="scss" scoped>
</style>


  