<template>
  <div class="p-2">
    <div v-if="state.youWin" class="text-3xl text-center text-yellow-400">
      <p>你猜了{{ state.solutions.length }}次，用时{{ parseInt((state.endAt - state.startAt) / 1000) }}秒，猜出了结果。</p>
      <p>牛啊，这都被你猜到了！</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from "../store";

const { state } = store;

</script>

<style>
</style>
