<script setup lang="ts">
import { search } from './blogsStore'
</script>

<template>
  <label>
    <input v-model="search" type="text" placeholder=" " />
    <span>Search for title or tags</span>
  </label>
</template>

<style scoped>
label {
  position: relative;
  flex: 1;
}

span {
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: text;
  transition: transform 0.5s ease, font-size 0.5s ease, opacity 0.5s ease;
}

input:not(:placeholder-shown) + span,
input:focus + span {
  opacity: 1;
  transform: translate(-10px, calc(10px + -100%));
  font-size: 0.9rem;
  cursor: default;
}
</style>
