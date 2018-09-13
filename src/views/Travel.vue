<template>
    <div class="travel">
        <h1>My Travel Blog</h1>
        <p>I don't usually travel much, but when I do, you might see some content here.</p>
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
          img: 'https://78.media.tumblr.com/8329dcd7ba47f6f89faeba044795f1c7/tumblr_pf07ce0vCh1w9240l_1280.jpg',
          header: 'A Shift in Scenery',
          text: 'At the Trans Siberian railway from Novosibirsk to Irktusk for 31 hours.',
          tags: [],
          url: '/travel-blog/shift-in-scenery'
        },
        {
          img: 'https://78.media.tumblr.com/a9cb175b996f6dd61f8f0e9055c16306/tumblr_pewnlnyHuO1w9240l_1280.jpg',
          header: 'A Day in Novosibirsk',
          text: 'What I did in Novosibirsk',
          tags: [],
          url: '/travel-blog/novosibirsk'
        },
        {
          img: 'https://78.media.tumblr.com/a0962ceb27736c3b8c9a646ee281cd66/tumblr_pevh2lLaIF1w9240l_1280.jpg',
          header: 'Travelling Towards Time',
          text: 'Getting from Moscow to Novosibirsk.',
          tags: [],
          url: '/travel-blog/towards-time'
        },
        {
          img: 'https://78.media.tumblr.com/d46e23ab8d931b5b44c0e991fdf23db8/tumblr_pesyw2ijO01w9240l_1280.jpg',
          header: 'My Meeting with the Train',
          text: 'How it was like entering the train and staying on it.',
          tags: [],
          url: '/travel-blog/train'
        },
        {
          img: 'https://78.media.tumblr.com/a19ba4a2de6cac639867e17e71394571/tumblr_per3xsHpGl1w9240l_1280.jpg',
          header: 'Tough Start',
          text: "How I've spent a day in Moscow.",
          tags: [],
          url: '/travel-blog/moscow'
        },
        {
          img: 'https://78.media.tumblr.com/b34d0d90d3818ac47e8f6e01332902c3/tumblr_pepbilKGIQ1w9240l_1280.jpg',
          header: 'Packing List',
          text: "How I'm overpacking on my five weeks trip. Still got a lot of space left in the backpack though.",
          tags: [],
          url: '/travel-blog/pack-list'
        },
        {
          img: 'https://78.media.tumblr.com/7e4e18a51be554ac82b1eb559a7a3925/tumblr_pen6boxw6J1xfbgtko1_400.png',
          header: "I'm Travelling",
          text: 'First blog about my trip and the travel route!',
          tags: [],
          url: '/travel-blog/im-travelling'
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
