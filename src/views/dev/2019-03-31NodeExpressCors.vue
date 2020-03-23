<template>
  <article>
      <h1>{{title}}</h1>
      <section>
        If you are serving your own Node Express server, and calling your API from JavaScript,
        you might get this error.
        <img src="https://66.media.tumblr.com/96518d312f520ddfa5d747441b771e1a/tumblr_pp8fy5wjs91xfbgtko1_1280.png" />
        This happens because of security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.
      </section>
      <section>
          There is an easy fix for this. Open your project in the terminal.
          <span class="cmd">npm i cors –save</span>
          Then add this to your node JavaScript file.
          <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'node-express-cors.js'" />
      </section>
      <section>
          This has enabled CORS for all requests on your node express server. You can now refresh your client side page.
      </section>
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'

export default {
  name: 'NodeExpressCors',
  data () {
    return {
      title: 'How to allow CORS request with Node Express'
    }
  },
  components: {
    Gist,
  }
}
</script>

<style scoped>

</style>
