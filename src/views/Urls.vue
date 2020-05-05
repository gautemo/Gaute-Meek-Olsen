<template>
  <div>
      <h1>Woah! You found my secret page that I use to keep track of the websites i host</h1>
      <article>
        <a v-for="url in sortedUrls" :key="url" :href="url" target="_blank" rel="noopener">{{url}}</a>
      </article>
  </div>
</template>

<script>
export default {
  data: () => ({
    urls: [
      'https://gaute.dev',
      'https://gaute.app',
      'https://kuizzi.web.app',
      'https://es-intro.netlify.app',
      'https://covid-19-timeline.netlify.app',
      'https://weather-oslo.netlify.app',
      'https://ordentlig-radio-app.netlify.app',
      'https://camera-timer-privacy-policy.netlify.app',
      'https://codewars-leaderboard-1.web.app',
      'https://planning-poker-w.web.app',
      'https://gmo-receipt-app.web.app',
      'https://fake-movie-database-api.herokuapp.com',
      'https://codewars-leaderboard-2s.web.app',
      'https://fir-image-chat.web.app',
      'https://calc-fast-81457322.web.app',
      'https://fama-social-feed.web.app',
      'https://fir-chat-8111c.web.app',
      'https://vue-routes-authentication.web.app',
      'https://gautemo.github.io/blog-devto-backend',
      'https://gautemo.github.io/web-components-example',
      'https://calcfast.app',
      'https://calcfast.app/privacy-policy.html',
    ]
  }),
  computed: {
    sortedUrls(){ return this.urls.sort() }
  }
}
</script>

<style scoped>
div{
  margin: 15px 8vw;
}

h1{
  max-width: 70%;
  animation: peek 7s infinite;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  background: linear-gradient(to right, var(--orange), var(--yellow), var(--green), var(--blue));
  padding:  5px 15px;
  font-size: 1.3em;
  letter-spacing: 2px;
  border-radius: 4px;
}

article{
  margin-top: 30px;
}

a{
  display: block;
  width: fit-content;
  margin: 15px 0;
}

a:last-child {
    margin-bottom: 70px;
}
</style>