<script setup lang="ts">
import { selectedTags } from '../store/blogs'
</script>

<template>
  <div>
    <transition-group name="list">
      <span v-for="(tag, i) in selectedTags" :key="tag" @click="selectedTags.splice(i, 1)">
        <span style="flex:1">{{ tag }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="24" height="24" > <defs> <path id="a" d="M0 0h24v24H0z" /> </defs> <clipPath id="b"> <use xlink:href="#a" overflow="visible" /> </clipPath> <path clip-path="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" /> </svg>
      </span>
    </transition-group>
  </div>
</template>

<style scoped>
div {
  position: relative;
  display: flex;
  gap: 10px;
}

span {
  padding: 0 10px;
  max-width: fit-content;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  background: var(--secondary);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  height: 100%;
  left: 50%;
}
</style>