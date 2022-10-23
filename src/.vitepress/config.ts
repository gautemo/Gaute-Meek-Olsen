import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gaute Meek Olsen',
  description: 'Portofolio for Gaute Meek Olsen. This is the place you can find my blogs, projects, and more.',
  lang: 'en-US',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-light.png',
      },
    ],
    [
      'meta',
      {
        name: 'color-scheme',
        content: 'dark light',
      },
    ],
  ],
  cleanUrls: 'without-subfolders',
  outDir: '../dist',
})
