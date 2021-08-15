<template>
    <div>
        <div v-show="!state.inGame">
            <n-button type="primary" @click="handleInGame">开始游戏</n-button>
            <n-button type="primary" @click="setValue()">设置</n-button>
        </div>
        <div v-show="state.inGame">
            <n-button type="error" @click="handleInGame">结束游戏</n-button>
        </div>
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
