<template>
  <div class="flex flex-wrap">
    <div
      v-for="(cell, index) in state.currentSolution"
      :color="cell"
      v-bind:key="index"
      @click="handleChangePosition(index)"
      :class="cellBorder[index]"
    >
      <display-puzzle-cell :color="cell"></display-puzzle-cell>
    </div>
  </div>
  <div class="flex flex-wrap items-center">
    <div class="text-white">选项：</div>
    <div
      class="cursor-pointer hover:bg-gray-600"
      v-for="(cell, index) in colorArray"
      :color="cell"
      v-bind:key="index"
      @click="handleChangeValue(cell)"
    >
      <display-puzzle-cell v-if="index < state.colorSize" :color="cell"></display-puzzle-cell>
    </div>
    <div>
      <n-button
        text
        :disabled="!allowSubmitSolution"
        class="text-white"
        @click="handleSubmitSolution"
      >提交答案</n-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { NButton } from 'naive-ui'
import DisplayPuzzleCell from "../DisplayPuzzleCell.vue";
import store from "../../store";
import { colorArray } from "../../libs/constants.js";
const { state } = store;

const position = ref(0);

const handleChangePosition = (p) => {
  position.value = p;
};

const handleChangeValue = (color) => {
  store.fillSolution(position.value, color);
};

const cellBorder = computed(() => {
  const res = new Array(state.puzzleLength).fill(
    "border-2 border-transparent cursor-pointer hover:bg-gray-600"
  );
  res[position.value] =
    "border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-600 rounded-md";
  return res;
});

const allowSubmitSolution = computed(() => {
  let res = true;
  state.currentSolution.forEach((c) => {
    if (!c) res = false;
  });
  return res;
});

const handleSubmitSolution = () => {
  store.pushSolutions(state.currentSolution);
  store.resetCurrentSolution();
};
</script>

<style>
</style>
