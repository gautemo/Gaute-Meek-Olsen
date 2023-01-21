---
title: How I created my homepage with Vitepress
date: 2023-01-15
coverImgExtension: png
tags: [Vite, Vue]
description: How I made the version 2 of my portfolio page with Vitepress.
---

You are now on my portfolio page, but this is version 2. You can see my previous site on [v1.gaute.dev/](https://v1.gaute.dev/).

## Motivation

The first version was a Vue Singel Page Application (SPA). And there are mainly two points I wanted to improve.

1. A better Developer Experience (DX)
2. A more performant site

### DX

I'm mostly thinking about writing content here. Writing blog articles directly in HTML isn't that nice. I found a way to use [dev.to as my CMS](/dev-blog/developer-blog-with-devto), which helped a bit. But there is still room for improvement.

### Performance

A SPA often loads all the content on a page visit unless you have thought about code splitting. Also, browsers have to render all the HTML itself before it can be viewed.

## Vitepress to the rescue

[Vitepress](https://vitepress.vuejs.org/) is the next version of Vuepress but built on top of [Vite](https://vitejs.dev/) with all its benefits. It's a Static Site Generator (SSG) framework where you write your content in markdown and can jump into Vue component anytime you need to create something more functional than just text. Of course, I'm sticking to Vue.

### How it works

Vitepress is using folder structure to create the routes. To get started you need to create an npm project with a folder for your pages (let's call it `pages`) and this package.json file.

```json
{
  "scripts": {
    "dev": "vitepress dev pages",
    "build": "vue-tsc && vitepress build pages"
  },
  "dependencies": {
    "vue": "^3.2.45",
    "vitepress": "1.0.0-alpha.35"
  }
}
```

Now you can create markdown files in the `pages` folder and you are ready to run `npm run dev`. The folder structure will be your routes and the file `index.md` is the folder root `/`.

```
├─ pages
|  ├─ dev-blog
|  |  ├─ vitepress-version.md
|  |  └─ vue-3-beta.md
|  ├─ index.md
|  └─ projects.md
└─ package.json
```

This example serves the routes `/`, `/projects`, `/dev-blog/vitepress-version`, and `/dev-blog/vue-3-beta`.

## Customize

<details>
  <summary>TypeScript setup</summary>

Be sure to start with `tsconfig.json` on the root, which looks something like this.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "vitepress-env.d.ts",
    "src/.vitepress/**/*.ts",
    "src/.vitepress/**/*.vue"
  ]
}
```

And a `vitepress-env.d.ts` file on the root as well.

```ts
/// <reference types="vitepress/client" />
```

</details>

You can now create your config in `pages/.vitepress/config.ts`. `defineConfig` provides nice autocomplete so it makes sense what you put there, but it can look something like this.

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My title',
  description: 'Description of my website',
  lang: 'en-US',
})
```

If you want your own layout around the content of your markdown files you can add `pages/.vitepress/theme/index.ts` and `pages/.vitepress/theme/Layout.vue`.

```ts
import 'vitepress/dist/client/theme-default/styles/fonts.css'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import Layout from './Layout.vue'
import { Theme } from 'vitepress'

const theme: Theme = {
  Layout,
}

export default theme
```

```vue
<template>
  <header>My vitepress site</header>
  <Content />
  <footer>By Gaute</footer>
</template>
```

`<Content />` will now be populated with your markdown content and you can create e.g. a header and footer that exists on all pages. Notice how I imported all the CSS to keep all the nice Vitepress styles, most important for the code snippets.

## Vue components

The beauty is that you can jump into Vue components anytime to add more functionality to the page. Either just import the component and use it.

```md
<script setup>
  import MyButton from './components/MyButton.vue'
</script>

<MyButton />
```

Or you can add the components globally to be used anywhere by editing `/pages/.vitepress/theme/index.ts` with `enhanceApp`.

```ts
import MyButton from './components/MyButton.vue'

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
  },
}

export default theme
```

```md
<MyButton />
```

## List navigation URLs

Since it's built on top of Vite we can just use `import.meta.glob`.

```vue
<script setup lang="ts">
import { PageData } from 'vitepress'
const pages = import.meta.glob<PageData>('/dev-blog/*.md', { import: '__pageData', eager: true })
</script>

<template>
  <ul>
    <li v-for="page in pages" :key="til.url">
      <a :href="til.url">{{ til.title }}</a>
    </li>
  </ul>
</template>
```

## Conclusion

That's mostly it. Now GitHub is my CMS. And I have a nice site with the ease of writing in markdown and expressing myself with Vue when I want to. A cherry on top is the nice code snippets I can have in my articles that just work and looks nice ✨.

You can find all code on [github.com/gautemo/Gaute-Meek-Olsen](https://github.com/gautemo/Gaute-Meek-Olsen).

Other options I probably also would have liked are [Astro](https://astro.build/) with Vue or [Nuxt Content](https://content.nuxtjs.org/), but I'm happy with my choice for now.
