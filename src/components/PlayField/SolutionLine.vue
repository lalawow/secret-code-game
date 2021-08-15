<template>
    <div class="grid grid-cols-12 gap-4 text-white">
        <div class="col-span-2 border-2 border-gray-300">{{ index }}</div>
        <div class="col-span-6 border-2 border-gray-300">
            <show-solution v-if="!isNew" :solution="solution" />
            <fill-solution v-else />
        </div>
        <div class="col-span-4 border-2 border-gray-300">
            <n-button :disabled="!allowSubmitSolution" class="text-white" @click="handleClick">点击</n-button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { NButton } from 'naive-ui'
import ShowSolution from './ShowSolution.vue'
import FillSolution from './FillSolution.vue'
import store from '../../store'

const { state } = store

const props = defineProps({
    solution: Array,
    index: Number,
    isNew: Boolean,
})

const allowSubmitSolution = computed(() => {
    if (props.isNew) return false
    let res = true
    console.log("compute", state.currentSolution)
    state.currentSolution.forEach(c => {
        if (!c) res = false
    })
    return res
})

const handleClick = () => {
    console.log("click")
}
</script>