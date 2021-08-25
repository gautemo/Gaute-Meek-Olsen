<script setup lang="ts">
import { search } from '../store/blogs'
</script>

<template>
  <label>
    <input v-model="search" @input="$emit('update-search', search)" type="text" placeholder=" " />
    <span>Search for title or tags</span>
  </label>
</template>

<style scoped>
label{
  position: relative;
  flex: 1;
}

input{
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.5rem;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 3px;
}

span{
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 2px;
  cursor: text;
  transition: all 0.5s ease-in-out;
}

input:not(:placeholder-shown) + span,
input:focus + span{
  opacity: 1;
  transform: translate(-2px, -1.5rem);
  font-size: 0.8rem;
  cursor: default;
}
</style>