<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { darkMode } from '../store/settings'

const div = ref<HTMLElement>()
onMounted(() => {
  const script = document.createElement('script')
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
  div.value?.appendChild(script)
})
</script>

<template>
  <div ref="div">
    <blockquote class="twitter-tweet" data-dnt="true" :data-theme="darkMode ? 'dark' : 'light'">
      <slot></slot>
    </blockquote>
  </div>
</template>

<style scoped>
div{
  display: flex;
  justify-content: center;
}
</style>