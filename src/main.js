import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const hamburger = document.querySelector('.hamburger')
function burgerClick () {
  this.classList.toggle('is-active')
  document.querySelector('#nav').classList.toggle('show')
  document.querySelector('#mobile-header').classList.toggle('transparant')
  console.log('ja')
}
hamburger.addEventListener('click', burgerClick)

const menuItems = document.querySelectorAll('#nav a')
menuItems.forEach(item => item.addEventListener('click', menuClicked))
function menuClicked () {
  hamburger.classList.remove('is-active')
  document.querySelector('#nav').classList.remove('show')
  document.querySelector('#mobile-header').classList.remove('transparant')
}
