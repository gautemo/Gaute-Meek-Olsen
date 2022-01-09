import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/layout.css'
import 'vitepress/dist/client/theme-default/styles/code.css'
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css'
import 'vitepress/dist/client/theme-default/styles/sidebar-links.css'
import Layout from './Layout.vue'
import ImgWithZoom from '../../components/ImgWithZoom.vue'

export default {
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    app.component('ImgWithZoom', ImgWithZoom)
  },
}
