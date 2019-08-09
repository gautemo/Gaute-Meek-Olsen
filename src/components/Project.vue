<template>
  <div class="grid-child">
    <div class="container" @click="showDetails = true">
      <div class="overlay" :style="faintcolor"></div>
      <img :src="p.img" />
      <div :style="banner" class="banner">
        <h2 class="header">{{p.header}}</h2>
        <p class="small-header">{{p.smallheader}}</p>
      </div>
    </div>
    <div v-if="showDetails" class="modal-background" @click="showDetails = false">
      <div class="details cover" :style="border" v-on:click.stop>
        <div class="det-container">
          <h1>{{p.header}}</h1>
          <img :src="p.img" />
          <p>{{p.text}}</p>
          <a v-if="p.googleplay" :href="p.googleplay" target="_blank" rel="noopener">
            <img
              style="width: 200px;"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>
          <a v-if="p.github" :href="p.github" target="_blank" rel="noopener">
            <img
              style="width: 180px; margin-bottom: 15px;"
              alt="Open on GitHub"
              src="https://66.media.tumblr.com/cd17a74e0c6f61a0e898d5d70e3d5d4b/tumblr_phucw7yOPp1xfbgtko1_540.png"
            />
          </a>
          <div class="tech-container">
            <b>Tech:</b>
            <span class="tech" v-for="t in p.tech" v-bind:key="t">{{t}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogElement',
  props: ['p'],
  data () {
    return {
      showDetails: false
    }
  },
  computed: {
    banner () {
      return 'background-color: ' + this.p.color
    },
    faintcolor () {
      return `background-color: ${this.p.color}40`
    },
    border () {
      return 'border-color: ' + this.p.color
    }
  }
}
</script>

<style scoped>
.grid-child {
  width: 100%;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 5px 5px 2px grey;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
}
.container:hover .overlay {
  height: 0;
}
.container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.container p,
.container h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-shadow: 2px 2px 1px black;
}

.banner {
  z-index: 2;
}

.modal-background {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.details {
  margin: 100px;
  width: 55vw;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-width: 15px;
  border-top-style: solid;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: relative;
  background-color: var(--white);
  box-shadow: 5px 5px 20px 7px #000000bf;
}

.details::before {
  opacity: 0.15;
  background: url("https://66.media.tumblr.com/73830c6dffb2f01967b29e26248b3ed2/tumblr_phubuhvCMl1xfbgtko1_1280.jpg");
  background-size: cover;
}

.det-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 25%;
  z-index: 2;
}

.det-container > img {
  object-fit: cover;
  max-width: 100%;
  max-height: 50%;
}

.tech-container {
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tech {
  background-color: var(--green);
  border-radius: 15px;
  padding: 5px 10px;
  margin: 3px;
  white-space: nowrap;
}

@media only screen and (max-width: 768px) {
  .details {
    margin: 10px;
    width: 80vw;
    border-width: 5px;
  }

  .det-container {
    padding: 0 10%;
  }

  .tech-container > b {
    display: block;
    margin-bottom: 7px;
  }
}
</style>
