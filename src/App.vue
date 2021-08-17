<template>
  <div class="container mx-auto">
    <h1 class="p-2 text-5xl text-purple-600">游戏</h1>
    <control-panel />
    <play-field />
    <show-victory />
  </div>
</template>

<script setup>
import ControlPanel from "./components/ControlPanel.vue";
import ShowPuzzle from "./components/ShowPuzzle.vue";
import PlayField from "./components/PlayField/index.vue";
import ShowVictory from "./components/ShowVictory.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
