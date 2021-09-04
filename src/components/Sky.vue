<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { useMouseInElement, useThrottle } from '@vueuse/core';
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

const sky = ref(null)
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(sky, {touch: false})
const mouseX = useThrottle(elementX, 30)
const mouseY = useThrottle(elementY, 30)
const move = computed(() => {
  const moveValue = darkMode.value ? 200 : 500
  const x = (elementWidth.value/2 - mouseX.value) / moveValue
  const y = (elementHeight.value/2 - mouseY.value) / moveValue
  return { x, y }
})
</script>

<template>
  <div class="container" ref="sky" v-once>
    <span 
      v-for="(cloud, i) in clouds" 
      :key="i" 
      :style="{ '--size': cloud.size, left: cloud.left, top: cloud.top }"
      :data-cloudid="i"
      class="cloud"
    >
      ☁
    </span>
    <span
      v-if="darkMode"
      v-for="id in 200"
      :key="id"
      :style="{ '--size': random(30) + 5, left: `${random(98)}%`, top: `${random(98)}%` }"
      :data-starid="id"
      class="star"
    >
      ✦
    </span>
  </div>
</template>

<style scoped>
.container{
  position: absolute;
  inset: 0;
  width: 60%;
}

.cloud, .star{
  position: absolute;
  cursor: default;
  font-size: calc(var(--size) * 1px);
  --move: calc(1px * (var(--size)/10));
  transform: translate(calc(v-bind('move.x') * var(--move)), calc(v-bind('move.y') * var(--move)));
}

.cloud{
  color: #ffffffab;
}

.star{
  color: #ffee00ab;
}
</style>