<template>
    <div class="p-6">
        <div :class="textColor(color)">{{ color }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { colorProps } from '../libs/constants'

const props = defineProps({
    color: String,
})
const textColor = color => `text-${colorProps[color]}`
</script>
