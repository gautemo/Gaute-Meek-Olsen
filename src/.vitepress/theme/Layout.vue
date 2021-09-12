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
  --primary: #A8D0E6;
  --secondary: #F8E9A1;
  --tertiary: #F76C6C;
}

.dark{
  --primary: #44708d;
  --secondary: #3C8C6A;
  --tertiary: #EE5034;

  --c-text: #e2e2e2;
}
</style>

<style scoped>
article {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}
</style>