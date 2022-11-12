<script setup lang="ts">
import { computed } from 'vue';
import android from '../assets/android.svg'
import web from '../assets/web.svg'

const props = defineProps<{
  type: string
}>()

const icon = computed(() => {
  if (props.type === '🤖') {
    return {
      src: android,
      alt: 'Android',
    }
  }
  if (props.type === '🕸️') {
    return {
      src: web,
      alt: 'Web Page',
    }
  }
})
</script>

<template>
  <img class="icon" v-if="icon" :src="icon.src" :alt="icon.alt" />
  <span v-else>{{type}}</span>
</template>

<style scoped>
img.icon {
  width: 32px;
  height: 32px;
}
</style>