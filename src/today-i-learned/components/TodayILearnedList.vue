<script setup lang="ts">
import { getUrl } from '../../utils/blogUtils'
import { computed } from 'vue'
import IconCss from '../assets/IconCss.vue'
import IconGit from '../assets/IconGit.vue'
import IconCsharp from '../assets/IconCsharp.vue';
import IconKotlin from '../assets/IconKotlin.vue';
const tilFiles = import.meta.globEager('../*.md')

const icons = {
  CSS: IconCss,
  git: IconGit,
  'C#': IconCsharp,
  Kotlin: IconKotlin,
}
const getIcon = (name: string) => icons[name as keyof typeof icons]

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
      <h2>
        <component :is="getIcon(category)" class="icon"></component>
        <span>{{ category }}</span>
      </h2>
      <ul>
        <li v-for="til in list" :key="til.url">
          <a :href="til.url">{{ til.title }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  min-width: 70%;
  margin-bottom: 50px;
}

h2 {
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 10px;
  align-items: center;
  height: 3rem;
}

.icon {
  width: 100%;
  height: 100%;
}
</style>
