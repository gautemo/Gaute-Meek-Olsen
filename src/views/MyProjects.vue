<template>
  <div>
    <div class="project-grid cover">
      <Project v-for="prj in projects" v-bind:key="prj.header" :p="prj"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue'

export default {
  name: 'myProjects',
  components: {
    Project
  },
  data () {
    return {
      projects: [
        {
          img:
            'https://66.media.tumblr.com/3ce3d99b6f83015e4977e9a1f5e15db7/tumblr_phvyyuvYC21xfbgtko3_1280.png',
          header: 'Calc Fast',
          smallheader: 'Android app, a math game',
          text:
            'Calc Fast is my biggest success so far! With daily players all over the world and many hundred thousands downloads. Calc Fast is a math game where you have 60 seconds to answer as many equations as possible. Giving you a score you can compete in the leaderboard with or just try to improve next time you play.',
          googleplay:
            'https://play.google.com/store/apps/details?id=gautemo.game.calcfast',
          tech: ['Android', 'Kotlin', 'Java', 'Firebase'],
          color: '#43800c'
        },
        {
          img: 'https://66.media.tumblr.com/7f80efed386392de79700981d43d1cf1/tumblr_pw6d4oNS5a1xfbgtko1_1280.png',
          header: 'Camera Timer',
          smallheader: 'Android app',
          text: 'This is a camera app that takes multiple photos in an interval. Simply pick your wanted initial delay, interval and how many photos you want.',
          googleplay: 'https://play.google.com/store/apps/details?id=app.gautemo.cameratimer',
          tech: ['Android', 'Kotlin'],
          color: '#006064'
        },
        {
          img:
            'https://66.media.tumblr.com/e155ea286d3d1d9dc7090982252336f6/tumblr_phvyyuvYC21xfbgtko5_1280.png',
          header: 'Chances',
          smallheader: 'Android app',
          text:
            "Are you in need of some dices, cards, need to flip a coin or get a random number, but you don't have the items on you? Fear not, this app will save you. Now you always can do this from your phone.",
          googleplay:
            'https://play.google.com/store/apps/details?id=gautemo.game.randomdicecoinnumber',
          tech: ['Android', 'Java'],
          color: '#ff5200'
        },
        {
          img:
            'https://66.media.tumblr.com/e3a291759f5f5bb1b9b0fcc6f3358204/tumblr_phw9o40U3U1xfbgtko1_1280.png',
          header: 'gaute.dev',
          smallheader: 'This website',
          text:
            'This website is made in Vue and hosted with Firebase. This is a place to show what intrest me, what I do and have done.',
          github: 'https://github.com/gautemo/Gaute-Meek-Olsen',
          tech: ['Vue', 'Firebase', 'PWA', 'CSS Grid'],
          color: '#639bb4'
        },
        {
          img:
            'https://66.media.tumblr.com/d8bd9995781f3cb1eae489a0d1d0582e/tumblr_phvyyuvYC21xfbgtko7_1280.png',
          header: 'Word of the Day',
          smallheader: 'Android app',
          text:
            'Word of the Day provides you with one new word every day. Your screensaver will automaticly be updated so you effortly can view the word with explanation about it.',
          googleplay:
            'https://play.google.com/store/apps/details?id=gautemo.app.wordoftheday',
          tech: ['Android', 'Java'],
          color: '#ffd42a'
        },
        {
          img: 'https://66.media.tumblr.com/97bfb48231021d65a7bc443920f2a380/bae96d53682c9671-c3/s640x960/14deb8922e604622dc72a15ca6a1c332b239055d.png',
          header: 'Planning Poker',
          smallheader: 'PWA website',
          text: 'Play planning poker together, each team member visits the site on their phone and have a screen with the dashboard visible in the room to get a overview of every vote.',
          url: 'https://planning-poker-w.web.app/',
          tech: ['Vue', 'Firebase', 'PWA'],
          color: '#006155'
        },
        {
          img:
            'https://66.media.tumblr.com/3a62762bec5b8388d1ab581ec7ba623f/tumblr_phvyyuvYC21xfbgtko6_1280.png',
          header: 'Run from Robots',
          smallheader: 'Android app, game',
          text:
            "Run from Robots is a game where you need to survive for as long as you can. Don't get caught by the robots. This game is a re-creating of my first desktop game.",
          googleplay:
            'https://play.google.com/store/apps/details?id=gautemo.game.runaway',
          tech: ['Android', 'Java'],
          color: '#4d5d7b'
        },
        {
          img: 'https://66.media.tumblr.com/4eb2263dddf7e66c0490162089ef9e80/4c3358135e66ad9b-a0/s640x960/e432b74aab30c3dab7e40298827bd446123d111b.png',
          header: 'Receipt app',
          smallheader: 'PWA website',
          text: 'Store all your receipts in one place without cluttering your phones image albums. Sign in with a user and take pictures to store them in the cloud so you can reach them from both the phone and laptop.',
          url: 'https://gmo-receipt-app.web.app/',
          tech: ['Vue', 'Firebase', 'PWA'],
          color: '#dd3818'
        },
        {
          img: 'https://66.media.tumblr.com/4b95b9c0ad818f6a792dfc8a03c3457c/bf903773d6c0ab04-fe/s1280x1920/6877d2102b2bda2e1c228663e67f1a83efe18f8f.png',
          header: 'Kuizzi',
          smallheader: 'PWA website',
          text: 'A quiz game for your friends. You can create your own quiz and play it live with your friends who answers with their own device.',
          url: 'https://kuizzi.web.app/',
          tech: ['Vue', 'Firebase', 'PWA'],
          color: '#daa334'
        },
        {
          img:
            'https://66.media.tumblr.com/9485b8458c55dc48bb88a17c20c6b798/tumblr_phvyyuvYC21xfbgtko2_1280.png',
          header: 'Fatty Bird',
          smallheader: 'libGDX cross platform app',
          text:
            'Fatty Bird is a fun twist based on the famous Flappy Bird game. Made with the cross platform game-development application framework libGDX.',
          googleplay:
            'https://play.google.com/store/apps/details?id=gautemo.game.fattybird',
          tech: ['libGDX', 'Java'],
          color: '#09c7c7'
        },
        {
          img:
            'https://66.media.tumblr.com/214e7aa968e1f4ee9457af14e2f7cab5/tumblr_phvyyuvYC21xfbgtko4_1280.jpg',
          header: 'Feed the Monster King',
          smallheader: 'Android app, drinking game',
          text:
            "Feed the Monster King was my first real Android app. It's mainly a drinking game where you don't want to be the one who kills the monster!",
          googleplay:
            'https://play.google.com/store/apps/details?id=game.gautemo.feedthemonsterking',
          tech: ['Android', 'Java', 'Kotlin'],
          color: '#842a57'
        },
        {
          img:
            'https://66.media.tumblr.com/eec5000d85054ef8ec985861a0cc5dcc/tumblr_phvxior88G1w9240l_1280.png',
          header: 'Photolooper',
          smallheader: 'Cordova app',
          text:
            'Fun little app which takes photos with a random filter. Small little project to learn Cordova.',
          github: 'https://github.com/gautemo/photolooper',
          tech: ['Cordova', 'HTML', 'JavaScript', 'CSS'],
          color: '#368281'
        },
        {
          img:
            'https://66.media.tumblr.com/87b73f3b8f0b18f5058785263ae22644/tumblr_phvyh1sjzA1xfbgtko1_1280.png',
          header: 'touch-cli-windows',
          smallheader: 'NPM package',
          text:
            "Mac and Linux has the simple touch command in the terminal. But on Windows it's hard to create files in the terminal. Install this package to solve the problem. 'npm i -g touch-cli-windows' to install and 'touch index.html app.js' to use.",
          github: 'https://github.com/gautemo/touch-cli-windows',
          tech: ['NPM', 'JavaScript'],
          color: '#e21414'
        },
        {
          img:
            'https://66.media.tumblr.com/61bc637a26ece1774e3839bdee1fa574/tumblr_phvyl4CIN41xfbgtko1_1280.jpg',
          header: 'fake-movie-database api',
          smallheader: 'REST API',
          text:
            "I was doing a Pluralsight's course learning iOS development. When the course used an API wich after they published the course became a closed API. So I made an open API with a few movies for me and everyone else strugling to finish the course.",
          github: 'https://github.com/gautemo/fake-movie-database-api',
          tech: ['Heroku', 'Node', 'JavaScript', 'ExpressJs'],
          color: '#374dec'
        },
        {
          img:
            'https://66.media.tumblr.com/b2ca4d580a3a662aa6fe9802fc469f6a/tumblr_phvxiqBdhz1w9240l_1280.jpg',
          header: 'Smart Home',
          smallheader: 'I have made my house smarter',
          text:
            'I have set up an Alexa, which controlls a Raspberry pi. The Raspberry then talks to my Phillips Hue lights and a Android tablet which plays music back to the alexa and displays my photos through the Google Photos API.',
          tech: [
            'Alexa Skills',
            'Raspberry PI',
            'Android',
            'Google Photos API'
          ],
          color: '#d03f8f'
        },
        {
          img:
            'https://66.media.tumblr.com/48b7e6038f35c5d230b62743f9380ff7/tumblr_phw8q3uHh21xfbgtko1_540.png',
          header: 'Exermon',
          smallheader: 'Android workout game',
          text:
            'Exermon is co-created with Torbjørn Høivik. Exermon is inspired by tamagotchi, you need to do strength workout to keep you monster from dying and gaining strength.',
          googleplay:
            'https://play.google.com/store/apps/details?id=gautor.games.exermon',
          tech: ['Android', 'Java'],
          color: '#8fc5e4'
        },
        {
          img:
            'https://66.media.tumblr.com/3679b3c6b5e7bc651c4e60df9c97c50c/tumblr_pn2xobpH1m1xfbgtko1_1280.png',
          header: 'Heart Keyboard',
          smallheader: 'Android keyboard app',
          text:
            'My mom wanted a custom keyboard with hearts. So I made it and published it for anyone interested. With this keyboard you can quickly type all the hearts organized together.',
          googleplay:
            'https://play.google.com/store/apps/details?id=app.gautemo.heartkeyboard',
          tech: ['Android', 'Kotlin'],
          color: '#fd3099'
        },
        {
          img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--dbr9Fy8P--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/2d8c8pqrys5qbwc2erki.PNG',
          header: 'COVID-19 Timeline',
          smallheader: 'Website',
          text: 'Timeline of how the virus Covid-19 has spread across the worlds. Visualized in Google Maps and focuses on currently infected.',
          url: 'https://covid-19-timeline.netlify.app/',
          tech: ['Vue', 'Google Maps'],
          color: '#17263c'
        },
        {
          img: 'https://66.media.tumblr.com/fa6fe1d9c0cbf1e73ba2b3915d57b488/048aeacd5b2d5923-7b/s1280x1920/db5d4fb142e28b2fc4650861458e499760094e02.jpg',
          header: 'Codewars Leaderboad',
          smallheader: 'Website',
          text: 'Leaderboard for codewars to keep a score of the battle of languages in my workplace. Go to leaderboard 2S for example of a leaderboard. A website grouped by clans has also been made: https://codewars-leaderboard-2s.web.app/',
          url: 'https://codewars-leaderboard-1.web.app/',
          tech: ['Vue', 'Firebase'],
          color: '#e24b15'
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  align-items: center;
  padding: 50px 8vw;
}
.project-grid::before {
  background: url("https://66.media.tumblr.com/8851f8fdc343ce509c43df9b28b9d74a/tumblr_phubgwZw9l1xfbgtko1_1280.jpg");
  background-size: cover;
  opacity: 0.3;
  filter: blur(2px);
}

@media only screen and (max-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
