<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{src: string, alt: string}>()
const zoom = ref(false)
</script>

<template>
  <img :src="props.src" :alt="props.alt" @click="zoom = !zoom" :class="{zoom: zoom}">
</template>

<style scoped>
img{
  cursor: zoom-in;
}
.zoom{
  --width: min(1500px, 95vw);
  cursor: zoom-out;
  position: relative;
  width: var(--width);
  left: calc(var(--width)/-2 + 50%);
  max-width: none;
}
</style>