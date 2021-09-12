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
  gap: 70px;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
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

@media only screen and (max-width: 800px) {
  section{
    gap: 10px;
  }
  
  nav{
    display: grid;
    grid-template: repeat(2, auto) / repeat(, auto);
    column-gap: 20px;
    row-gap: 10px;
  }

  a{
    grid-column: span 3;
  }

  a:nth-child(2){
    grid-row: 2;
    grid-column: 3 / span 3;
  }
  
  a:nth-child(3){
    grid-column: 5 / span 3;
  }

  a:nth-child(4){
    grid-row: 2;
    grid-column: 7 / span 3;
  }

  a:nth-child(5){
    grid-column: 8;
  }
}
</style>

<style>
:root{
  --menu-height: 4rem;
}

@media only screen and (max-width: 800px) {
  :root{
    --menu-height: 8rem;
  }
}
</style>