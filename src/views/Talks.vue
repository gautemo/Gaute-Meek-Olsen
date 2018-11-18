<template>
  <div class="talk-container">
    <div class="talk-header">
      <h1>Talks</h1>
      <h3>Presentations, workshops and lightning talks I have given and are ready to give again</h3>
    </div>
    <div class="talk-grid cover">
      <Talk v-for="t in talks" v-bind:key="t.header" :t="t"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// symbols 👨‍💻⚡👨‍🏫 or 💁‍♂️
import Talk from '@/components/Talk.vue'

export default {
  name: 'talks',
  data () {
    return {
      talks: [
        {
          img:
            'https://66.media.tumblr.com/897b0d2a83c4d90ad73f0dcf6721e678/tumblr_pibxatlDCU1xfbgtko1_r2_1280.png',
          header: 'Serverless with Firebase in 1 2 3',
          headerShort: 'Serverless with Firebase',
          type: {
            text: 'Workshop',
            symbol: '👨‍💻'
          },
          text: 'Firebase is a bunch of tools which helps you build, improve and grow your mobile or web application. Firebase makes it really easy to get started, but it also scales well since it runs in the Google Cloud. In this workshop, we are using hosting, authentication, and Firestore to get our web application working. Since Firebase is our backend, both server and API, we get a lot of functionality in a short time.',
          tech: ['Firebase', 'Web', 'JavaScript', 'NoSQL'],
          color: '#FFA000'
        }
      ]
    }
  },
  components: {
    Talk
  }
}
</script>

<style scoped>
.talk-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.talk-header{
  margin: 0 15px;
}
.talk-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  justify-items: center;
  align-items: center;
  padding: 25px 150px;
}
.talk-grid::before {
  background: url("https://66.media.tumblr.com/8492d5ff827729bcf2072af09380fa13/tumblr_pibwenYhi51xfbgtko1_1280.jpg");
  background-size: cover;
  opacity: 0.3;
  filter: blur(2px);
}

@media only screen and (max-width: 768px) {
  .talk-grid {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
  .talk-header h1{
    display: none;
  }
}
</style>
