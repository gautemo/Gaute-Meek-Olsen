import DefaultTheme from 'vitepress/theme' // imports style
import Layout from './Layout.vue'
import ImgWithZoom from '../../components/ImgWithZoom.vue'


export default {
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    app.component('ImgWithZoom', ImgWithZoom)
  },
}