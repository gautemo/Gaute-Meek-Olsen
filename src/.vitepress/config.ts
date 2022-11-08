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
    [
      'script',
      {
        src: 'https://cdn.counter.dev/script.js',
        'data-id': '7927cc40-3229-4986-b981-0e1e6c4a93c6',
        'data-utcoffset': '1',
        async: '',
      },
    ],
  ],
  appearance: false,
  cleanUrls: 'without-subfolders',
  outDir: '../dist',
})
