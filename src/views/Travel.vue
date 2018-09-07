<template>
    <div class="travel">
        <h1>My travel blog</h1>
        <p>I don't usually travel much, but when I do, you might see some
            content here. Perhaps <a href="https://www.instagram.com/gautemeek/" target="_blank" class="instalink">Instagram</a> is
            the best place to get updates when a new blog is out.</p>
        <div v-for="blog in blogs">
            <BlogElement :img="blog.img" :header="blog.header" :text="blog.text" :tags="blog.tags" :url="blog.url"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BlogElement from '@/components/BlogElement.vue'

export default {
  name: 'travel',
  data () {
    return {
      blogs: [
        {
          img: 'https://i.imgur.com/Yqr2dyN.png',
          header: "I'm travelling",
          text: 'First blog about my trip and the travel route!',
          tags: [],
          url: '/travel-blog/im-travelling'
        },
        {
          img: 'https://78.media.tumblr.com/b34d0d90d3818ac47e8f6e01332902c3/tumblr_pepbilKGIQ1w9240l_1280.jpg',
          header: 'Packing list',
          text: "How I'm overpacking on my five weeks trip. Still got a lot of space left in the backpack though.",
          tags: [],
          url: '/travel-blog/pack-list'
        }
      ]
    }
  },
  components: {
    BlogElement
  }
}
</script>

<style scoped>
.travel {
  margin: 50px 250px;
}
@media only screen and (max-width: 768px) {
  .travel {
    margin: 25px 10px;
  }
}
</style>
