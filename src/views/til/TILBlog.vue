<template>
  <component class="til" :is="comp" :articleId="articleId"></component>
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
    title: 'Shadow on Shapes',
    url: 'css-shadow-on-shapes',
    comp: '2020-03-08CSSBoxShadowOnShapes'
  },
  {
    title: 'Empty selector',
    url: 'css-empty',
    comp: '2019-08-08CSSEmpty'
  },
  {
    title: 'Import files based on condition',
    url: 'css-import-condition',
    comp: '2019-07-10CSSImport'
  },
  {
    title: 'Responsive with CSS Grid auto-fill',
    url: 'css-grid-auto-fill',
    comp: '2019-11-17CSSGridAuto'
  },
  {
    title: 'Fix input width and padding issue',
    url: 'css-input-margin-issue',
    comp: '2019-11-17CSSInputWidthPaddingIssue'
  },
  {
    title: `Above Previous Element's Background`,
    url: 'css-above-element-background',
    comp: '2020-03-08CSSAboveEffect'
  },
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
  },
  {
    title: 'Active router link CSS class',
    url: 'vue-router-link-active',
    comp: '2019-11-17VueActiveRoute'
  },
  {
    title: 'Fix PWA routing start url',
    url: 'vue-pwa-start-url',
    comp: '2019-11-17VuePWAStartUrl'
  }
]

const security = [
  {
    title: 'Disallow npm to run other scripts',
    url: 'security-npm-install-scripts',
    comp: '2019-11-17SecurityNPMScripts'
  },
  {
    title: 'CSP (web)',
    url: 'security-csp',
    comp: '2019-08-08SecurityCSP'
  }
]

const js = [
  {
    title: 'catch errors with async await',
    url: 'js-catch-await',
    comp: '2019-08-13JSAwaitCatch'
  },
  {
    title: 'Set to array',
    url: 'js-set-to-array',
    comp: '2019-11-17JSSetToArray'
  },
  {
    title: 'Formated clock',
    url: 'js-formated-clock',
    devtoId: '298291',
  },
  {
    title: 'Formatting large numbers',
    url: 'js-formated-large-numbers',
    devtoId: '306623',
  },
  {
    title: 'How to get JSON.stringify formatted',
    url: 'js-formated-json-stringify',
    devtoId: '328264',
  }
]

const git = [
  {
    title: 'Undo all local changes',
    url: 'git-undo-locally',
    comp: '2019-09-20GitUndoAllLocally'
  },
  {
    title: 'Ignore already commited files',
    url: 'git-ignore-commited',
    comp: '2019-11-18GitFixCommitedIgnoreFiles'
  },
  {
    title: 'Connect folder to repository',
    url: 'git-folder-to-repo',
    comp: '2019-11-17GitFolderToRepo'
  },
  {
    title: 'Stash local changes before pull',
    url: 'git-stash-before-pull',
    comp: '2019-12-08GitStashBeforePull'
  },
  {
    title: 'Create a Branch from a Commit',
    url: 'git-branch-from-commit',
    comp: '2020-03-08GitBranchFromCommit'
  },
  {
    title: 'git commit -a',
    url: 'git-commit-a',
    devtoId: '293947',
  },
  {
    title: 'Check for changes with .ps',
    url: 'git-changes-ps',
    comp: '2019-11-17GitScriptCheckChanges'
  }
]

const firebase = [
  {
    title: 'Firestore update rate limit',
    url: 'firestore-rate-limit',
    comp: '2019-11-18FirebaseFirestoreRateLimit'
  },
  {
    title: 'Firestore, get collection with async/await',
    url: 'firestore-get-all-in-collection',
    devtoId: '283822',
  }
]

const csharp = [
  {
    title: 'Email validation',
    url: 'csharp-email-validation',
    comp: '2019-12-07CsharpEmailValidation'
  },
  {
    title: 'Split List & Arrays',
    url: 'csharp-split-arrays',
    comp: '2019-12-07CsharpChunks'
  },
  {
    title: 'Maximum Paralell Tasks',
    url: 'csharp-max-paralell-tasks',
    comp: '2019-12-30CsharpParalellMaxAtSameTime'
  }
]

const kotlin = [
  {
    title: 'Improve readability for test fun with backticks',
    url: 'kotlin-test-fun-backticks',
    comp: '2019-12-07KotlinTestFunBackticks'
  }
]

const til = [
  {
    type: 'Android',
    links: android,
    icon: icons.android
  },
  {
    type: 'C#',
    links: csharp,
    icon: icons.csharp
  },
  {
    type: 'CSS',
    links: css,
    icon: icons.css
  },
  {
    type: 'Firebase',
    links: firebase,
    icon: icons.firebase
  },
  {
    type: 'Git',
    links: git,
    icon: icons.git
  },
  {
    type: 'HTML',
    links: html,
    icon: icons.html
  },
  {
    type: 'JavaScript',
    links: js,
    icon: icons.js
  },
  {
    type: 'Kotlin',
    links: kotlin,
    icon: icons.kotlin
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
    if(!blog){
      this.comp = () => import(`@/views/NotFound.vue`)
    }else if(blog.devtoId){
      this.comp = () => import(`@/views/DevTo.vue`)
      this.articleId = blog.devtoId
    }else{
      this.comp = () => import(`./${blog.comp}.vue`)
    }
  },
  data: () => ({
    articleId: ''
  })
}
</script>

<style scoped>
.til > :last-child {
  margin-bottom: 40px;
}
</style>
