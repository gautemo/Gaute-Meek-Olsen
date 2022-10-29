<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { allBlogs } from './blogsStore'

const { page } = useData()
const serieName = page.value.frontmatter.series
const series = computed(() => {
  if (serieName) {
    return allBlogs.value
      .filter((blog) => blog.series === serieName)
      .slice()
      .reverse()
  }
})
</script>

<template>
  <div v-if="series">
    <h4>{{ serieName }} ({{ series?.length }} part series)</h4>
    <ol>
      <li v-for="blog in series" :key="blog.key">
        <p v-if="page.title === blog.title">
          {{ blog.title }}
        </p>
        <a v-else :href="`/${blog.url}`" class="card">
          {{ blog.title }}
        </a>
      </li>
    </ol>
  </div>
</template>

<style scoped>
div {
  border: 1px solid var(--c-divider-dark);
  border-radius: 2px;
  background-color: var(--c-bg-accent);
}

h4 {
  font-weight: bold;
  margin: 0.5rem 1.25em 0 1.25em;
}

li {
  font-size: 1.1rem;
  margin-left: 1.25em;
}

p {
  font-weight: 600;
  margin: 0;
}
</style>
