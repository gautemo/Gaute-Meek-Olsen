<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getKey, getCoverImg } from '../utils/blogUtils'

const { page } = useData()
const { hideCoverImg } = page.value.frontmatter

const date = computed(() => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(page.value.frontmatter.date)))
const imgUrl = computed(() => getCoverImg(getKey(page.value.relativePath)))
</script>

<template>
  <h1>{{page.title}}</h1>
  <img v-if="!hideCoverImg" :src="imgUrl" alt="cover image"/>
  <p>Published: {{date}}</p>
</template>