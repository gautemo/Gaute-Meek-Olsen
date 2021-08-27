<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue'
</script>

<template>
  <section>
    <nav>
      <a href="/">HOME</a>
      <a href="/dev-blog">BLOG</a>
      <a href="/til">TIL</a>
      <a href="/talks">TALKS</a>
      <a href="/projects">PROJECTS</a>
    </nav>
    <DarkModeToggle/>
  </section>
</template>

<style scoped>
section{
  height: var(--menu-height);
  background: var(--primary-dark);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav{
  display: flex;
  gap: 15px;
}

a{
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>