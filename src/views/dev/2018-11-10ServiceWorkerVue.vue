<template>
  <article>
      <h1>{{title}}</h1>
      <section>
        Creating a Progressive Web App (PWA) is painlessly simple with the Vue CLI.
        You can use the default set up, by either selecting the feature 'Progressive Web App (PWA) Support' during project creation.
        <span class="cmd">vue create [project name]</span>
        Or in an Already Created Project by entering <span class="cmd">vue add @vue/pwa</span> into the terminal.
        And there you go, you have a PWA.
      </section>
      <section>
          But the default service worker you got now uses the Cache First or Stale-While-Revalidate strategy.
          But often you would like the Network First strategy, at least for some files.
          But this depends on your application and how it's used.
          Read more about the <a href="https://developers.google.com/web/tools/workbox/modules/workbox-strategies" target="_blank">cache strategies here</a>.
          I'll show you how to customize the service worker, it's really simple.
      </section>
      <section>
          1. Create a <span class="file">vue.config.js</span> file next to the package.json file.
          <p>Add this code to your file.</p>
          <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'vue.config.js'" />
      </section>
      <section>
          2. Create a <span class="file">sw.js</span> file in your src folder.
          <p>Your file could look something like this, see comments for description</p>
          <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'sw.js'"/>
      </section>
      <section>
          3. Now you can register your sw.js file and listen for events in the registerServiceWorker.js file created by the vue cli when you initiated a PWA project.
          <p>The file should be in the src folder. Add the events you need.</p>
          <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'registerServiceWorker.js'" />
      </section>
      <Share :url="'https://gaute.app' + $route.path" :text="title"/>
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'ServiceWorkerVue',
  data () {
    return {
      title: 'Setting up a Custom Service Worker with the Vue CLI'
    }
  },
  components: {
    Gist,
    Share
  }
}
</script>

<style scoped>

</style>
