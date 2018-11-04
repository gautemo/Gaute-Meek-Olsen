<template>
  <div id="app">
    <div id="mobile-header">
      <button class="hamburger hamburger--spin" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div id="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/dev-blog">DEV BLOG</router-link>
      <router-link to="/travel-blog">TRAVEL BLOG</router-link>
    </div>
    <div id="main-area">
      <router-view/>
    </div>
    <div id="follow-me" v-if="$route.path!=='/'">
      <Twitter />
      <LinkedIn />
      <Github />
      <Instagram />
      <Snapchat />
      <GooglePlay />
      <Tumblr />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Twitter from '@/components/follow/Twitter.vue'
import Instagram from '@/components/follow/Instagram.vue'
import Github from '@/components/follow/Github.vue'
import GooglePlay from '@/components/follow/GooglePlay.vue'
import Tumblr from '@/components/follow/Tumblr.vue'
import Snapchat from '@/components/follow/Snapchat.vue'
import LinkedIn from '@/components/follow/LinkedIn.vue'

export default {
  components: {
    Twitter,
    Instagram,
    Github,
    GooglePlay,
    Tumblr,
    Snapchat,
    LinkedIn
  }
}
</script>

<style>
:root {
  --orange: #df815a;
  --yellow: #e7ca52;
  --green: #7dbf94;
  --green-light: #bbddc7;
  --blue: #639bb4;
  --blue-dark: hsla(199, 36%, 30%, 0.6);
  --white: rgb(245, 245, 245);
  --black: rgb(30, 30, 30);
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--white);
  color: var(--black);
}
#app {
  display: flex;
}
#nav {
  background: linear-gradient(
    200deg,
    whitesmoke -60%,
    var(--blue),
    var(--blue)
  );
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#nav a {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
  padding: 25px 10px 25px 40px;
  text-decoration: none;
}
#nav a:first-child {
  margin-top: 50px;
}
#nav a:hover {
  background-color: var(--blue-dark);
  border-left: 4px solid var(--white);
  text-shadow: var(--black) -2px 2px 2px;
}
#main-area {
  flex: 5;
  height: 100vh;
  overflow: auto;
}
#mobile-header {
  display: none;
  background: linear-gradient(200deg, whitesmoke -100%, var(--blue));
  position: fixed;
  width: 100vw;
}
#mobile-header.transparant {
  background: transparent;
}
#follow-me {
  position: fixed;
  top: 0;
  right: 0;
  margin: 30px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
#follow-me a{
  margin-bottom: 5px;
}
@media only screen and (max-width: 768px) {
  #main-area {
    margin-top: 55px;
  }
  #mobile-header {
    display: block;
    width: 100vw;
    z-index: 5;
  }
  #nav {
    display: none;
  }
  #nav a:first-child {
    margin-top: 80px;
  }
  #nav.show {
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 4;
  }
  #follow-me{
    display: none;
  }
}
</style>
