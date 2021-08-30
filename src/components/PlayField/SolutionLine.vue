<template>
  <div class="grid grid-cols-12 gap-6 text-white">
    <div class="col-start-1 col-end-2 p-3 text-base sm:col-start-3 sm:col-end-4">{{ index }}</div>
    <div class="col-span-10 sm:col-span-6">
      <show-solution v-if="!isNew" :solution="solution" />
      <fill-solution v-else />
      <show-result v-if="!isNew" :solution="solution" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { NButton } from "naive-ui";
import ShowSolution from "./ShowSolution.vue";
import FillSolution from "./FillSolution.vue";
import ShowResult from "./ShowResult.vue";
import store from "../../store";

const { state } = store;

const props = defineProps({
  solution: Array,
  index: Number,
  isNew: Boolean,
});

const allowSubmitSolution = computed(() => {
  let res = true;
  state.currentSolution.forEach((c) => {
    if (!c) res = false;
  });
  return res;
});

const handleClick = () => {
  store.pushSolutions(state.currentSolution);
  store.resetCurrentSolution();
};
</script>
