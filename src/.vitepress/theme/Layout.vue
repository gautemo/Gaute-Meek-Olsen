<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import ArticleInfo from '../../components/ArticleInfo.vue'
import Menu from './Menu.vue'

const { page } = useData()
const isArticle = computed(() => page.value && /(blog|til)\//.test(page.value.relativePath))
</script>

<template>
  <Menu/>
  <article v-if="isArticle">
    <ArticleInfo/>
    <Content />
  </article>
  <main v-else>
    <Content />
  </main>
</template>

<style>
:root{
  --black: #1e1e1e;
  --white: #fcfcfc;
  --primary: #9ad2ec;
  --primary-dark: #60aed3;
  --menu-height: 4rem;
}

.dark{
  --primary: #639bb4;
  --primary-dark: #35708b;
}
</style>

<style scoped>
article {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}
</style>