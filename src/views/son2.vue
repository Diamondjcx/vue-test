<template>
  <!-- <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  /> -->
  <!-- 2------- -->
  <!-- <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">Increment</button> -->
  <!-- 3-------- -->
  <!-- <input type="text" v-model="title" /> -->
  <!-- ------------ -->
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>

<script setup>
// 3.4版本之前写法
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["update:modelValue"]);
// ---------

const model = defineModel();
const update = () => {
  model.value++;
};

const title = defineModel("title");

// ----
const firstName = defineModel("firstName");
const lastName = defineModel("lastName");
</script>

<style lang="scss" scoped>
</style>