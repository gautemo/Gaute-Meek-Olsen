<script setup lang="ts">
import { computed } from 'vue'

interface Cloud {
  size: number
  xPercent: number
  yPercent: number
}

const props =
  defineProps<{ cloud: Cloud; containerWidth: number; containerHeight: number; }>()
const x = computed(() => (props.cloud.xPercent / 100) * props.containerWidth)
const y = computed(() => (props.cloud.yPercent / 100) * props.containerHeight + props.cloud.size)
</script>

<template>
  <text
    :x="x"
    :y="y"
    >☁</text
  >
</template>

<style scoped>
text {
  --size: v-bind(cloud.size);
  font-size: calc(var(--size) * 1px);
  fill: #ffffffab;
  transform: translate(calc(var(--move-x) * var(--size) * 0.03px), calc(var(--move-y) * var(--size) * 0.03px));
}

.dark text {
  fill: #333333ab;
}
</style>
