<script setup lang="ts">
defineProps<{
  title: string
  image: string
  type: '⚡' | '👨‍🏫' | '👨‍💻'
  tech: string[]
}>()
</script>

<template>
  <h2>{{ title }}</h2>
  <img :src="image" alt="talk cover" />
  <slot></slot>
  <div class="tech-container">
    <b>Tech:</b>
    <span class="tech" v-for="tag in tech" :key="tag">{{ tag }}</span>
  </div>
</template>

<style scoped></style>
