<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import ArticleInfo from '../../components/ArticleInfo.vue'
import Series from '../../components/Series.vue'
import Menu from './Menu.vue'

const { page } = useData()
const isArticle = computed(() => page.value && /(dev-blog|til)\//.test(page.value.relativePath))
</script>

<template>
  <Menu/>
  <article v-if="isArticle">
    <ArticleInfo/>
    <Series/>
    <Content />
    <Series/>
  </article>
  <Content v-else/>
</template>

<style>
:root{
  --primary: #A8D0E6;
  --secondary: #F8E9A1;
  --tertiary: #F76C6C;
  --link: #0059b3;
}

.dark{
  --primary: #44708d;
  --secondary: #3C8C6A;
  --tertiary: #EE5034;

  --c-text: #e2e2e2;
  --c-bg: rgb(21, 32, 43);
  --c-bg-accent: rgb(25, 39, 52);
  --link: #85c2ff;
}

.dark article :not(pre) > code{
  background: rgba(66, 73, 80, 0.5);
  color: var(--c-text-lighter);
}
</style>

<style scoped>
article {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

article :deep(a){
  border-bottom: 1px solid #c8c8c8;
  color: var(--link);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

article :deep(a:hover){
  border-bottom: 2px solid var(--link);
}
</style>