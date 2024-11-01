<template>
  <div class="grid-container">
    <div v-for="card in cards" :key="card.id" class="card">
      {{ card.title }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cards = ref([
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" },
  { id: 7, title: "Card 7" },
  { id: 8, title: "Card 8" },
  { id: 9, title: "Card 9" },
  { id: 10, title: "Card 10" },
  { id: 11, title: "Card 11" },
  { id: 12, title: "Card 12" },
]);
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  -webkit-box-pack: justify;
  justify-content: space-between;
  column-gap: 16px;
}

.card {
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}
</style>