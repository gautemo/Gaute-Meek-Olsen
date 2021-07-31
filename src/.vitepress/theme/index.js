import DefaultTheme from 'vitepress/theme' // imports style
import Layout from './Layout.vue'

export default {
  Layout,
  NotFound: () => 'custom 404',
}