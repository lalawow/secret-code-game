<template>
    <div>
        <span>
            <Icon size="32">
                <sample class="text-yellow-500 fill-current" />
            </Icon>
            <span class="p-2 text-base text-yellow-500">{{ state.puzzleLength }}</span>
        </span>
        <span>
            <Icon size="32">
                <color class="text-purple-500 fill-current" />
            </Icon>
            <span class="p-2 text-base text-purple-500">{{ state.colorSize }}</span>
        </span>
    </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { Dog as Sample } from "@vicons/fa";
import { Color20Filled as Color } from "@vicons/fluent"
import store from "../store";

const { state } = store;
</script>

<style>
</style>