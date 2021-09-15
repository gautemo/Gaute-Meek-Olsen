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
  cursor: zoom-out;
  transform: scale(1.7);
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>