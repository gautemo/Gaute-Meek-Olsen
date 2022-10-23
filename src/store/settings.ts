import { ref, watch, watchEffect } from 'vue'
import { useFavicon } from '@vueuse/core'
import { inBrowser } from 'vitepress'

let initialDarkMode = false
if (inBrowser) {
  const preferDark = window?.matchMedia('(prefers-color-scheme: dark)').matches
  const storedDarkMode = window?.localStorage.getItem('darkMode')
  if (storedDarkMode) {
    initialDarkMode = storedDarkMode === 'true'
  } else if (preferDark) {
    initialDarkMode = true
  } else {
    const hour = new Date().getHours()
    const night = hour < 5 || hour > 19
    initialDarkMode = night
  }
}

const darkMode = ref(initialDarkMode)

watch(darkMode, () => {
  localStorage.setItem('darkMode', darkMode.value.toString())
})

const icon = useFavicon()
watchEffect(() => {
  if (inBrowser) {
    if (darkMode.value) {
      document.documentElement.classList.add('dark')
      icon.value = '/favicon/favicon-dark.png'
    } else {
      document.documentElement.classList.remove('dark')
      icon.value = '/favicon/favicon-light.png'
    }
  }
})

export { darkMode }
