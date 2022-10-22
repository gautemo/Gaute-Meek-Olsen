<script setup lang="ts">
import { getUrl } from '../../utils/blogUtils'
import IconCss from '../assets/IconCss.vue'
import IconGit from '../assets/IconGit.vue'
import IconCsharp from '../assets/IconCsharp.vue'
import IconKotlin from '../assets/IconKotlin.vue'
import IconAndroid from '../assets/IconAndroid.vue'
import IconJs from '../assets/IconJs.vue'
import IconFirebase from '../assets/IconFirebase.vue'
import IconSecurity from '../assets/IconSecurity.vue'
import IconHtml from '../assets/IconHtml.vue'
import IconVue from '../assets/IconVue.vue'
import { PageData } from 'vitepress'
import { asyncComputed } from '@vueuse/core'
const tilFiles = import.meta.glob<{ __pageData: PageData }>('../*.md')

const icons = {
  Android: IconAndroid,
  'C#': IconCsharp,
  CSS: IconCss,
  Firebase: IconFirebase,
  git: IconGit,
  HTML: IconHtml,
  JavaScript: IconJs,
  Kotlin: IconKotlin,
  Security: IconSecurity,
  Vue: IconVue,
}
const getIcon = (name: string) => icons[name as keyof typeof icons]

const categories = asyncComputed<Map<string, { title: string; url: string }[]>>(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const list = Object.entries(tilFiles).map(([_, mod]) => mod())
    return (await Promise.all(list)).reduce((acc, it) => {
      const category: string = it.__pageData.frontmatter.category
      acc.set(category, [
        ...(acc.get(category) ?? []),
        {
          title: it.__pageData.title,
          url: getUrl(it.__pageData.relativePath),
        },
      ])
      return acc
    }, new Map<string, { title: string; url: string }[]>())
  },
  new Map(),
  { lazy: true }
)
</script>

<template>
  <section>
    <div v-for="[category, list] in categories.entries()" :key="category">
      <h2>
        <component :is="getIcon(category)" class="icon"></component>
        <span>{{ category }}</span>
      </h2>
      <ul>
        <li v-for="til in list.sort((a, b) => a.title.localeCompare(b.title))" :key="til.url">
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
}

h2 {
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 10px;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid var(--c-black);
}

.icon {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  border-bottom: 1px solid #c8c8c8;
  color: var(--link);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

a:hover {
  border-bottom: 2px solid var(--link);
}
</style>
