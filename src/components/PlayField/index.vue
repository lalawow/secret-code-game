<template>
  <div>
    <solution-line
      v-for="(solution, index) in state.solutions"
      :solution="solution"
      :index="index + 1"
      v-bind:key="index"
    ></solution-line>
    <solution-line
      :solution="[]"
      :index="state.solutions.length + 1"
      :isNew="true"
      v-bind:key="state.solutions.length"
    ></solution-line>
  </div>
</template>

<script setup>
import SolutionLine from "./SolutionLine.vue";
import store from "../../store";

const { state } = store;
</script>
