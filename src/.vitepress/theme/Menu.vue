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
  background: var(--primary);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav{
  display: flex;
  gap: 30px;
}

a{
  color: var(--tertiary);
  text-shadow: -1px 1px 2px rgba(51, 51, 51, 0.5);
  font-size: 1.4rem;
  font-weight: bold;
}
</style>