<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getKey, getCoverImg } from '../utils/blogUtils'

const { page } = useData()
const { hideCoverImg, coverImgExtension } = page.value.frontmatter
const date = computed(() =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(page.value.frontmatter.date))
)
const updated = computed(
  () =>
    page.value.frontmatter.updated &&
    new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(page.value.frontmatter.updated))
)
const imgUrl = computed(() => {
  if (!hideCoverImg && page.value.relativePath.includes('dev-blog')) {
    return getCoverImg(getKey(page.value.relativePath), coverImgExtension)
  }
})
</script>

<template>
  <h1>{{ page.title }}</h1>
  <img v-if="imgUrl" :src="imgUrl" alt="cover image" />
  <div class="dates">
    <span>Published: {{ date }}</span>
    <span v-if="updated">Updated: {{ updated }}</span>
  </div>
</template>

<style scoped>
h1 {
  position: relative;
}

h1::before {
  content: '';
  position: absolute;
  width: 75px;
  height: 3px;
  bottom: 0;
  left: 0;
  background: linear-gradient(-90deg, whitesmoke -60%, var(--tertiary), var(--tertiary));
}

img {
  margin-top: 1rem;
}

.dates {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
</style>
