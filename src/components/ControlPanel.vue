<template>
    <div>
        <n-button
            type="primary"
            @click="handleInGame"
        >{{ state.inGame ? 'Stop Game' : 'Start Game' }}</n-button>
        <n-button type="primary" @click="setValue()">Settings</n-button>
    </div>
</template>

<script setup>
import { NButton } from "naive-ui";
import store from '../store'
import { genPuzzle } from '../libs/utils'

const { state } = store

const handleInGame = () => {
    if (!state.inGame) {
        const { colorSize, puzzleLength } = state
        const newPuzzle = genPuzzle({ colorSize, puzzleLength })
        store.setPuzzle(newPuzzle)
    }
    store.setInGame(!state.inGame)
}
</script>
