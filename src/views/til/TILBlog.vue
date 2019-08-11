<template>
  <component :is="comp"></component>
</template>

<script>
const android = [
  {
    title: 'Fragment Transactions with Kotlin',
    url: 'android-transaction-kotlin',
    comp: '2019-08-11AndroidKotlinTransaction'
  },
  {
    title: 'Button with image and text',
    url: 'android-button-img-text',
    comp: '2019-08-06AndroidButtonImgText'
  }
]

const css = [
  {
    title: 'Empty selector',
    url: 'css-empty',
    comp: '2019-08-08CSSEmpty'
  },
  {
    title: 'Import files based on condition',
    url: 'css-import-condition',
    comp: '2019-07-10CSSImport'
  }
]

const html = [
  {
    title: 'rel=noopener',
    url: 'html-noopener',
    comp: '2019-08-11HTMLNoOpener'
  }
]

const vue = []

const security = [
  {
    title: 'CSP (web)',
    url: 'security-csp',
    comp: '2019-08-08SecurityCSP'
  }
]

const til = [
  {
    type: 'Android',
    links: android
  },
  {
    type: 'CSS',
    links: css
  },
  {
    type: 'HTML',
    links: html
  },
  {
    type: 'Vue',
    links: vue
  },
  {
    type: 'Security',
    links: security
  }
]

export { til }

const getComp = url => {
  for (const type of til) {
    const blog = type.links.find(b => b.url === url)
    if (blog) {
      return blog
    }
  }
}

export default {
  name: 'TILBlog',
  created () {
    const blog = getComp(this.$route.params.url)
    if (blog) {
      this.comp = () => import(`./${blog.comp}.vue`)
    } else {
      this.comp = () => import(`@/views/NotFound.vue`)
    }
  }
}
</script>
