<script setup lang="ts">
import { tags, selectedTags } from './blogsStore'
import { ref, watchEffect } from 'vue'
import { onClickOutside } from '@vueuse/core'

const dropdownOpen = ref(false)
watchEffect(() => {
  if (tags.value.length === 0) dropdownOpen.value = false
})
const dropdownRef = ref(null)
onClickOutside(dropdownRef, () => (dropdownOpen.value = false))

const toggle = () => {
  if (tags.value.length > 0) {
    dropdownOpen.value = !dropdownOpen.value
  }
}
</script>

<template>
  <div class="container" ref="dropdownRef">
    <button @click="toggle" :class="{ disabled: tags.length === 0 }">
      <span>Tags</span>
      <svg
        class="caret"
        :class="{ turn: dropdownOpen }"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
    <div class="select-tag" v-if="dropdownOpen">
      <div v-for="tag in tags" :key="tag" @click.stop="selectedTags.push(tag)">
        <span>{{ tag }}</span>
        <svg class="check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

button {
  background: var(--secondary);
  display: flex;
  align-items: center;
  height: 100%;
  border: none;
  border-radius: 3px;
  padding: 0 10px;
  cursor: pointer;
}

.disabled {
  background: #e7e7e785;
  cursor: default;
}

.select-tag {
  display: flex;
  position: absolute;
  top: 100%;
  right: 0;
  flex-direction: column;
  background-color: var(--secondary);
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 0 5px #333;
  z-index: 1;
}
.select-tag > div {
  border-bottom: 1px solid #0000003f;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  min-width: 180px;
  cursor: pointer;
}

.select-tag > div:last-child {
  border-bottom: none;
}

.select-tag > div > .check {
  visibility: hidden;
}
.select-tag > div > span {
  flex: 1;
  padding: 15px 25px 15px 2px;
}
.select-tag > div:hover > span {
  font-weight: bold;
}
.select-tag > div:hover > .check {
  visibility: visible;
}

.caret {
  transition: transform 0.2s ease-in-out;
}

.caret > :first-child {
  fill: var(--vp-c-text-1);
}

.turn {
  transform: rotate(180deg);
}
</style>
