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
  </div>
</template>

<style>
:root {
  --orange: #df815a;
  --yellow: #e7ca52;
  --green: #7dbf94;
  --blue: #639bb4;
  --blue-dark: hsla(199, 36%, 30%, 0.6);
  --white: rgb(245, 245, 245);
  --black: rgb(10, 10, 10);
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
@media only screen and (max-width: 768px) {
  #main-area{
    margin-top: 60px;
  }
  #mobile-header {
    display: block;
    width: 100vw;
    z-index: 2;
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
  }
}
</style>
