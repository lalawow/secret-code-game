<template>
    <div class="p-2">
        <Icon size="32">
            <Balloon :class="svgColor(color)" />
        </Icon>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { colorProps } from '../libs/constants'
import { Icon } from "@vicons/utils"
import { Balloon16Filled as Balloon } from '@vicons/fluent'

const props = defineProps({
    color: String,
})
const svgColor = color => `fill-current text-${color ? colorProps[color] : 'gray-500'}`
</script>
