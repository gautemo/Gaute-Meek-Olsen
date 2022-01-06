<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{sizeRange: number[], containerWidth: number, containerHeight: number, move: {x: number, y: number}}>()
const random = (max: number) => Math.floor(Math.random() * Math.floor(max));
const size = random(props.sizeRange[1] - props.sizeRange[0]) + props.sizeRange[0]
const x = computed(() => random(props.containerWidth))
const y = computed(() => random(props.containerHeight) + size)
</script>

<template>
  <text 
    :x="x + move.x * (size / 30)" 
    :y="y + move.y * (size / 30)" 
    :style="{ '--size': size }"
  >✦</text>
</template>

<style scoped>
text{
  font-size: calc(var(--size) * 1px);
  fill: #ffee00ab;
}
</style>