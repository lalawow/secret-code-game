<template>
    <div class="grid grid-cols-12 gap-4 text-white">
        <div class="col-span-2 border-2 border-gray-300">{{ index }}</div>
        <div class="col-span-6 border-2 border-gray-300">
            <show-solution v-if="!isNew" :solution="solution" />
            <fill-solution v-else />
        </div>
        <div class="col-span-4 border-2 border-gray-300">4</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ShowSolution from './ShowSolution.vue'
import FillSolution from './FillSolution.vue'

const props = defineProps({
    solution: Array,
    index: Number,
    isNew: Boolean,
})
</script>