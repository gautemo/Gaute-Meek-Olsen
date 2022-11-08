<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { inBrowser, useData } from 'vitepress'
import ArticleInfo from '../../components/ArticleInfo.vue'
import Series from '../../dev-blog/components/Series.vue'
import Menu from './Menu.vue'

const { page } = useData()
const isArticle = computed(() => page.value && /(dev-blog|today-i-learned)\//.test(page.value.relativePath))
watchEffect(() => {
  if (inBrowser) {
    const url = `https://gaute.dev/${page.value.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel=canonical]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.rel = 'canonical'
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.href = url
  }
})
</script>

<template>
  <Menu />
  <article v-if="isArticle" class="vp-doc">
    <ArticleInfo />
    <Series />
    <Content />
    <Series />
  </article>
  <Content v-else />
</template>

<style>
:root {
  --primary: #a8d0e6;
  --secondary: #f8e9a1;
  --tertiary: #f76c6c;
  --link: #0059b3;
}

body {
  overflow-x: hidden;
}

.dark {
  --primary: #44708d;
  --secondary: #3c8c6a;
  --tertiary: #ee5034;

  --link: #85c2ff;
}

main {
  margin: 25px 15vw 50px 15vw;
}

@media only screen and (max-width: 800px) {
  main {
    margin: 25px 5vw 50px 5vw;
  }
}

.medium-img {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medium-img > img {
  width: 50%;
  max-width: 400px;
}

input,
button {
  color: inherit;
  background-color: var(--vp-c-bg-alt);
}

input {
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.5rem;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 3px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #ececec;
}

.dark ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #333;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--tertiary);
}

.header-anchor {
  visibility: hidden;
}

#app :is(article, #show, #urls, #tils) a {
  border-bottom: 1px solid #c8c8c8;
  color: var(--link);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

#app :is(article, #show, #urls, #tils) a:hover {
  border-bottom: 2px solid var(--link);
  color: var(--link);
}
</style>

<style scoped>
article {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
  word-break: break-word;
}

article :deep(p img) {
  display: block;
  margin: 0 auto;
}

article :deep(h2) {
  border-top: none;
}
</style>
