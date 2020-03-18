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
            'https://66.media.tumblr.com/6b2bce8e582baa37e83ed4f2ab8719b6/ca1ce001af8b1a74-4e/s1280x1920/01ffab71f8847c8f771a979ef2f96577d5011859.png',
          header: `Why I choose Vue.js`,
          headerShort: `Why I choose Vue.js`,
          type: {
            text: 'Lightning talk',
            symbol: '⚡'
          },
          text: `There exists a lot of great web development frameworks. These are my main reasons for choosing Vue over the most popular one, React.
          
          Held at Tech Talks 2020.`,
          github: 'https://github.com/gautemo/frontend-framework-compare',
          tech: ['Web', 'Vue.js', 'React'],
          color: '#42b883'
        },
        {
          img:
            'https://66.media.tumblr.com/897b0d2a83c4d90ad73f0dcf6721e678/tumblr_pibxatlDCU1xfbgtko1_r2_1280.png',
          header: `What is Firebase and it's relation to Google Cloud`,
          headerShort: `What is Firebase`,
          type: {
            text: 'Presentation',
            symbol: '👨‍🏫'
          },
          text:
`The definition of Firebase is "Firebase is Google’s mobile application development platform that helps you build, improve, and grow your app."
But what does this mean? Firebase is multiple products and services hosted in the cloud and does that we don't have to write backend code.
We will take a look at how Firebase offers database, authentication, analytics, file storage, push notifications, machine learning and a lot more directly on iOS, Android and web applications.

Every Firebase project is also a Google Cloud Platform project. I'll explain the relation and how they overlap.
`,
          github: 'https://github.com/gautemo/fama',
          tech: ['Firebase', 'Web', 'Android', 'iOS'],
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
          github: 'https://github.com/gautemo/TypeScript-Intro',
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
            'https://66.media.tumblr.com/dc5a882a7f6480055a0b9e559e743444/tumblr_prihfxYstC1xfbgtko1_400.png',
          header: `What's new in ES10`,
          headerShort: 'New in ES10',
          type: {
            text: 'Lightning talk & live coding',
            symbol: '⚡'
          },
          text:
            `June 2019 a new version of JavaScript was released. Let's look at flat & flatMap, fromEntries, Optional catch binding, trimStart & trimEnd in ES10/ES2019`,
          github: 'https://github.com/gautemo/ES-Intro/tree/master/es10',
          tech: ['JavaScript'],
          color: '#efc034'
        },
        {
          img:
            'https://66.media.tumblr.com/1718a827b9e03d0beba0a14aecf7cc4e/3128718511b46d6d-9c/s500x750/b5f114961c9ec4a193f611b3776d5bf8a2d115c1.png',
          header: `Getting started with Android Development`,
          headerShort: 'Getting started with Android',
          type: {
            text: 'Live coding',
            symbol: '👨‍🏫'
          },
          text:
            `Let's go through:
            -Android Studio
            -Create a Android project
            -Activity
            -Fragment
            -App lifecycle
            -Layouts
            -Communicate and manipulate layout
            `,
          github: 'https://github.com/gautemo/ES-Intro/tree/master/es10',
          resources: [{ name: 'Codelab; First App', link: 'https://codelabs.developers.google.com/codelabs/build-your-first-android-app/#0' }, { name: 'Codelab; Fundamentals', link: 'https://codelabs.developers.google.com/codelabs/android-training-welcome/#0' }],
          tech: ['Android', 'Java'],
          color: '#3ddc84'
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
          github: 'https://github.com/gautemo/links-webpart-vue-spfx',
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
          github: 'https://github.com/gautemo/firebase-image-chat',
          tech: ['Fireabase Functions', 'Azure Functions', 'AWS Lambda'],
          color: '#9f7fdc'
        },
        {
          img:
            'https://66.media.tumblr.com/716eb9bf63bd7f6946e68dfc7eb43209/tumblr_pmde8c7tui1xfbgtko1_500.png',
          header: 'CSS now has variables!',
          headerShort: 'CSS now has variables!',
          type: {
            text: 'Lightning talk & live coding',
            symbol: '⚡'
          },
          text: `Preprocessors such as Sass or Less is no longer necessary to use variables in CSS. Let me show you how to use them.
          Variables make you write better and less CSS. Bonus is that they can be altered through JavaScript, making cool functionality very easy.`,
          github: 'https://github.com/gautemo/css-variables-presentation',
          tech: ['CSS'],
          color: '#50aec0'
        },
        {
          img:
            'https://66.media.tumblr.com/dc5a882a7f6480055a0b9e559e743444/tumblr_prihfxYstC1xfbgtko1_400.png',
          header: 'New Things in JavaScript',
          headerShort: 'New Things in JavaScript',
          type: {
            text: 'Presentation & live coding',
            symbol: '👨‍🏫'
          },
          text: `JavaScript is the most used programming language! It's coming with improvements and features which makes life easier each year.
          I'll go through what's new in ES6, ES7, and ES8. This is for you that wants to improve in JavaScript and keep updated with writing modern JavaScript.
          Lean back and watch live coding and code samples, this talk is for the ones who have done a little JavaScript and the more experienced 
          that doesn't have the latest syntax and functionality in their fingertips yet.`,
          github: 'https://github.com/gautemo/ES-Intro',
          slides: 'https://es-intro.netlify.com/',
          tech: ['JavaScript'],
          color: '#efc034'
        },
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
          github: 'https://github.com/gautemo/firebase-chat',
          tech: ['Firebase', 'Web', 'JavaScript', 'NoSQL'],
          color: '#FFA000'
        },
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
