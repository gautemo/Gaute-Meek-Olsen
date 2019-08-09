<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      You might stumble upon an error if you would like to run a script tag only on a specific component in Vue.
      Let's try to embed a tweet into a component template:
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'vue-script-error.vue'" />Building this, Vue throws the error:
      <i>
        "Templates should only be responsible for mapping the state to the UI.
        Avoid placing tags with side-effects in your templates, such as script, as they will not be parsed."
      </i>
    </section>
    <section>
      This is an easy fix, despite googling internet might send you down a harder path. Just add type=”application/javascript” to your script tag. Fixed.
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'vue-script-correct.vue'" />
    </section>
    <section>
      You could stop reading here. But what if your script contains document.write.
      Your script won't work and throw this error in the console:
      <i>
        "Failed to execute 'write' on 'Document': It isn't possible to write into
        a document from an asynchronously-loaded external script unless it is explicitly opened."
      </i>
      This happens because the document has been fully parsed and closed. Then you can't write to it, at least not how you want to.
    </section>
    <section>
      This can be solved using
      <a href="https://www.npmjs.com/package/postscribe" target="_blank" rel="noopener">postscribe</a>. (see hyperlink for other approaches than NPM install)
      <span
        class="cmd"
      >npm i postscribe --save</span>
      Then in the mounted lifecycle to the Vue component, you can add the script tag like this.
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'vue-script-postscribe.vue'" />Congratulations, you now have embeded a gist in your Vue component!
    </section>
    <Share :url="'https://gaute.app' + $route.path" :text="title" />
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'ServiceWorkerVue',
  data () {
    return {
      title: 'How to Add a Script Tag in a Vue Component'
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
