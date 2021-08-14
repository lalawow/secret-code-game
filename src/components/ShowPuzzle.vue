<template>
    <div class="flex">
        <DisplayPuzzleCell v-for="(cell,index) in state.puzzle" v-bind:key="index" :color="cell"></DisplayPuzzleCell>
    </div>
</template>

<script setup>
import store from '../store'
import DisplayPuzzleCell from './DisplayPuzzleCell.vue'

const { state } = store

console.log(state.puzzle)
</script>