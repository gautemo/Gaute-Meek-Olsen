<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import ArticleInfo from '../../components/ArticleInfo.vue'

const { page } = useData()
const isArticle = computed(() => page.value && /(blog|til)\//.test(page.value.relativePath))
</script>

<template>
  <h1>Custom Layout!</h1>
  <article v-if="isArticle">
    <ArticleInfo/>
    <Content />
  </article>
  <main v-else>
    <Content />
  </main>
</template>

<style scoped>
article {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}
</style>