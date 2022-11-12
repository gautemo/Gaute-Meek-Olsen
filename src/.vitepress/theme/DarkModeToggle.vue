<script setup lang="ts">
import { darkMode } from '../../store/settings'
function toggle() {
  darkMode.value = !darkMode.value
}
</script>

<template>
  <label>
    <input type="checkbox" @change="toggle" />
    <div class="circle">
      <span class="sun">🌞</span>
      <span class="moon">🌑</span>
    </div>
  </label>
</template>

<style scoped>
label {
  cursor: pointer;
  width: 55px;
  min-width: 55px;
  height: 32px;
  padding: 4px 3px 1px 3px;
  background: var(--secondary);
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease;
  font-size: 1.25rem;
}

input {
  display: contents;
  opacity: 0;
  width: 0;
  height: 0;
}

.circle {
  position: relative;
  height: 100%;
  left: 0;
  transition: left 0.5s ease;
}

span {
  user-select: none;
}

input:checked + .circle {
  left: 22px;
}

.sun,
.moon {
  position: absolute;
  top: 0;
  bottom: 0;
  transition: opacity 0.5s ease;
}

.dark .sun {
  opacity: 0;
}

html:not(.dark) .moon {
  opacity: 0;
}
</style>
