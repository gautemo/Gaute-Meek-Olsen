<script setup lang="ts">
import { computed, ref } from 'vue';
import { darkMode } from '../store/settings'
import gauteWorkLight from '../assets/gaute_work_light.jpg'
import gauteWorkDark from '../assets/gaute_work_dark.jpg'
import gauteFreetimeLight from '../assets/gaute_freetime_light.jpg'
import gauteFreetimeDark from '../assets/gaute_freetime_dark.jpg'
import { useMouseInElement } from '@vueuse/core'
import Pen from './icons/Pen.vue'
import Bird from './icons/Bird.vue'
import Lantern from './icons/Lantern.vue'
import Robot from './icons/Robot.vue'

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
    <div class="name">
      <h1>Hi, I'm Gaute Meek Olsen</h1>
    </div>
    <div class="me-container" ref="meContainer">
      <transition name="fade">
        <img class="me" :src="meSrc" :key="meSrc" alt="me">
      </transition>
    </div>
  </section>
  <section class="about">
    <div>
      <h2>I'm a norwegian developer from Trondheim, currently living in Oslo.</h2>
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
    </div>

  </section>
</template>

<style scoped>
:global(:root){
  --parallax-height: calc(100vh - var(--menu-height) - 50px);
}
.parallax{
  background: var(--primary);
  height: var(--parallax-height);
  width: 100%;
  position: absolute;
}

.me-container{
  filter: drop-shadow(-8px 0 #3333);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40%;
  min-width: 400px;
  max-width: 600px;
}

.me{
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
}

.name{
  display: inline-block;
  margin: 5rem;
  position: absolute;
  z-index: 2;
}

h1{
  font-size: clamp(1.5rem, 3vw, 3rem); ;
  font-weight: bold;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  width: 0;
  border-right: .15rem solid orange;
  animation: 
    typing 5s linear 3s forwards,
    blink-caret .75s step-end 12 forwards;
}

.about > div {
  background: #FB1;
  padding: 2rem;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
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
}

a{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
</style>