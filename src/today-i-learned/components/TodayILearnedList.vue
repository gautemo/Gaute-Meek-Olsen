<script setup lang="ts">
import { getUrl } from '../../utils/blogUtils'
import { computed } from 'vue'
const tilFiles = import.meta.globEager('../*.md')

const categories = computed<{ [key: string]: { title: string; url: string }[] }>(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const list = Object.entries(tilFiles).map(([_, mod]) => JSON.parse(mod.__pageData))
  return list.reduce((acc, pageData) => {
    acc[pageData.frontmatter.category] ??= []
    acc[pageData.frontmatter.category].push({
      title: pageData.title,
      url: getUrl(pageData.relativePath),
    })
    return acc
  }, {})
})
</script>

<template>
  <section>
    <div v-for="[category, list] in Object.entries(categories)" :key="category">
      <header>
        <!-- <div class="icon" v-html="b.icon"></div> -->
        <h2>{{ category }}</h2>
      </header>
      <ul>
        <li v-for="til in list" :key="til.url">
          <a :href="til.url">{{ til.title }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
