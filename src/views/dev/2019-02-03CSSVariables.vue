<template>
  <div id="dark-control">
    <article>
      <h1>{{title}}</h1>
      <section>Previously you needed a CSS extension such as SASS or LESS to use variables in CSS. Not anymore, variables have been introduced in CSS leaving SASS and LESS unnecessary.</section>
      <section>
        This is how you declare and use variables.
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'css-variables.css'"/>
      </section>
      <section>
        <div class="box"></div>
        <div class="circle"></div>
        <div class="content">
          <span>Content</span>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </section>
      <section>If I had a lot of classes using the main color, it would be easy for me to specify a new color only at one place in my CSS.</section>
      <section>
        <h2>JavaScript Control</h2>But you can also change the value of your CSS variables through JavaScript. Which gives us a better way to change the style.
        Let's say we want to have a dark theme. Previously we needed to write a lot of extra CSS classes and through JavaScript select the element and swap classes.
        But now;
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'css-variables-change.js'"/>
      </section>
      <section>
        <span @click="toggleDark" id="bulb" title="Click on me!">💡</span>
      </section>
      <section>
        <h2>Summary</h2>You may disagree with the syntax they decided for, but you can't argue it's a nice feature. CSS variables can make you write cleaner and less CSS. Makes it easier to make changes afterwards. But also creates room for functionality as you can change their value through JavaScript.
        <p>
          <i>Remember to click the light bulb.</i>
        </p>
      </section>
      <Share :url="'https://gaute.app' + $route.path" :text="title"/>
    </article>
  </div>
</template>

<style scoped>
/* Variables attached to the root, making it availible for the whole page */
article {
  --main-color: #5ad;
}

/* Variables attached to a element */
.content {
  --text-size: 2em;
  --main-color: #b4d; /* Overwrites variable for class content and all childs*/
  border: solid 1px gray;
}

/* Using the variable */
.box {
  background-color: var(--main-color);
  width: 50px;
  height: 50px;
  margin: 5px;
}

.circle {
  background-color: var(--main-color);
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
}

.content span {
  font-size: var(--text-size);
}

#dark-control {
  --bg-color: white;
  --text-color: black;
  background-color: var(--bg-color);
  color: var(--text-color);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}
#bulb {
  font-size: 5em;
  cursor: pointer;
}
</style>

<script>
import Share from '@/components/Share.vue'
import Gist from '@/components/Gist.vue'

export default {
  name: 'CSSVariables',
  data () {
    return {
      title: 'CSS Variables',
      dark: false
    }
  },
  methods: {
    toggleDark: function () {
      let bgColor = 'black'
      let textColor = 'white'
      let mainColor = '#FB1'
      if (this.dark) {
        bgColor = 'white'
        textColor = 'black'
        mainColor = '#5AD'
      }
      document
        .querySelector('article')
        .style.setProperty('--main-color', mainColor)
      const darkControl = document.querySelector('#dark-control')
      darkControl.style.setProperty('--bg-color', bgColor)
      darkControl.style.setProperty('--text-color', textColor)
      this.dark = !this.dark
    }
  },
  components: {
    Share,
    Gist
  }
}
</script>
