<script setup lang="ts">
import { ref } from 'vue'

const isSupported = 'wakeLock' in navigator

let wakeLock = ref<WakeLockSentinel>()
async function lock() {
  wakeLock.value = await navigator.wakeLock.request('screen')
  wakeLock.value.addEventListener('release', () => {
    wakeLock.value = undefined
  })
}
</script>

<template>
  <div class="example">
    <p v-if="!isSupported">Screen Wake Lock API is not supported in your browser</p>
    <template v-else>
      <button v-if="wakeLock" @click="wakeLock.release()">Unlock</button>
      <button v-else @click="lock">Lock</button>
    </template>
  </div>
</template>

<style scoped>
button {
  background-color: var(--secondary);
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.example {
  border: 2px solid var(--secondary);
  position: relative;
  min-height: 100px;
  padding: 2rem 1rem 1rem 1rem;
  display: grid;
  place-items: center;
}

.example::after {
  content: 'Example:';
  position: absolute;
  left: 5px;
  top: 0;
  font-size: 1rem;
}
</style>
