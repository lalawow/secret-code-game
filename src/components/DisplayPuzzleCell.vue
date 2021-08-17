<template>
  <div class="p-2">
    <Icon size="32">
      <sample :class="svgColor(color)" />
    </Icon>
  </div>
</template>

<script setup>
import { colorProps } from "../libs/constants";
import { Icon } from "@vicons/utils";
import { Dog as Sample } from "@vicons/fa";

const props = defineProps({
  color: String,
});
const svgColor = (color) =>
  `fill-current text-${color ? colorProps[color] : "gray-500"}`;
</script>
