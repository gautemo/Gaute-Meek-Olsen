---
title: Twitter Bot - Vue 3 Updates
date: 2020-06-05T13:45
coverImgExtension: png
series: Twitter bot with Kotlin in AWS
---

Say hello to [Vue 3 bot](https://twitter.com/vue_3)

<script setup>
import Tweet from '../components/Tweet.vue'
</script>
<Tweet id="1264515170455388160"/>

I created a Twitter bot that listens to Vue 3 related projects and when a new version is released it will give a tweet about it with a link to the changelog.

So if you want to stay up to date with the latest of Vue you might want to [follow the account](https://twitter.com/vue_3). The bot is watching the projects vue-next, vue-router-next, Vue Class Component v8, Vuex 4, Vite, and VitePress.

The Twitter bot was made with Kotlin and runs in AWS as a Lambda function. You can find the source code on [GitHub](https://github.com/gautemo/twitter-bot-vue-3). It's not that much code, but it's a lot of pieces that need to work together so this will be a tutorial series on how to get everything working with Kotlin in AWS and the Twitter API.
