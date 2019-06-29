<template>
  <component :is="comp"></component>
</template>

<script>
const blogs = [
  {
    img:
      'https://66.media.tumblr.com/07b47c3b21104c3217fe3fb134e651cd/tumblr_ph9pb0V8hV1w9240l_1280.jpg',
    header: '4 days trip to Prague',
    text: 'I took a short solo trip to Prague.',
    tags: ['Czech Republic', 'Prague'],
    url: 'prague',
    comp: '2018-10-30Prague'
  },
  {
    img:
      'https://66.media.tumblr.com/e1611f1e20349dd398f8fffdf2201528/tumblr_pgngna5GML1w9240l_1280.jpg',
    header: 'The End',
    text: "I'm going home from Tokyo and ending my trip!",
    tags: [],
    url: 'home',
    comp: '2018-10-15Home'
  },
  {
    img:
      'https://66.media.tumblr.com/8e3de69b76bdc5d8339d0f6653b71569/tumblr_pghpujqzma1w9240l_1280.jpg',
    header: 'Tokyo',
    text: 'The rest of the days I spent in Tokyo and my final days in Japan.',
    tags: ['Japan', 'Tokyo'],
    url: 'tokyo-two',
    comp: '2018-10-12Tokyo2'
  },
  {
    img:
      'https://66.media.tumblr.com/355586f71abbfd91bcdf234f197c7d5a/tumblr_pgd2a3FeT21w9240l_1280.jpg',
    header: 'Worlds Biggest City',
    text: 'Entering the big Tokyo!',
    tags: ['Japan', 'Tokyo'],
    url: 'tokyo-one',
    comp: '2018-10-09Tokyo1'
  },
  {
    img:
      'https://66.media.tumblr.com/e1d6bcc0bb030768cdea53cc9b1fc1d7/tumblr_pg8f3nMtO31w9240l_1280.jpg',
    header: 'Kyoto',
    text: 'Kyoto! A cool city in Japan with a lot to see.',
    tags: ['Japan', 'Kyoto'],
    url: 'kyoto',
    comp: '2018-10-08Kyoto'
  },
  {
    img:
      'https://66.media.tumblr.com/c272b480028840a971cafad735da563a/tumblr_pg2w4z6qC11w9240l_1280.jpg',
    header: 'Nara😍',
    text: 'Nara; home of the deers!',
    tags: ['Japan', 'Nara'],
    url: 'nara',
    comp: '2018-10-05Nara'
  },
  {
    img:
      'https://66.media.tumblr.com/2380edbec2ebf86fc33dea6013b5275c/tumblr_pg1sd1dj6o1w9240l_1280.jpg',
    header: 'Japans Belly',
    text:
      "3 days in Osaka, also known as Japans belly. Why? Because it's in the center of Japan or that they are known for the food. Probably a combination.",
    tags: ['Japan', 'Osaka'],
    url: 'osaka',
    comp: '2018-10-03Osaka'
  },
  {
    img:
      'https://66.media.tumblr.com/0391d768fa6fe805a48492ebfe14e509/tumblr_pfyzeitBsf1w9240l_1280.jpg',
    header: '💖Ishigaki💖',
    text: 'Ishigaki is a wonderfull island in Japan.',
    tags: ['Japan', 'Ishigaki'],
    url: 'ishigaki',
    comp: '2018-10-02Ishigaki'
  },
  {
    img: 'https://pbs.twimg.com/media/Dn9IXA_XkAID1hs.jpg',
    header: 'Into the Storm',
    text: 'My first meeting with a typhoon.',
    tags: ['Japan', 'Ishigaki'],
    url: 'storm',
    comp: '2018-09-29Storm'
  },
  {
    img:
      'https://66.media.tumblr.com/9ec9bf0b0a0657c3df949e39e7a01ef1/tumblr_pfn9t22Ln31w9240l_1280.jpg',
    header: 'Beijing Part Two',
    text: 'How my last days in Bejing has been.',
    tags: ['China', 'Beijing'],
    url: 'beijing-part-two',
    comp: '2018-09-26Beijing2'
  },
  {
    img:
      'https://66.media.tumblr.com/a0b88dcefce0edea0315c31998f28e1a/tumblr_pfna98h3oh1w9240l_1280.jpg',
    header: 'The Great Wall',
    text: 'I went to see the Great Wall. Twice.',
    tags: ['China', 'Beijing', 'The Great Wall'],
    url: 'great-wall',
    comp: '2018-09-25GreatWall'
  },
  {
    img:
      'https://78.media.tumblr.com/dd83f0d1624f13eab54780b5be7318a8/tumblr_pfn9ejqFIW1w9240l_1280.jpg',
    header: 'Beijing Part One',
    text: 'How my first days in Bejing has been.',
    tags: ['China', 'Beijing'],
    url: 'beijing-part-one',
    comp: '2018-09-23Beijing1'
  },
  {
    img:
      'https://78.media.tumblr.com/de001825b790b4e8fccc549eb8e8575b/tumblr_pfjwdvjt031w9240l_1280.jpg',
    header: 'Pink Train to China',
    text:
      'Final leg on the Trans-Mongolian railway. 31 hours from Ulaanbaatar to Beijing.',
    tags: ['Trans-Mongolian Railway', 'Mongolia', 'China'],
    url: 'pink-train',
    comp: '2018-09-21Train4'
  },
  {
    img:
      'https://78.media.tumblr.com/f10b2129070ecf16f43a93f53af17046/tumblr_pfeh2sC4fM1w9240l_1280.jpg',
    header: 'Ulaanbaatar',
    text: 'Checking out Ulaanbaatar and Mongolia.',
    tags: ['Mongolia', 'Ulaanbaatar'],
    url: 'ulaanbaatar',
    comp: '2018-09-20Ulaanbaatar'
  },
  {
    img:
      'https://78.media.tumblr.com/07657ddde8c65bc233fb648ff51943e0/tumblr_pfes6dzaXq1w9240l_1280.jpg',
    header: 'Into the Wild',
    text:
      "How I've spent my four days in this beautiful national park sleeping in a Ger hut.",
    tags: ['Mongolia', 'Gorkhi Terelj', 'National Park'],
    url: 'ger-camp',
    comp: '2018-09-19Wild'
  },
  {
    img:
      'https://78.media.tumblr.com/923d1b50a8f7e7bab28b093ec89657ef/tumblr_pfaubu0TCA1w9240l_1280.jpg',
    header: 'Chineese Train',
    text:
      "Third leg of my Trans-Mongolian railway trip. This time it's no longer a Russian train.",
    tags: ['Trans-Mongolian Railway', 'Russia', 'Mongolia'],
    url: 'chineese-train',
    comp: '2018-09-16Train3'
  },
  {
    img:
      'https://78.media.tumblr.com/673a27c8ac08c19fbf98e1ff1643b210/tumblr_pf1vczJTPD1w9240l_1280.jpg',
    header: 'Singing on the Railways',
    text: 'In Irkutsk doing the Circum-Baikal Walking Tour to see lake Baikal.',
    tags: ['Russia', 'Irkutsk', 'Lake Baikal'],
    url: 'lake-baikal',
    comp: '2018-09-14Irkutsk'
  },
  {
    img:
      'https://78.media.tumblr.com/8329dcd7ba47f6f89faeba044795f1c7/tumblr_pf07ce0vCh1w9240l_1280.jpg',
    header: 'A Shift in Scenery',
    text:
      'At the Trans Siberian railway from Novosibirsk to Irkutsk for 31 hours.',
    tags: ['Russia', 'Trans-Mongolian Railway'],
    url: 'shift-in-scenery',
    comp: '2018-09-13Train2'
  },
  {
    img:
      'https://78.media.tumblr.com/a9cb175b996f6dd61f8f0e9055c16306/tumblr_pewnlnyHuO1w9240l_1280.jpg',
    header: 'A Day in Novosibirsk',
    text: 'What I did in Novosibirsk',
    tags: ['Russia', 'Novosibirsk'],
    url: 'novosibirsk',
    comp: '2018-09-12Novosibirsk'
  },
  {
    img:
      'https://78.media.tumblr.com/a0962ceb27736c3b8c9a646ee281cd66/tumblr_pevh2lLaIF1w9240l_1280.jpg',
    header: 'Travelling Towards Time',
    text: 'Getting from Moscow to Novosibirsk.',
    tags: ['Russia', 'Trans-Mongolian Railway'],
    url: 'towards-time',
    comp: '2018-09-11TowardsTime'
  },
  {
    img:
      'https://78.media.tumblr.com/d46e23ab8d931b5b44c0e991fdf23db8/tumblr_pesyw2ijO01w9240l_1280.jpg',
    header: 'My Meeting with the Train',
    text: 'How it was like entering the train and staying on it.',
    tags: ['Russia', 'Trans-Mongolian Railway'],
    url: 'train',
    comp: '2018-09-09Train'
  },
  {
    img:
      'https://78.media.tumblr.com/a19ba4a2de6cac639867e17e71394571/tumblr_per3xsHpGl1w9240l_1280.jpg',
    header: 'Tough Start',
    text: "How I've spent a day in Moscow.",
    tags: ['Russia', 'Moscow'],
    url: 'moscow',
    comp: '2018-09-08ToughStart'
  },
  {
    img:
      'https://78.media.tumblr.com/b34d0d90d3818ac47e8f6e01332902c3/tumblr_pepbilKGIQ1w9240l_1280.jpg',
    header: 'Packing List',
    text:
      "How I'm overpacking on my five weeks trip. Still got a lot of space left in the backpack though.",
    tags: ['Planning'],
    url: 'pack-list',
    comp: '2018-09-07PackList'
  },
  {
    img:
      'https://78.media.tumblr.com/7e4e18a51be554ac82b1eb559a7a3925/tumblr_pen6boxw6J1xfbgtko1_400.png',
    header: "I'm Travelling",
    text: 'First blog about my trip and the travel route!',
    tags: ['Planning'],
    url: 'im-travelling',
    comp: '2018-09-06TravelPlan'
  }
]

export { blogs }

export default {
  name: 'TravelBlog',
  data () {
    return {
      comp: null
    }
  },
  created () {
    const blog = blogs.find(b => b.url === this.$route.params.url)
    if (blog) {
      this.comp = () => import(`./${blog.comp}.vue`)
    } else {
      this.comp = () => import(`@/views/NotFound.vue`)
    }
  }
}
</script>
