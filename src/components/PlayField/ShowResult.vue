<template>
  <div class="flex text-sm">
    <div class="p-2 text-green-500">
      <span class="p-1">
        <Icon size="20">
          <Flag class="fill-current" />
        </Icon>
      </span>
      <span>正确：{{ result.correct }}</span>
    </div>
    <div class="p-2 text-yellow-500">
      <span class="p-1">
        <Icon size="20">
          <Flag class="fill-current" />
        </Icon>
      </span>
      <span>接近：{{ result.close }}</span>
    </div>
    <div class="p-2 text-red-500">
      <span class="p-1">
        <Icon size="20">
          <Flag class="fill-current" />
        </Icon>
      </span>
      <span>错误：{{ result.wrong }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@vicons/utils";
import { FlagCheckered as Flag } from "@vicons/fa";
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

<style>
</style>
