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
const tilFiles = import.meta.glob<PageData>('../*.md', { import: '__pageData', eager: true })

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

const categories = Object.values(tilFiles).reduce((acc, it) => {
  const category: string = it.frontmatter.category
  acc.set(category, [
    ...(acc.get(category) ?? []),
    {
      title: it.title,
      url: getUrl(it.relativePath),
    },
  ])
  return acc
}, new Map<string, { title: string; url: string }[]>())
</script>

<template>
  <section id="tils">
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
  border-top: none;
  border-bottom: 1px solid var(--vp-c-divider-light);
  margin: 0.5rem 0;
  padding: 5px 0;
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
</style>
