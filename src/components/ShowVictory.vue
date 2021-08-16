<template>
  <div>
    <div v-if="state.youWin" class="text-5xl text-center text-yellow-400">
      牛啊，被你猜到了！
    </div>
  </div>
</template>

<script setup>
import store from "../store";

const { state } = store;
</script>

<style></style>
