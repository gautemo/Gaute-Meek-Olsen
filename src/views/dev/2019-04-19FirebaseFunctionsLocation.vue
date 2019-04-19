<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      Today Firebase Cloud Functions has four availible locations they can run from.
      It's not super important, but it could be smart to have them run close to the location of your Firestore or users for minimizing latency.
      By default the function will run in us-central1, which is Iowa. This is super easy to change by adding
      <span
        class="code"
      >.region('europe-west1')</span> in your code, like this:
      <span class="code block">
        exports.hello = functions.region('europe-west1').https.onRequest((req, res) => {<br/>
        &nbsp;&nbsp;res.send("Hello");<br/>
        });
      </span>
    </section>
    <section>
      If you deploy your function now, you will see it will run from europe-west1.
      As of today possible locations are:
      <ul>
        <li>us-central1 (Iowa)</li>
        <li>us-east1 (South Carolina)</li>
        <li>europe-west1 (Belgium)</li>
        <li>asia-northeast1 (Tokyo)</li>
      </ul>
    </section>
    <Share :url="'https://gaute.app' + $route.path" :text="title"/>
  </article>
</template>

<script>
import Share from '@/components/Share.vue'

export default {
  name: 'NodeExpressCors',
  data () {
    return {
      title: 'Location for Firebase Function'
    }
  },
  components: {
    Share
  }
}
</script>

<style scoped>
.code {
  background: rgb(194, 194, 194);
  border-radius: 2px;
  padding: 5px;
}

.block {
  display: block;
  margin: 15px 0;
  padding: 15px;
}
</style>
