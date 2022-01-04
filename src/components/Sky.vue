<script setup lang="ts">
import {  useMouseInElement, useThrottle } from '@vueuse/core';
import { computed, ref } from 'vue';
import { darkMode } from '../store/settings'
import SkyStar from './SkyStar.vue';
import SkyCloud from './SkyCloud.vue';

const clouds = [
  { size: 200, yPercent: 0, xPercent: 5 },
  { size: 230, yPercent: 5, xPercent: 85 },
  { size: 240, yPercent: 10, xPercent: 30 },
  { size: 150, yPercent: 20, xPercent: 50 },
  { size: 100, yPercent: 30, xPercent: 45 },
  { size: 170, yPercent: 35, xPercent: 10 },
  { size: 80, yPercent: 55, xPercent: 5 },
  { size: 220, yPercent: 50, xPercent: 55 },
  { size: 230, yPercent: 45, xPercent: 25 },
  { size: 150, yPercent: 60, xPercent: 80 },
  { size: 160, yPercent: 65, xPercent: 30 },
  { size: 130, yPercent: 40, xPercent: 40 },
  { size: 160, yPercent: 10, xPercent: 60 },
  { size: 190, yPercent: 25, xPercent: 75 },
]

let nrStars = 60
if(document.documentElement.clientWidth <= 800){
  clouds.splice(10, 4)
  nrStars = 40
}

const sky = ref(null)
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(sky, {touch: false})

const move = useThrottle(computed(() => {
  const midX = elementWidth.value / 2
  const midY = elementHeight.value / 2
  const x = (midX - elementX.value) / 150
  const y = (midY - elementY.value) / 150
  return { x, y }
}), 40)
</script>

<template>
  <div class="container" ref="sky">
    <slot></slot>
    <svg :viewBox="`0 0 ${elementWidth} ${elementHeight}`" xmlns="http://www.w3.org/2000/svg">
      <SkyStar v-if="darkMode" v-for="i in nrStars" :key="i" :size-range="[8,35]" :container-width="elementWidth" :container-height="elementHeight" :move="move"/>
      <SkyCloud v-for="(cloud, i) in clouds"  :key="i" :cloud="cloud" :move="move" :container-width="elementWidth" :container-height="elementHeight"/>
    </svg>
  </div>
</template>

<style scoped>
.container{
  flex: 1;
  position: relative;
  display: grid;
  place-items: center;
}

svg{
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: visible;
}

@media only screen and (max-width: 800px) {
  .container{
    overflow: hidden;
    place-items: normal;
    justify-content: center;
  }
}
</style>