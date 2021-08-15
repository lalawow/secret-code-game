<template>
  <div class="container mx-auto">
    <h1 class="text-5xl text-purple-600">游戏</h1>
    <ControlPanel />
    <ShowPuzzle />
    <PlayField />
  </div>
</template>

<script setup>
import ControlPanel from './components/ControlPanel.vue'
import ShowPuzzle from './components/ShowPuzzle.vue'
import PlayField from './components/PlayField/index.vue'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
