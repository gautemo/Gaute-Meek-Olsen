import { ref, watch, watchEffect } from 'vue'

const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const storedDarkMode = localStorage.getItem('darkMode')
let initialDarkMode
if (storedDarkMode) {
  initialDarkMode = storedDarkMode === 'true'
} else if (preferDark) {
  initialDarkMode = true
} else {
  const hour = new Date().getHours()
  const night = hour < 5 || hour > 19
  initialDarkMode = night
}

const darkMode = ref(initialDarkMode)

watch(darkMode, () => {
  localStorage.setItem('darkMode', darkMode.value.toString())
})

watchEffect(() => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

export { darkMode }