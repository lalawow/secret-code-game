<template>
  <div class="grid grid-cols-12 gap-4 text-white">
    <div class="col-span-2" />
    <div class="col-span-2 p-3 text-base">{{ index }}</div>
    <div class="col-span-6">
      <show-solution v-if="!isNew" :solution="solution" />
      <fill-solution v-else />
      <!-- <div v-if="isNew">
        <n-button text v-if="allowSubmitSolution" class="text-white" @click="handleClick">提交答案</n-button>
      </div>-->
      <show-result v-if="!isNew" :solution="solution" />
    </div>
    <div class="col-span-2" />
    <!-- <div class="col-span-4" />
    <div class="col-span-4">
      <div v-if="isNew">
        <n-button text v-if="allowSubmitSolution" class="text-white" @click="handleClick">提交答案</n-button>
      </div>
      <show-result v-else :solution="solution" />
    </div>-->
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
