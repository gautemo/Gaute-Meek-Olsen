<script setup lang="ts">
import { ref } from 'vue'
import { getKey, getUrl, getCoverImg } from '../utils/blogUtils'
const blogFiles = import.meta.glob('../blog/*.md')

const blogs = ref<{title: string, key: string, url: string, cover: string}[]>([])

const loadList = async () => {
  const blogPromises = Object.entries(blogFiles).map(([_, mod]) => mod())
  const blogPages = await Promise.all(blogPromises)
  blogs.value = blogPages.map(it => {
    const pageData = JSON.parse(it.__pageData)
    const key = getKey(pageData.relativePath)
    return {
      title: pageData.title,
      key,
      url: getUrl(pageData.relativePath),
      cover: getCoverImg(key)
    }
  })
}
loadList()
</script>

<template>
  <ul>
    <li v-for="blog in blogs" :key="blog.key">
      <a :href="blog.url">
        <img :src="blog.cover" alt="cover image" />
        <h2>{{ blog.title }}</h2>
      </a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 25px var(--side-margin);
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 35px;
  height: fit-content;
}

ul > li > a {
  color: inherit;
  text-decoration: inherit;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 4px 6px rgba(51, 51, 51, 0.2));
}

ul > li > a:hover{
  filter: drop-shadow(0px 4px 6px rgba(51, 51, 51, 0.4));
}

ul > li > a > img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

ul > li > a > h2 {
  background: rgb(241, 243, 245);
  margin: 0;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0 0 5px 5px;
}
</style>