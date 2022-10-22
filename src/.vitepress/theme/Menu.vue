<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue'
</script>

<template>
  <section>
    <nav>
      <a href="/">HOME</a>
      <a href="/dev-blog">BLOG</a>
      <a href="/today-i-learned">TIL</a>
      <a href="/talks">TALKS</a>
      <a href="/projects">PROJECTS</a>
    </nav>
    <DarkModeToggle />
  </section>
</template>

<style scoped>
section {
  min-height: var(--menu-height);
  background: var(--primary);
  padding: 1rem 2rem;
  display: flex;
  gap: 70px;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

a {
  color: var(--tertiary);
  text-shadow: -1px 1px 2px rgba(51, 51, 51);
  font-size: 1.4rem;
  font-weight: bold;
}

@media only screen and (max-width: 800px) {
  section {
    gap: 10px;
  }
}
</style>

<style>
:root {
  --menu-height: 4rem;
}

@media only screen and (max-width: 800px) {
  :root {
    --menu-height: 8rem;
  }
}
</style>
