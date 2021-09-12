<script setup lang="ts">
import { onMounted, onUpdated } from '@vue/runtime-core';
import { throttledWatch, useMouseInElement } from '@vueuse/core';
import { ref } from 'vue';
import { darkMode } from '../store/settings'

const random = (max: number) => Math.floor(Math.random() * Math.floor(max));

const clouds = [
  { size: 200, top: '0%', left: '5%' },
  { size: 230, top: '5%', left: '85%' },
  { size: 240, top: '10%', left: '30%' },
  { size: 150, top: '20%', left: '50%' },
  { size: 100, top: '30%', left: '45%' },
  { size: 170, top: '35%', left: '10%' },
  { size: 80, top: '55%', left: '5%' },
  { size: 220, top: '50%', left: '55%' },
  { size: 230, top: '45%', left: '25%' },
  { size: 150, top: '60%', left: '80%' },
  { size: 160, top: '65%', left: '30%' },
  { size: 130, top: '40%', left: '40%' },
  { size: 160, top: '10%', left: '60%' },
  { size: 190, top: '25%', left: '75%' },
]

let nrStars = 70
if(document.documentElement.clientWidth <= 800){
  clouds.splice(10, 4)
  nrStars = 40
}

const sky = ref(null)
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(sky, {touch: false})

let skyElements: HTMLElement[] = []
const loadSkyElements = () => {
  skyElements = [
    ...Array.from(document.querySelectorAll<HTMLElement>('.cloud')),
    ...Array.from(document.querySelectorAll<HTMLElement>('.star'))
  ]
}
onMounted(loadSkyElements)
onUpdated(loadSkyElements)

throttledWatch(
  [elementX, elementY, elementWidth, elementHeight],
  () => { 
    const midX = elementWidth.value / 2
    const midY = elementHeight.value / 2
    const moveX = (midX - elementX.value) / 150
    const moveY = (midY - elementY.value) / 150
    for(const skyElement of skyElements){
      const size = Number(skyElement.style.getPropertyValue('--size'))
      const toX = moveX * (size / 30)
      const toY = moveY * (size / 30)
      skyElement.style.transform = `translate(${toX}px, ${toY}px)`
    }
  },
  { throttle: 35 }
)
</script>

<template>
  <div class="container" ref="sky" v-memo="[darkMode]">
    <slot></slot>
    <span
      v-if="darkMode"
      v-for="id in nrStars"
      :key="id"
      :style="{ '--size': random(30) + 5, left: `${random(98)}%`, top: `${random(98)}%` }"
      :data-starid="id"
      class="star"
    >
      ✦
    </span>
    <span 
      v-for="(cloud, i) in clouds" 
      :key="i" 
      :style="{ '--size': cloud.size, left: cloud.left, top: cloud.top }"
      :class="{dark: darkMode}"
      :data-cloudid="i"
      class="cloud"
    >
      ☁
    </span>
  </div>
</template>

<style scoped>
.container{
  flex: 1;
  position: relative;
  display: grid;
  place-items: center;
}

.cloud, .star{
  position: absolute;
  cursor: default;
  font-size: calc(var(--size) * 1px);
}

.cloud{
  color: #ffffffab;
}

.cloud.dark{
  color: #333333ab;
}

.star{
  color: #ffee00ab;
}

@media only screen and (max-width: 800px) {
  .container{
    overflow: hidden;
    place-items: normal;
    justify-content: center;
  }
}
</style>