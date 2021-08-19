<template>
  <div class="container h-auto mx-auto">
    <div class="relative">
      <h1 class="p-2 text-5xl text-purple-600">游戏</h1>
      <game-intro class="absolute top-2 right-2" />
      <game-setting class="absolute top-2 left-2" />
      <control-panel />
      <play-field />
      <show-victory />
    </div>
  </div>
</template>

<script setup>
import ControlPanel from "./components/ControlPanel.vue";
import ShowPuzzle from "./components/ShowPuzzle.vue";
import PlayField from "./components/PlayField/index.vue";
import ShowVictory from "./components/ShowVictory.vue";
import GameIntro from "./components/GameIntro.vue";
import GameSetting from "./components/GameSetting.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
