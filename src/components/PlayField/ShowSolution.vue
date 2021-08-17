<template>
  <div class="flex flex-wrap">
    <DisplayPuzzleCell
      v-for="(cell, index) in solution"
      :color="cell"
      v-bind:key="index"
    />
  </div>
</template>

<script setup>
import DisplayPuzzleCell from "../DisplayPuzzleCell.vue";

const props = defineProps({
  solution: Array,
});
</script>

<style></style>
