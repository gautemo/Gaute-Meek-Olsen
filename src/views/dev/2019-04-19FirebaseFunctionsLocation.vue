<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      Today Cloud Functions for Firebase has four availible locations they can run from.
      It's not super important, but it could be smart to have them run close to the location of your Firestore or users for minimizing latency.
      By default the function will run in us-central1, which is Iowa. This is super easy to change by adding
      <pre class="code">.region('europe-west1')</pre>
      in your code, like this:
      <pre class="code block">
        exports.hello = functions.region('europe-west1').https.onRequest((req, res) => {
        &nbsp;&nbsp;res.send("Hello");
        });
      </pre>
    </section>
    <section>
      If you deploy your function now, you will see it will run from europe-west1.
      As of today possible locations are:
      <ul>
        <li>us-central1 (Iowa)</li>
        <li>us-east1 (South Carolina)</li>
        <li>us-east4 (Northern Virginia)</li>
        <li>europe-west1 (Belgium)</li>
        <li>europe-west2 (London)</li>
        <li>asia-east2 (Hong Kong)</li>
        <li>asia-northeast1 (Tokyo)</li>
      </ul>
    </section>
    <a href="https://firebase.google.com/docs/functions/locations" target="_blank" rel="noopener">Updated docs</a>
  </article>
</template>

<script>
export default {
  name: 'NodeExpressCors',
  data () {
    return {
      title: 'Location for Cloud Functions for Firebase'
    }
  }
}
</script>
