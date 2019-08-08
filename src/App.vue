<template>
  <main id="app">
    <header id="mobile-header">
      <button class="hamburger hamburger--spin" type="button" aria-label="Open navigation">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </header>
    <nav id="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/talks">TALKS</router-link>
      <router-link to="/dev-blog">DEV BLOG</router-link>
      <router-link to="/today-i-learned">TODAY I LEARNED</router-link>
      <router-link to="/travel-blog">TRAVEL BLOG</router-link>
    </nav>
    <main id="main-area">
      <router-view />
    </main>
    <aside id="follow-me" v-if="$route.path!=='/'">
      <Twitter />
      <LinkedIn />
      <Github />
      <Instagram />
      <Snapchat />
      <GooglePlay />
    </aside>
  </main>
</template>

<script>
// @ is an alias to /src
import Twitter from '@/components/follow/Twitter.vue'
import Instagram from '@/components/follow/Instagram.vue'
import Github from '@/components/follow/Github.vue'
import GooglePlay from '@/components/follow/GooglePlay.vue'
import Snapchat from '@/components/follow/Snapchat.vue'
import LinkedIn from '@/components/follow/LinkedIn.vue'

export default {
  components: {
    Twitter,
    Instagram,
    Github,
    GooglePlay,
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
  --white: #fcfcfc;
  --black: rgb(30, 30, 30);
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--white);
  color: var(--black);
  position: relative;
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
  width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 5;
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
  flex: 1;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
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
#follow-me a {
  margin-bottom: 5px;
}
.cover::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
}
@media only screen and (max-width: 1000px) {
  #follow-me {
    display: none;
  }
}
</style>
