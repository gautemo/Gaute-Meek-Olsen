<template>
  <div class="grid-child">
    <div class="container" @click="showDetails = true">
      <div class="overlay" :style="faintcolor"></div>
      <img :src="t.img" />
      <div :style="banner" class="banner">
        <h2 class="header">
          {{t.headerShort}}
          <span class="symbol">{{t.type.symbol}}</span>
        </h2>
      </div>
    </div>
    <div v-if="showDetails" class="modal-background" @click="showDetails = false">
      <div class="details cover" :style="border" v-on:click.stop>
        <div class="det-container">
          <h1>{{t.header}}</h1>
          <img :src="t.img" />
          <div class="text-block cover">
            <b>Type:</b>
            {{t.type.text}} {{t.type.symbol}}
            <p>{{t.text}}</p>
            <a v-if="t.github" :href="t.github" target="_blank" rel="noopener">
              <img
                style="width: 180px;"
                alt="Open on GitHub"
                src="https://66.media.tumblr.com/cd17a74e0c6f61a0e898d5d70e3d5d4b/tumblr_phucw7yOPp1xfbgtko1_540.png"
              />
            </a>
            <a class="slides" v-if="t.slides" :href="t.slides" target="_blank" rel="noopener">
              <svg
                style="margin-right: 10px;"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
                />
              </svg>
              Go to slides
            </a>
            <div class="tech-container">
              <b>Tech:</b>
              <span class="tech" v-for="tech in t.tech" v-bind:key="tech">{{tech}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "talk",
  props: ["t"],
  data() {
    return {
      showDetails: false
    };
  },
  computed: {
    banner() {
      return "background-color: " + this.t.color;
    },
    faintcolor() {
      return `background-color: ${this.t.color}30`;
    },
    border() {
      return "border-color: " + this.t.color;
    }
  }
};
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
  background: url("https://66.media.tumblr.com/a24363551bee0d27fdcc09bde4f7b90f/tumblr_pic3dyNSPC1xfbgtko1_1280.jpg");
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

.text-block {
  position: relative;
}

.text-block::before {
  background-color: var(--white);
  opacity: 0.7;
  z-index: -1;
  box-shadow: 0 0 30px 8px var(--white);
}

.symbol {
  position: absolute;
  right: 0;
  margin-right: 10px;
}

a {
  display: block;
  margin-bottom: 15px;
}

.slides {
  display: flex;
  font-weight: bold;
  font-size: 1.2em;
  align-items: center;
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

  .det-container h1 {
    font-size: 1.8em;
  }

  .tech-container > b {
    display: block;
    margin-bottom: 7px;
  }

  .header {
    font-size: 1.3em;
  }
}
</style>
