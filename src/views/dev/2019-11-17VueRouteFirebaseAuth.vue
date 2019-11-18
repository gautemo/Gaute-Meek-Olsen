<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      With Vue Router you might want to guard som paths and redirect users to a signup page if they are not authenticated.
      I will show you how this is done correctly with Firebase Authentication.
    </section>
    <section>
      This article assumes you already have implemented your project with
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a> and
      <a href="https://firebase.google.com/docs/auth" target="_blank" rel="noopener">Firebase Authentication</a>.
    </section>
    <section>
      First, we must mark each route that we want to guard with a meta property called requiresAuth.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-router-guard-firebase1.js"/>
      In this example, the path /signin is allowed for everyone, but /profile should only be for signed-in users.
    </section>
    <section>
      Now we can use the <b>beforeEach</b> guard to check for this property.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-router-guard-firebase2.js"/>
      Now if the currentUser is null or undefined, we should redirect users to the signin path.
      But how do we get currentUser? We can’t use <pre class="code">firebase.auth().currentUser</pre> because on page
      refresh that property has not been set yet before the guard is triggered.
      We will have to use the <pre class="code">onAuthStateChanged</pre> callback somehow.
      Let’s add a method to the firebase object after we initialize the firebase app.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-router-guard-firebase3.js"/>
      This method will return a Promise which resolves currentUser as soon as it is set.
      <pre class="code">onAuthStateChangedwill</pre> trigger the callback immediately with
      either null or the user object if signed in.
      Then we unsubscribe to not listen for further changes.
    </section>
    <section>
      Now we will update our <b>beforeEach</b> guard so that only paths that require authentication await this method.
      <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="vue-router-guard-firebase4.js"/>
    </section>
    <section>
      That’s all. This also simplifies getting the currentUser for components under the guarded routes,
      because we know <pre class="code">firebase.auth().currentUser</pre> is set.
    </section>
    <section>
      For full example check out this
      <a href="https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication" target="_blank" rel="noopener">GitHub repository</a>.
    </section>
    <Share :url="'https://gaute.app' + $route.path" :text="title"/>
  </article>
</template>

<script>
import Share from '@/components/Share.vue'
import Gist from '@/components/Gist.vue'

export default {
  name: 'VueRouteFirebaseAuth',
  data () {
    return {
      title: 'Vue, guard routes with Firebase Authentication'
    }
  },
  components: {
    Share,
    Gist
  }
}
</script>
