import { defineConfig, HeadConfig } from 'vitepress'
import { getCoverImg, getKey } from '../utils/blogUtils'

export default defineConfig({
  title: 'Gaute Meek Olsen',
  description: 'Portfolio for Gaute Meek Olsen. This is the place you can find my blogs, projects, and more.',
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
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'Gaute Meek Olsen',
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'Gaute Meek Olsen',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'summary',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:creator',
        content: '@GauteMeekOlsen',
      },
    ],
  ],
  appearance: false,
  cleanUrls: 'without-subfolders',
  outDir: '../dist',
  transformHead(ctx) {
    const addHeads: HeadConfig[] = [
      [
        'link',
        {
          rel: 'canonical',
          href: `https://gaute.dev/${ctx.pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`,
        },
      ],
      [
        'meta',
        {
          property: 'og:url',
          content: `https://gaute.dev/${ctx.pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`,
        },
      ],
      [
        'meta',
        {
          property: 'og:title',
          content: ctx.pageData.title,
        },
      ],
      [
        'meta',
        {
          property: 'og:description',
          content: ctx.pageData.description,
        },
      ],
    ]
    if (/(dev-blog|today-i-learned)\//.test(ctx.pageData.relativePath)) {
      addHeads.push([
        'meta',
        {
          property: 'og:type',
          content: 'article',
        },
      ])
    } else {
      addHeads.push([
        'meta',
        {
          property: 'og:type',
          content: 'website',
        },
      ])
    }
    if (/dev-blog\//.test(ctx.pageData.relativePath) && !ctx.pageData.frontmatter.hideCoverImg) {
      addHeads.push([
        'meta',
        {
          property: 'og:image',
          content: `https://gaute.dev${getCoverImg(
            getKey(ctx.pageData.relativePath),
            ctx.pageData.frontmatter.coverImgExtension
          )}`,
        },
      ])
      addHeads.push([
        'meta',
        {
          property: 'twitter:image',
          content: `https://gaute.dev${getCoverImg(
            getKey(ctx.pageData.relativePath),
            ctx.pageData.frontmatter.coverImgExtension
          )}`,
        },
      ])
    } else {
      addHeads.push([
        'meta',
        {
          property: 'og:image',
          content: 'https://gaute.dev/images/og_image.jpg',
        },
      ])
      addHeads.push([
        'meta',
        {
          property: 'twitter:image',
          content: 'https://gaute.dev/images/og_image.jpg',
        },
      ])
    }
    return addHeads
  },
})
