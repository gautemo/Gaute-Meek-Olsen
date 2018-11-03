<template>
    <div class="travel">
        <h1>My Travel Blog</h1>
        <p>I don't usually travel much, but when I do, you might see some content here.</p>
        <div v-for="blog in blogs" v-bind:key="blog.url">
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
          img:
            'https://66.media.tumblr.com/07b47c3b21104c3217fe3fb134e651cd/tumblr_ph9pb0V8hV1w9240l_1280.jpg',
          header: '4 days trip to Prague',
          text: 'I took a short solo trip to Prague.',
          tags: [],
          url: '/travel-blog/prague'
        },
        {
          img:
            'https://66.media.tumblr.com/e1611f1e20349dd398f8fffdf2201528/tumblr_pgngna5GML1w9240l_1280.jpg',
          header: 'The End',
          text: "I'm going home from Tokyo and ending my trip!",
          tags: [],
          url: '/travel-blog/home'
        },
        {
          img:
            'https://66.media.tumblr.com/8e3de69b76bdc5d8339d0f6653b71569/tumblr_pghpujqzma1w9240l_1280.jpg',
          header: 'Tokyo',
          text:
            'The rest of the days I spent in Tokyo and my final days in Japan.',
          tags: [],
          url: '/travel-blog/tokyo-two'
        },
        {
          img:
            'https://66.media.tumblr.com/355586f71abbfd91bcdf234f197c7d5a/tumblr_pgd2a3FeT21w9240l_1280.jpg',
          header: 'Worlds Biggest City',
          text: 'Entering the big Tokyo!',
          tags: [],
          url: '/travel-blog/tokyo-one'
        },
        {
          img:
            'https://66.media.tumblr.com/e1d6bcc0bb030768cdea53cc9b1fc1d7/tumblr_pg8f3nMtO31w9240l_1280.jpg',
          header: 'Kyoto',
          text: 'Kyoto! A cool city in Japan with a lot to see.',
          tags: [],
          url: '/travel-blog/kyoto'
        },
        {
          img:
            'https://66.media.tumblr.com/c272b480028840a971cafad735da563a/tumblr_pg2w4z6qC11w9240l_1280.jpg',
          header: 'Nara😍',
          text: 'Nara; home of the deers!',
          tags: [],
          url: '/travel-blog/nara'
        },
        {
          img:
            'https://66.media.tumblr.com/2380edbec2ebf86fc33dea6013b5275c/tumblr_pg1sd1dj6o1w9240l_1280.jpg',
          header: 'Japans Belly',
          text:
            "3 days in Osaka, also known as Japans belly. Why? Because it's in the center of Japan or that they are known for the food. Probably a combination.",
          tags: [],
          url: '/travel-blog/osaka'
        },
        {
          img:
            'https://66.media.tumblr.com/0391d768fa6fe805a48492ebfe14e509/tumblr_pfyzeitBsf1w9240l_1280.jpg',
          header: '💖Ishigaki💖',
          text: 'Ishigaki is a wonderfull island in Japan.',
          tags: [],
          url: '/travel-blog/ishigaki'
        },
        {
          img: 'https://pbs.twimg.com/media/Dn9IXA_XkAID1hs.jpg',
          header: 'Into the Storm',
          text: 'My first meeting with a typhoon.',
          tags: [],
          url: '/travel-blog/storm'
        },
        {
          img:
            'https://66.media.tumblr.com/9ec9bf0b0a0657c3df949e39e7a01ef1/tumblr_pfn9t22Ln31w9240l_1280.jpg',
          header: 'Beijing Part Two',
          text: 'How my last days in Bejing has been.',
          tags: [],
          url: '/travel-blog/beijing-part-two'
        },
        {
          img:
            'https://66.media.tumblr.com/a0b88dcefce0edea0315c31998f28e1a/tumblr_pfna98h3oh1w9240l_1280.jpg',
          header: 'The Great Wall',
          text: 'I went to see the Great Wall. Twice.',
          tags: [],
          url: '/travel-blog/great-wall'
        },
        {
          img:
            'https://78.media.tumblr.com/dd83f0d1624f13eab54780b5be7318a8/tumblr_pfn9ejqFIW1w9240l_1280.jpg',
          header: 'Beijing Part One',
          text: 'How my first days in Bejing has been.',
          tags: [],
          url: '/travel-blog/beijing-part-one'
        },
        {
          img:
            'https://78.media.tumblr.com/de001825b790b4e8fccc549eb8e8575b/tumblr_pfjwdvjt031w9240l_1280.jpg',
          header: 'Pink Train to China',
          text:
            'Final leg on the Trans-Mongolian railway. 31 hours from Ulaanbaatar to Beijing.',
          tags: [],
          url: '/travel-blog/pink-train'
        },
        {
          img:
            'https://78.media.tumblr.com/f10b2129070ecf16f43a93f53af17046/tumblr_pfeh2sC4fM1w9240l_1280.jpg',
          header: 'Ulaanbaatar',
          text: 'Checking out Ulaanbaatar and Mongolia.',
          tags: [],
          url: '/travel-blog/ulaanbaatar'
        },
        {
          img:
            'https://78.media.tumblr.com/07657ddde8c65bc233fb648ff51943e0/tumblr_pfes6dzaXq1w9240l_1280.jpg',
          header: 'Into the Wild',
          text:
            "How I've spent my four days in this beautiful [national park] sleeping in a [Ger hut].",
          tags: [],
          url: '/travel-blog/ger-camp'
        },
        {
          img:
            'https://78.media.tumblr.com/923d1b50a8f7e7bab28b093ec89657ef/tumblr_pfaubu0TCA1w9240l_1280.jpg',
          header: 'Chineese Train',
          text:
            "Third leg of my Trans-Mongolian railway trip. This time it's no longer a Russian train.",
          tags: [],
          url: '/travel-blog/chineese-train'
        },
        {
          img:
            'https://78.media.tumblr.com/673a27c8ac08c19fbf98e1ff1643b210/tumblr_pf1vczJTPD1w9240l_1280.jpg',
          header: 'Singing on the Railways',
          text:
            'In Irkutsk doing the Circum-Baikal Walking Tour to see lake Baikal.',
          tags: [],
          url: '/travel-blog/lake-baikal'
        },
        {
          img:
            'https://78.media.tumblr.com/8329dcd7ba47f6f89faeba044795f1c7/tumblr_pf07ce0vCh1w9240l_1280.jpg',
          header: 'A Shift in Scenery',
          text:
            'At the Trans Siberian railway from Novosibirsk to Irktusk for 31 hours.',
          tags: [],
          url: '/travel-blog/shift-in-scenery'
        },
        {
          img:
            'https://78.media.tumblr.com/a9cb175b996f6dd61f8f0e9055c16306/tumblr_pewnlnyHuO1w9240l_1280.jpg',
          header: 'A Day in Novosibirsk',
          text: 'What I did in Novosibirsk',
          tags: [],
          url: '/travel-blog/novosibirsk'
        },
        {
          img:
            'https://78.media.tumblr.com/a0962ceb27736c3b8c9a646ee281cd66/tumblr_pevh2lLaIF1w9240l_1280.jpg',
          header: 'Travelling Towards Time',
          text: 'Getting from Moscow to Novosibirsk.',
          tags: [],
          url: '/travel-blog/towards-time'
        },
        {
          img:
            'https://78.media.tumblr.com/d46e23ab8d931b5b44c0e991fdf23db8/tumblr_pesyw2ijO01w9240l_1280.jpg',
          header: 'My Meeting with the Train',
          text: 'How it was like entering the train and staying on it.',
          tags: [],
          url: '/travel-blog/train'
        },
        {
          img:
            'https://78.media.tumblr.com/a19ba4a2de6cac639867e17e71394571/tumblr_per3xsHpGl1w9240l_1280.jpg',
          header: 'Tough Start',
          text: "How I've spent a day in Moscow.",
          tags: [],
          url: '/travel-blog/moscow'
        },
        {
          img:
            'https://78.media.tumblr.com/b34d0d90d3818ac47e8f6e01332902c3/tumblr_pepbilKGIQ1w9240l_1280.jpg',
          header: 'Packing List',
          text:
            "How I'm overpacking on my five weeks trip. Still got a lot of space left in the backpack though.",
          tags: [],
          url: '/travel-blog/pack-list'
        },
        {
          img:
            'https://78.media.tumblr.com/7e4e18a51be554ac82b1eb559a7a3925/tumblr_pen6boxw6J1xfbgtko1_400.png',
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
