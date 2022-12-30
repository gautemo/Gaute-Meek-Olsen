<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'
import { computed, ref } from 'vue'
import { darkMode } from '../../store/settings'

const wrap = ref(null)
const { isOutside } = useMouseInElement(wrap, { touch: false })

const src = computed(() => {
  if (darkMode.value && isOutside.value) return '/images/home/dark'
  if (darkMode.value) return '/images/home/dark-hover'
  if (!darkMode.value && isOutside.value) return '/images/home/light'
  return '/images/home/light-hover'
})
</script>

<template>
  <div class="wrap" ref="wrap">
    <transition name="fade">
      <picture :key="src">
        <source
          sizes="
            (max-width: 800px) 300px,
            1000px
          "
          :srcset="`
            ${src}-s.avif 500w,
            ${src}-m.avif 1000w
          `"
          type="image/avif"
        />
        <source
          sizes="
            (max-width: 800px) 300px,
            1000px
          "
          :srcset="`
            ${src}-s.jpg 500w,
            ${src}-m.jpg 1000w
          `"
          type="image/jpeg"
        />
        <img fetchpriority="high" decoding="sync" :src="`${src}-m.jpg`" alt="me" />
      </picture>
    </transition>
  </div>
</template>

<style scoped>
.wrap {
  filter: drop-shadow(-8px 0 #3333);
  width: 40%;
  min-width: 400px;
  max-width: 600px;
}

img {
  position: absolute;
  right: 0;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
}

@media only screen and (max-width: 800px) {
  .wrap {
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

  img {
    border-radius: 15px;
    border: 4px solid var(--tertiary);
    clip-path: none;
    right: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
