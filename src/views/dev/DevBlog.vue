<template>
  <component :is="comp"></component>
</template>

<script>
const blogs = [
  {
    img:
      'https://66.media.tumblr.com/6b2bce8e582baa37e83ed4f2ab8719b6/20f1e5748949b716-89/s1280x1920/fc25b69fad24bc2eaa3455984eaa99c79bfdb5df.png',
    header: 'Why I prefer Vue over React',
    text: `There exists a lot of great web development frameworks. These are my main reasons for choosing Vue over the most popular one, React.`,
    tags: ['Vue', 'React'],
    url: 'why-i-prefer-vue-over-react',
    comp: '2020-02-13WhyIPreferVueOverReact'
  },
  {
    img:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--soDtXerg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1aipjfyajo1fhuj3gyl5.PNG',
    header: 'Getting started with GitHub Actions - CI/CD Firebase deploy',
    text: `GitHub Actions are used to automatically run a pipeline on a repository. Uses cases can be to run tests on your code, build your application and/or deploy your application. Let's build and deploy to Firebase`,
    tags: ['GitHub', 'Firebase', 'CI/CD'],
    url: 'github-actions-firebase-cicd',
    comp: '2019-12-08GitHubActionsFirebaseCICD'
  },
  {
    img:
      'https://66.media.tumblr.com/9a998ff243d9022782ac03594f88a5bf/tumblr_pidz17wiDQ1xfbgtko1_1280.png',
    header: 'Fieldvalue for Firestore',
    text: `Leverage the Fieldvalue in Firestore when incrementing fields, altering arrays, using the server time or deleting fields.`,
    tags: ['Firebase', 'Firestore'],
    url: 'firestore-fieldvalue',
    comp: '2019-11-17FirestoreFieldvalue'
  },
  {
    img:
      'https://66.media.tumblr.com/3bf9461a9f9de39fc26809b8858606bc/e46b6576cf3caf57-97/s1280x1920/69487601e88f65af49cbd5efdcf8c302d20e9866.png',
    header: 'Vue, guard routes with Firebase Authentication',
    text: `With Vue Router you might want to guard som paths and redirect users to a signup page if they are not authenticated.`,
    tags: ['Vue', 'Firebase'],
    url: 'vue-router-firebase-auth',
    comp: '2019-11-17VueRouteFirebaseAuth'
  },
  {
    img:
      'https://66.media.tumblr.com/32e6864d3184fcb13ba1a14e576caecc/tumblr_pinzimXE8w1xfbgtko1_1280.png',
    header: 'Intro to TypeScript',
    text: `Let's learn the strict syntactical superset of JavaScript called TypeScript. Also reffered to as JavaScript that scales.`,
    tags: ['TypeScript'],
    url: 'intro-typescript',
    comp: '2019-06-28IntroTypeScript'
  },
  {
    img:
      'https://66.media.tumblr.com/299b3d8067275b52073d566375b5af2c/tumblr_pt3vtdTq6w1xfbgtko1_r1_1280.png',
    header: 'Hosting your website',
    text: 'Hosting your website is super easy through Firebase or Netlify.',
    tags: ['Firebase', 'Netlify'],
    url: 'hosting-website',
    comp: '2019-06-14HostingWebsite'
  },
  {
    img:
      'https://66.media.tumblr.com/385a3a08848e224fd77bec181cd0a07e/tumblr_pq7a6hgjFO1xfbgtko1_1280.png',
    header: 'Location for Cloud Functions for Firebase',
    text:
      'Deciding the location where your Cloud Functions for Firebase run is easily configurable from your code.',
    tags: ['Firebase', 'Cloud Functions'],
    url: 'location-firebase-function',
    comp: '2019-04-19FirebaseFunctionsLocation'
  },
  {
    img:
      'https://66.media.tumblr.com/5dfac99b3d14ad94f293979842f0c84d/tumblr_pp8gq8hjCf1xfbgtko1_400.png',
    header: 'How to allow CORS request with Node Express',
    text:
      'If your are fetching your own API from a Node Express server, this is how to fix CORS denial.',
    tags: ['Node', 'Express', 'Cors'],
    url: 'node-express-cors',
    comp: '2019-03-31NodeExpressCors'
  },
  {
    img:
      'https://66.media.tumblr.com/716eb9bf63bd7f6946e68dfc7eb43209/tumblr_pmde8c7tui1xfbgtko1_500.png',
    header: 'CSS Variables',
    text:
      'Introducing CSS Variables. Makes you write cleaner and less CSS, makes it easier for changes later and they are controlable from JavaScript.',
    tags: ['CSS'],
    url: 'css-variables',
    comp: '2019-02-03CSSVariables'
  },
  {
    img:
      'https://66.media.tumblr.com/1382352f0f20610670889b4f72082c90/tumblr_plkov6LVHO1xfbgtko6_1280.png',
    header: 'Removing Player from Your Google Play Games Services Leaderboard',
    text:
      'This is how you remove a cheater from your Google Play Games Services Leaderboard.',
    tags: ['Google Play Games Services'],
    url: 'gpgs-hide-player',
    comp: '2019-01-19GooglePlayGamesApi'
  },
  {
    img:
      'https://66.media.tumblr.com/437164da521400873a3a93230655ee7b/tumblr_pir1ppqovW1xfbgtko1_1280.png',
    header: 'Firestore and Security',
    text: 'How to secure your Firestore DB server-side.',
    tags: ['Firebase', 'Firestore'],
    url: 'firestore-security',
    comp: '2018-11-25FirestoreSecurity'
  },
  {
    img:
      'https://66.media.tumblr.com/9a998ff243d9022782ac03594f88a5bf/tumblr_pidz17wiDQ1xfbgtko1_1280.png',
    header: 'Intro to the easiest DB ever, Firestore',
    text:
      'Firestore is a DB in the cloud by Google. You only write frontend code so it is easy to get started, but it also scales really well. You also get snacks such as real-time updates, offline support, and an administration UI.',
    tags: ['Firebase', 'Firestore', 'JavaScript'],
    url: 'intro-firestore',
    comp: '2018-11-17IntroFirestore'
  },
  {
    img:
      'https://66.media.tumblr.com/f73cbf4aa693e80e5d1814c0e8a7aac4/tumblr_pib34ssvM41xfbgtko1_1280.jpg',
    header: 'How to publish a js library to NPM and CDN',
    text:
      'Simple guide for how to publish your module and make it accesible through npm install and a script tag',
    tags: ['NPM', 'JavaScript'],
    url: 'npm-publish',
    comp: '2018-11-16PublishLibrary'
  },
  {
    img:
      'https://66.media.tumblr.com/8becdba483fc55919cf2382d111239db/tumblr_pi95baoGkM1xfbgtko1_400.png',
    header: 'How to Change the Cursor to an Image',
    text: 'One line of css and you can change the cursor to whatever you like.',
    tags: ['CSS'],
    url: 'cursor-image',
    comp: '2018-11-15ImageCursor'
  },
  {
    img:
      'https://66.media.tumblr.com/a7c27e08870bd607014e6655749b2721/tumblr_pi8y4gKXRI1xfbgtko1_1280.jpg',
    header: 'How to Add a Script Tag in a Vue Component',
    text:
      'Adding a script tag in a Vue component gives you errors, unless you do this.',
    tags: ['Vue'],
    url: 'script-in-vue',
    comp: '2018-11-14ScriptInVue'
  },
  {
    img:
      'https://66.media.tumblr.com/ee6f77a5a7dd3575440f4746fee3932c/tumblr_pi3n3pE5ez1xfbgtko1_1280.jpg',
    header: 'Setting up a custom Service Worker with the Vue CLI',
    text:
      'Creating a PWA with Vue is easy, this is how you customize the caching strategy with workbox.',
    tags: ['Workbox', 'Vue', 'PWA'],
    url: 'workbox-in-vue',
    comp: '2018-11-10ServiceWorkerVue'
  }
]

export { blogs }

export default {
  name: 'DevBlog',
  created () {
    const blog = blogs.find(b => b.url === this.$route.params.url)
    if (blog) {
      this.comp = () => import(`./${blog.comp}.vue`)
    } else {
      this.comp = () => import(`@/views/NotFound.vue`)
    }
  }
}
</script>
