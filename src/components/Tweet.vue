<script setup lang="ts">
/* Inspired by https://github.com/slidevjs/slidev/blob/main/packages/client/builtin/Tweet.vue */
import { getCurrentInstance, onMounted, ref } from 'vue'
import { useScriptTag } from '@vueuse/core'
import { darkMode } from '../store/settings'

const props = defineProps<{
  id: string | number
}>()

const div = ref<HTMLElement>()
const vm = getCurrentInstance()!

async function create() {
  // @ts-expect-error global
  await window.twttr.widgets.createTweet(props.id.toString(), div.value, {
    theme: darkMode.value ? 'dark' : 'light',
    dnt: true,
  })
}

// @ts-expect-error global
if (window?.twttr?.widgets) {
  onMounted(create)
} else {
  useScriptTag(
    'https://platform.twitter.com/widgets.js',
    () => {
      if (vm.isMounted) create()
      else onMounted(create, vm)
    },
    { async: true }
  )
}
</script>

<template>
  <div ref="div"></div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  min-width: 200px;
  min-height: 200px;
}

div :deep(iframe) {
  border-radius: 13px;
}
</style>
