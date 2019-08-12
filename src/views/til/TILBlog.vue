<template>
  <component class="til" :is="comp"></component>
</template>

<script>
import icons from './icons'

const android = [
  {
    title: 'Efficient Bitmaps',
    url: 'android-bitmap-efficient',
    comp: '2019-08-12AndroidBitmapEfficient'
  },
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
    title: 'Dropdown with Searchable Text',
    url: 'html-input-search-dropdown',
    comp: '2019-08-12HTMLInputDropdownSearch'
  },
  {
    title: 'rel=noopener',
    url: 'html-noopener',
    comp: '2019-08-11HTMLNoOpener'
  }
]

const vue = [
  {
    title: 'Break Scoped CSS',
    url: 'vue-break-scoped-css',
    comp: '2019-08-12VueBreakScopedCSS'
  }
]

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
    links: android,
    icon: icons.android
  },
  {
    type: 'CSS',
    links: css,
    icon: icons.css
  },
  {
    type: 'HTML',
    links: html,
    icon: icons.html
  },
  {
    type: 'Security',
    links: security,
    icon: icons.security
  },
  {
    type: 'Vue',
    links: vue,
    icon: icons.vue
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

<style scoped>
.til > :last-child {
  margin-bottom: 40px;
}
</style>
