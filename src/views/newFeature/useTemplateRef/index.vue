<template>
  <div class="list" ref="listEl">
    <div ref="itemEl" class="item" v-for="item in list" :key="item">
      {{ item }}
    </div>
  </div>
  <Son ref="sonEl" />
  <Son1 ref="son1El" />
</template>
  
  <script setup >
import { useTemplateRef, onMounted, ref } from "vue";
import Son from "./components/Son.vue";
import Son1 from "./components/Son1.vue";

const list = [1, 2, 3];

const listRef = useTemplateRef("listEl");
const itemRef = useTemplateRef("itemEl");
const sonEl = ref(null);
// 获取实例
const son1Ref = useTemplateRef("son1El");

onMounted(() => {
  console.log(listRef.value); // div.list
  console.log(sonEl.value.name); // div.son
  console.log(itemRef.value); // Proxy(Array) {0: div.item, 1: div.item, 2: div.item}
  console.log("son1Ref", son1Ref.value.name);
});
</script>
  