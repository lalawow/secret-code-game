<template>
  <div class="flex">
    <div class="p-2 text-green-500">{{ result.correct }}</div>
    <div class="p-2 text-yellow-500">{{ result.close }}</div>
    <div class="p-2 text-red-500">{{ result.wrong }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { genResult } from "../../libs/utils";
import store from "../../store";
const { state } = store;
const props = defineProps({
  solution: Array,
});

const result = computed(() => {
  return genResult(state.puzzle, props.solution);
});
</script>

<style></style>
