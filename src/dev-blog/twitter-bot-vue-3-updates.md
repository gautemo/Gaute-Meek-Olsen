---
title: Twitter Bot - Vue 3 Updates
date: 2020-06-05T13:45
coverImgExtension: png
serie: Twitter bot with Kotlin in AWS
---

Say hello to [Vue 3 bot](https://twitter.com/vue_3)

<script setup>
import Tweet from '../components/Tweet.vue'
</script>
<Tweet>
<p lang="fr" dir="ltr">Vue 3, 3.0.0-beta.14 is out! (<a href="https://t.co/huuUAYRyoB">https://t.co/huuUAYRyoB</a>) <a href="https://twitter.com/hashtag/VueJS?src=hash&amp;ref_src=twsrc%5Etfw">#VueJS</a></p>&mdash; Vue 3 bot (@vue_3) <a href="https://twitter.com/vue_3/status/1264515170455388160?ref_src=twsrc%5Etfw">May 24, 2020</a>
</Tweet>

I created a Twitter bot that listens to Vue 3 related projects and when a new version is released it will give a tweet about it with a link to the changelog.

So if you want to stay up to date with the latest of Vue you might want to [follow the account](https://twitter.com/vue_3). The bot is watching the projects vue-next, vue-router-next, Vue Class Component v8, Vuex 4, Vite, and VitePress.

The Twitter bot was made with Kotlin and runs in AWS as a Lambda function. You can find the source code on [GitHub](https://github.com/gautemo/twitter-bot-vue-3). It's not that much code, but it's a lot of pieces that needs to work together so this will be a tutorial series on how to get everything working with Kotlin in AWS and the Twitter API.
