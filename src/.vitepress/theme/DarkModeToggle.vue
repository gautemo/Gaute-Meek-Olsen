<script setup lang="ts">
import { darkMode } from '../../store/settings'
</script>

<template>
<label>
  <input type="checkbox" v-model="darkMode">
  <div class="circle">
    <transition name="fade">
      <span v-if="!darkMode" class="sun">🌞</span>
    </transition>
    <transition name="fade">
      <span v-if="darkMode" class="moon">🌑</span>
    </transition>
  </div>
</label>
</template>

<style scoped>
label{
  cursor: pointer;
  width: 55px;
  height: 32px;
  padding: 3px;
  background: white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: all .5s ease;
  font-size: 1.25rem;
}

input{
  display: contents;
  opacity: 0;
  width: 0;
  height: 0;
}

.circle{
  position: relative;
  left: 0;
  transition: left .5s ease;
}

span{
  user-select: none;
}

input:checked + .circle{
  left: 22px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>