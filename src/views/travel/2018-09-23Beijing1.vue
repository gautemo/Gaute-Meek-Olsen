<template>
  <article>
        <h1>Beijing Part One</h1>
        <p class="date">23.09.2018</p>
        <section>
          As luck would have it the Dutch-Irish couple, who I later found out were cousins, Swedish Jake and me were all staying in the same hostel in Beijing.
          So I and Jake walked there with screenshots of the map because China and Google maps aren't friends. The hostel was quite huge, with many people.
          The first evening I sat in the common area, realizing I was going to struggle to get in touch with people as there only was large groups hanging out.
          But the second day I joined the couple from train-leg 3 to a Great Wall tour the hostel was arranging. The Great Wall deserves its own blog post so I won't tell you anything about it now. We were a group of about 20 people. That was the start of a network, which grew a little in all directions.
          So now I can sit in the common area, which is a bar at the hostel, and always find someone to be with or someone to go out and eat with.
          In the evening after the tour, I joined the
          'Peking Duck Team' as one girl called us. Eating and drinking until the night.
        </section>
        <section>
          Coming into China, I think you should be prepared for some things. First thing is that you need to set up VPN before you get into the country.
          Yeah, yeah, social media isn't that important. All kind of websites and apps are blocked. You need it to use Google as well. And I think it's important for finding out
          what to do in Beijing as well as how to get around to the places. You should also know how to use chopsticks, as it is the only choice.
          I have tried it a little in Norway, but I'm quite bad. But there is something about the Chinese air, if you breathe this air,
          you will immediately get really good at using chopsticks! So I'm now managing to pick up every kind of food, even the small rice grains.
          And that was surprisingly from the start. I might still have the wrong grip, but who cares.
        </section>
        <section>
          I am sleeping in a room with 10 others, and the bed is hard. Extremely hard compared to Norwegian beds. But It's okay, I'm sleeping really good there as well.
          We are keeping a door to the street open to get some air. So a few mosquitoes have gotten inside. 'What's the difference between girls and mosquitoes?'
          The mosquitoes choose me! *Scratch* *Scratch*
        </section>
        <ImageSlider :images="imgs" />
        <section>
          The next day I went to the forbidden city. The temples were really elegant, and I liked it. But after a while,
          it was just the same all over again as I walked through it. And it was packed with Chinese tourists, checking out their own country.
          So it kind of went from awesome to boring. But after exiting on the north side, there is the Jingshan Park. I liked that a lot better,
          as there is a nice round temple on the top. With a really good point of view. Looking out over the city and seeing the forbidden city from above.
          Afterwards I walked to Qiongdao Island, which I liked.
        </section>
        <ImageSlider :images="paintings" />
        First impression of Beijing is; I like it!
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180923',
  data () {
    return {
      imgs: [
        {
          src: 'https://78.media.tumblr.com/e0e9143a4e2ee96647357bd27a8855ca/tumblr_pfn98yJVHu1w9240l_1280.jpg',
          cap: 'Walked into the Zhongshan Park without actually knowing what I bought myself into, but it was nice!'
        },
        {
          src: 'https://78.media.tumblr.com/73dc0c510de889c17e921c7ec632dc2b/tumblr_pfn99crUZq1w9240l_1280.jpg',
          cap: 'Forbidden city'
        },
        {
          src: 'https://78.media.tumblr.com/da30d2b5e3f01d685e041306c7508866/tumblr_pfn997JEfi1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/1b8ea5fa942cf2d46f3769f1975fdd68/tumblr_pfn99hDgAl1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/f41b4335bdea47e3a770d669227ab3bc/tumblr_pfn98p9eEI1w9240l_1280.jpg',
          cap: 'Jingshan park'
        },
        {
          src: 'https://78.media.tumblr.com/2f948dd469fb0d181ca009e9e85783ef/tumblr_pfn9934h8D1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/79aeab8bbb485041de4e2cde74dcc302/tumblr_pfn98uA9vP1w9240l_1280.jpg'
        }
      ],
      paintings: [
        {
          src: 'https://78.media.tumblr.com/dd83f0d1624f13eab54780b5be7318a8/tumblr_pfn9ejqFIW1w9240l_1280.jpg',
          cap: 'Just some paintings at Jingshan park I thought was cool.'
        },
        {
          src: 'https://78.media.tumblr.com/1528873dc1359170f75f9d2522f77629/tumblr_pfn9f2VAWg1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/4e0f4004e4ce64961a69441e15db3896/tumblr_pfn9f62AVm1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/2ad851ac38bc08303281774000d9cc95/tumblr_pfn9fgNExZ1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/7339b9fbcd9cddf9477820b6b33de0d8/tumblr_pfn9erWB4O1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/f35ff07aaf3817d95708925f68ee8bfc/tumblr_pfn9enlNbb1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/79d8d2fdecea0e020ad651974b2efc81/tumblr_pfn9fd0rPY1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/4d188edc82f9cd4b8d7e1670f94de569/tumblr_pfn9f9Vcg11w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/c30e104c9663c24514903e5e4f1f9949/tumblr_pfn9evvllD1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/aab63c242cd85755264f9e3c7b1646fd/tumblr_pfn9eyk8Qy1w9240l_1280.jpg'
        }
      ]
    }
  },
  components: {
    ImageSlider
  }
}
</script>

<style scoped>
</style>
