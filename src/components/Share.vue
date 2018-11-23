<template>
  <div>
    <h2>Share this article</h2>
    <div class="container">
      <facebook :url="url" scale="3" class="icon"/>
      <twitter :url="url" :title="text" scale="3" class="icon"/>
      <linkedin :url="url" scale="3" class="icon" />
      <reddit :url="url" :title="text" scale="3" class="icon"/>
      <google :url="url" scale="3" class="icon" />
      <email :url="url" scale="3" :subject="text" :body="`Check out this article I found! ${url}`" class="icon" />
      <whats-app :url="url" :title="text" scale="3" class="icon"/>
      <telegram :url="url" :title="text" scale="3" class="icon"/>

      <div class="copy">
        <div class="copied">Link copied to clipboard</div>
        <svg @click="copy" xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 56 72" class="icon">
          <path d="M29.518 12.25l-8.705 8.704a13.624 13.624 0 0 0-2.881 4.26 13.617 13.617 0 0 0-1.128 5.377c0 5.48 3.076 8.778 4.01 9.77 2.346 2.494 7.014 3.983 7.416 3.674.637-.49 2.665-3.002.174-5.764-.452-.502-3.605-.852-5.154-4.667-.836-2.059-.753-4.129.076-6.055a7.8 7.8 0 0 1 1.647-2.434l8.705-8.704c3.057-3.057 8.032-3.057 11.089 0 3.057 3.057 3.057 8.032 0 11.089l-4.175 4.174a17.549 17.549 0 0 1 2.37 5.947l5.963-5.962c5.35-5.351 5.35-14.057 0-19.408C43.574 6.9 34.869 6.9 29.518 12.25z"></path>
          <path d="M26.357 59.768l9.01-9.01a13.624 13.624 0 0 0 2.881-4.26 13.617 13.617 0 0 0 1.128-5.377c0-5.48-3.076-8.778-4.01-9.77-2.346-2.494-7.014-3.983-7.416-3.674-.637.49-2.665 3.002-.174 5.764.452.502 3.605.852 5.154 4.667.836 2.059.753 4.129-.076 6.055a7.8 7.8 0 0 1-1.647 2.434l-9.01 9.01c-3.057 3.057-8.032 3.057-11.089 0-3.057-3.057-3.057-8.032 0-11.089l4.479-4.479a17.549 17.549 0 0 1-2.37-5.947L6.95 40.36c-5.35 5.351-5.35 14.057 0 19.408 5.351 5.35 14.057 5.35 19.407 0z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { Facebook, Twitter, Linkedin, Reddit, Google, Email, Telegram, WhatsApp } from 'vue-socialmedia-share'

export default {
  name: 'Share',
  props: {
    url: {
      type: String,
      required: true
    },
    text: String
  },
  methods: {
    copy: function () {
      const el = document.createElement('textarea')
      el.value = this.url
      el.setAttribute('readonly', '')
      el.style = { visibility: 'hidden', position: 'absolute' }
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      const copytext = document.querySelector('.copied')
      copytext.classList.add('is-visible')
      setTimeout(() => {
        copytext.classList.remove('is-visible')
      }, 3000)
    }
  },
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Reddit,
    Google,
    Email,
    Telegram,
    WhatsApp
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-between;
}
.icon{
  cursor: pointer;
  transition: all 0.2s;
}
.icon:hover{
  transform: scale(1.1);
}

.copy{
  position: relative;
}

.copied{
  opacity: 0;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,.3));
  padding: .75rem;
  position: absolute;
  -ms-transform: translate(calc(-50% + .75rem),calc(-100% - .75rem));
  transform: translate(calc(-50% + .75rem),calc(-100% - .75rem));
  background-color: #fff;
  z-index: 100;
  font-weight: 700;
  letter-spacing: .03rem;
  left: 10px;
  top: -5px;
  white-space: nowrap;
  font-size: 0.8em;
  transition: opacity 0.5s;
}

.copied.is-visible{
  opacity: 1;
}

.copied.is-visible::before{
  opacity: 1;
}

.copied::before{
  content: "";
  opacity: 0;
  width: 0;
  height: 0;
  border-left: .75rem solid transparent;
  border-right: .75rem solid transparent;
  border-top: .75rem solid #fff;
  position: absolute;
  left: calc(50% - .75rem);
  bottom: -.75rem;
  transition: opacity 0.5s;
}
</style>
