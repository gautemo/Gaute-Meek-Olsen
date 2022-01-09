<script setup lang="ts">
import { computed } from 'vue'

interface Cloud {
  size: number
  xPercent: number
  yPercent: number
}

const props =
  defineProps<{ cloud: Cloud; containerWidth: number; containerHeight: number; move: { x: number; y: number } }>()
const x = computed(() => (props.cloud.xPercent / 100) * props.containerWidth)
const y = computed(() => (props.cloud.yPercent / 100) * props.containerHeight + props.cloud.size)
</script>

<template>
  <text
    :x="x + move.x * (props.cloud.size / 30)"
    :y="y + move.y * (props.cloud.size / 30)"
    :style="{ '--size': props.cloud.size }"
    >☁</text
  >
</template>

<style scoped>
text {
  font-size: calc(var(--size) * 1px);
  fill: #ffffffab;
}

.dark text {
  fill: #333333ab;
}
</style>
