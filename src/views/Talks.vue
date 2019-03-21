<template>
  <div>
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
// symbols 👨‍💻⚡👨‍🏫
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
          text:
            'Firebase is a bunch of tools which helps you build, improve and grow your mobile or web application. Firebase makes it really easy to get started, but it also scales well since it runs in the Google Cloud. In this workshop, we are using hosting, authentication, and Firestore to get our web application working. Since Firebase is our backend, both server and API, we get a lot of functionality in a short time.',
          tech: ['Firebase', 'Web', 'JavaScript', 'NoSQL'],
          color: '#FFA000'
        },
        {
          img:
            'https://66.media.tumblr.com/32e6864d3184fcb13ba1a14e576caecc/tumblr_pinzimXE8w1xfbgtko1_1280.png',
          header: 'Intro to TypeScript',
          headerShort: 'Intro to TypeScript',
          type: {
            text: 'Presentation & live coding',
            symbol: '👨‍🏫'
          },
          text:
            'JavaScript can be time consuming when the project get large, because of readability and error detection. This is where TypeScript can help. TypeScript is JavaScript that scales, which provides you with types and new features. At the end your TypeScript file will be compiled into a JavaScript file you can use as normal.',
          tech: ['TypeScript'],
          color: '#178fcf'
        },
        {
          img:
            'https://66.media.tumblr.com/154119852d73f0fc2d2978805f955b4c/tumblr_pmoa38Lpj81xfbgtko1_540.png',
          header: 'Updating Your CSS Skills',
          headerShort: 'Updating Your CSS Skills',
          type: {
            text: 'Live coding',
            symbol: '👨‍🏫'
          },
          text:
            'CSS are adding new modules from time to time. This talk will give you insight and show you how to use three of the new ones. I will demonstrate CSS variables, Flex and Grid.',
          tech: ['CSS'],
          color: '#ef1684'
        },
        {
          img:
            'https://66.media.tumblr.com/08adfe03c280ad4fb8388fecce8b47c0/tumblr_pm5t2evTEr1xfbgtko1_1280.png',
          header: 'Getting Started with Vue.js & using it in SPFx',
          headerShort: 'Vue.js & SPFx',
          type: {
            text: 'Live coding',
            symbol: '👨‍🏫'
          },
          text:
            'Vue.js is a great web development framework, I will show you how to master Vue.js. After you have gotten to know Vue, I will show you how to use it in your SharePoint site with SharePoint Framework (SPFx). We will build a webpart retrieving links from a SharePoint list and showing them in a Vue component with realtime search.',
          tech: ['Vue.js', 'SPFx', 'SharePoint'],
          color: '#2f5673'
        },
        {
          img:
            'https://66.media.tumblr.com/4be37cb10e44b78590f3596f61c37d3c/tumblr_poqhr4S2Zh1xfbgtko1_1280.png',
          header: 'An Intro & Comparisons of Serverless Functions',
          headerShort: 'Serverless Functions',
          type: {
            text: 'Presentation & live coding',
            symbol: '👨‍🏫'
          },
          text: `Serverless functions are functions you write and deploy to a cloud provider.
            In this presentation I give an overview of what a serverless function is, what they can do and give an comparison
            of the three big cloud providers Amazon with AWS Lambda, Microsoft with Azure Functions and Google with Firebase Functions.
            Afterwards I give a demo of how you can implement firebase functions to save your project.`,
          tech: ['Fireabase Functions', 'Azure Functions', 'AWS Lambda'],
          color: '#9f7fdc'
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
.talk-header {
  text-align: center;
}
.talk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  align-items: center;
  padding: 30px 8vw;
}
.talk-grid::before {
  background: url("https://66.media.tumblr.com/8492d5ff827729bcf2072af09380fa13/tumblr_pibwenYhi51xfbgtko1_1280.jpg");
  background-size: cover;
  opacity: 0.3;
  filter: blur(2px);
}

@media only screen and (max-width: 768px) {
  .talk-header h1 {
    display: none;
  }

  .talk-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
