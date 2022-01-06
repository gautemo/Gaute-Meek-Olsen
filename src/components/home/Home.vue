<script setup lang="ts">
import { computed, ref } from 'vue';
import { darkMode } from '../../store/settings'
import { 
  gauteFreetimeDark, 
  gauteFreetimeLight, 
  gauteWorkDark, 
  gauteWorkLight, 
  github, 
  googleplay, 
  linkedin, 
  twitter,
} from '../../assets/assets'
import { useMouseInElement } from '@vueuse/core'
import Pen from './icons/Pen.vue'
import Bird from './icons/Bird.vue'
import Lantern from './icons/Lantern.vue'
import Robot from './icons/Robot.vue'
import Sky from './Sky.vue'

const meContainer = ref(null)
const { isOutside } = useMouseInElement(meContainer, {touch: false})
const meSrc = computed(() => {
  if(darkMode.value && isOutside.value) return gauteWorkDark
  if(!darkMode.value && isOutside.value) return gauteWorkLight
  if(darkMode.value && !isOutside.value) return gauteFreetimeDark
  if(!darkMode.value && !isOutside.value) return gauteFreetimeLight
})

</script>

<template>
  <section class="parallax">
    <Sky>
      <div class="name">
        <h1>Hi, I'm Gaute Meek Olsen</h1>
      </div>
    </Sky>
    <div class="me" ref="meContainer">
      <transition name="fade">
        <img :src="meSrc" :key="meSrc" alt="me">
      </transition>
    </div>
  </section>
  <section class="about">
    <div>
      <h2>
        I'm a norwegian developer from Trondheim, currently living in Oslo.<br/>
        This is my place where I share what interest me, what I'm doing, and also have some fun!
      </h2>
      <nav>
        <a href="/dev-blog">
          <Pen/>
          <span>
            Dev blog
          </span>
        </a>
        <a href="/til">
          <Lantern/>
          <span>
            Today I Learned
          </span>
        </a>
        <a href="/talks">
          <Bird/>
          <span>
            Talks
          </span>
        </a>
        <a href="/projects">
          <Robot/>
          <span>
            Projects
          </span>
        </a>
      </nav>
      <h3>Find me on</h3>
      <div class="social">
        <a href="https://twitter.com/GauteMeekOlsen" target="_blank" rel="noopener">
          <img :src="twitter" alt="Twitter">
          <span>Twitter</span>
        </a>
        <a href="https://github.com/gautemo" target="_blank" rel="noopener">
          <img :src="github" alt="GitHub">
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/gaute-meek-olsen-8256b493/" target="_blank" rel="noopener">
          <img :src="linkedin" alt="LinkedIn">
          <span>LinkedIn</span>
        </a>
        <a href="https://play.google.com/store/apps/developer?id=Gaute+Meek+Olsen" target="_blank" rel="noopener">
          <img :src="googleplay" alt="Google Play">
          <span>Google Play</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
:global(:root){
  --parallax-height: calc(100vh - var(--menu-height) - 50px);
}

.parallax{
  background: linear-gradient(45deg, var(--primary) 50%, #ffd2d2 85%);
  height: var(--parallax-height);
  width: 100%;
  position: absolute;
  display: flex;
}

.dark .parallax{
  background: linear-gradient(45deg, var(--primary) 50%, #584A8C 85%);
}

.me{
  filter: drop-shadow(-8px 0 #3333);
  width: 40%;
  min-width: 400px;
  max-width: 600px;
}

.me img{
  position: absolute;
  right: 0;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
}

.about{
  padding-top: var(--parallax-height);
  height: calc(100vh - var(--menu-height));
  overflow: auto;
  position: relative;
  z-index: 3;
}

.name{
  display: inline-block;
  position: relative;
  z-index: 2;
}

h1{
  color: var(--tertiary);
  text-shadow: -2px 2px 2px rgba(51, 51, 51);
  font-size: clamp(1.7rem, 4vw, 4rem);
  font-style: italic;
  font-weight: bold;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  width: 0%;
  border-right: .15rem solid var(--tertiary);
  animation: 
    typing 5s linear 3s forwards,
    blink-caret .75s step-end 12 forwards;
}

h2{
  border: none;
  font-style: italic;
  text-align: center;
  margin: 4rem 2rem;
}

.about > div {
  background: var(--secondary);
  padding: 2rem;
}

@keyframes typing {
  from { width: 0% }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--tertiary); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

nav{
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 4rem 1rem;
}

a{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  color: var(--c-text);
}

.social{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 1rem 4rem 1rem;
}

.social img{
  width: 50px;
  height: 50px;
}

.social a:hover img{
  animation: pulse 1s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1) rotate(10deg); }
  100% { transform: scale(1); }
}

@media only screen and (max-width: 800px) {
  .me{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    height: 400px;
    filter: none;
    min-width: 300px;
  }

  .me img{
    border-radius: 15px;
    border: 4px solid var(--tertiary);
    clip-path: none;
    right: auto;
  }

  .name{
    margin-top: 460px;
  }

  nav{
    display: grid;
    grid-template: auto auto / auto auto;
    gap: 5px;
  }

  .social{
    display: grid;
    grid-template: auto auto / auto auto;
    gap: 25px;
  }
}
</style>