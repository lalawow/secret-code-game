<template>
  <div class="grid grid-cols-12 gap-4 text-white">
    <div class="col-span-2 border-2 border-gray-300">{{ index }}</div>
    <div class="col-span-6 border-2 border-gray-300">
      <show-solution v-if="!isNew" :solution="solution" />
      <fill-solution v-else />
    </div>
    <div class="col-span-4 border-2 border-gray-300">
      <n-button
        text
        v-if="isNew && allowSubmitSolution"
        class="text-white"
        @click="handleClick"
        >提交答案</n-button
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { NButton } from "naive-ui";
import ShowSolution from "./ShowSolution.vue";
import FillSolution from "./FillSolution.vue";
import store from "../../store";

const { state } = store;

const props = defineProps({
  solution: Array,
  index: Number,
  isNew: Boolean,
});

const allowSubmitSolution = computed(() => {
  let res = true;
  console.log("compute", state.currentSolution, state.currentSolution.length);
  state.currentSolution.forEach((c) => {
    console.log("el", c);
    if (!c) res = false;
  });
  console.log("res", res);
  return res;
});

const handleClick = () => {
  store.pushSolutions(state.currentSolution);
  store.resetCurrentSolution();
};
</script>
