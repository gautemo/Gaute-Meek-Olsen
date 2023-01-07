<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { inBrowser, useData } from 'vitepress'
import ArticleInfo from '../../components/ArticleInfo.vue'
import Series from '../../dev-blog/components/Series.vue'
import Menu from './Menu.vue'
import { getCoverImg, getKey } from '../../utils/blogUtils'

const { page } = useData()
const isArticle = computed(() => page.value && /(dev-blog|today-i-learned)\//.test(page.value.relativePath))

function updateHeadTag(selector: string, property: string, value: string) {
  const el = document.querySelector<any>(selector)
  if (el && el[property] !== value) {
    el[property] = value
  }
}

watchEffect(() => {
  if (inBrowser) {
    const url = `https://gaute.dev/${page.value.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`
    updateHeadTag('link[rel=canonical]', 'href', url)
    updateHeadTag(`meta[property='og:url']`, 'content', url)
    updateHeadTag(`meta[property='og:title']`, 'content', page.value.title)
    updateHeadTag(`meta[property='og:description']`, 'content', page.value.description)
    if (isArticle.value) {
      updateHeadTag(`meta[property='og:type']`, 'content', 'article')
    } else {
      updateHeadTag(`meta[property='og:type']`, 'content', 'website')
    }
    if (/dev-blog\//.test(page.value.relativePath) && !page.value.frontmatter.hideCoverImg) {
      updateHeadTag(
        `meta[property='og:image']`,
        'content',
        `https://gaute.dev${getCoverImg(getKey(page.value.relativePath), page.value.frontmatter.coverImgExtension)}`
      )
      updateHeadTag(
        `meta[property='twitter:image:src']`,
        'content',
        `https://gaute.dev${getCoverImg(getKey(page.value.relativePath), page.value.frontmatter.coverImgExtension)}`
      )
    } else {
      updateHeadTag(`meta[property='og:image']`, 'content', 'https://gaute.dev/images/og_image.jpg')
      updateHeadTag(`meta[property='twitter:image:src']`, 'content', 'https://gaute.dev/images/og_image.jpg')
    }
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

.vp-doc h2 {
  margin: 0.5rem 0;
}

figcaption {
  text-align: center;
  font-style: italic;
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
