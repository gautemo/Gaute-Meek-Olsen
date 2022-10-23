import 'vitepress/dist/client/theme-default/styles/fonts.css'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
import Layout from './Layout.vue'
import ImgWithZoom from '../../components/ImgWithZoom.vue'
import { Theme } from 'vitepress'

const theme: Theme = {
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    app.component('ImgWithZoom', ImgWithZoom)
  },
}

export default theme
