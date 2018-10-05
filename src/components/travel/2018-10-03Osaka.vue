<template>
  <article>
        <h1>Japans Belly</h1>
        <p class="date">03.10.2018</p>
        <section>
          I have now left the beautiful island Ishigaki, now I'm entering Japan's main island.
          Starting in Osaka, also known as Japan's belly. What are bellies for? Food.
          Food is a big part of Osaka. I'm not traveling for the food experiences, as it's not that important for me.
        </section>
        <section>
          Until now I have had every transport and stay planned. Don't misunderstand, very little planning on what to do. But I always knew where to stay and where to go.
          All I know now is that I am in Osaka and am leaving Japan from Tokyo 11 days later.
          A day ago, I booked myself into a hostel in Osaka online. So I know where I'm heading first.
        </section>
        <section>
          The first day I spent getting to my hostel, strolling around a little nearby, eating, then sleeping.
          This hostel is big, with rooms containing 24 beds. As the common area is a cafe, also open to others. I'm not really meeting other people.
          But it's okay, I'm not planning on staying long in Osaka. Just two nights.
          But this is the first time since Mongolia that I'm sleeping on a bed where I don't feel the hard surface underneeth a thin mattress. The luxary.
        </section>
        <ImageSlider :images="imgs" />
        <section>
          My full day here has been spent walking around, seeing the Osaka Castle, some temples and shrines.
          I find the temples and shrines a little misplaced, as they are surrounded by the city. But the castle was nice,
          as it has a park around it. I spent 600 yen getting inside, which was a museum, with the view on the top floor.
          For me, it wasn't worth it. But seeing the castle from outside was cool.
        </section>
        <section>
          Later I went to the food market. Since I am in the belly and all. It was nice, tasted some local food.
          Then I waited for the sunset. So I could walk along the river in the dark and see the advertisment on the buildings light up.
        </section>
        <ImageSlider :images="imgs2" />
        <section>
          I like Osaka, but there aren't really that much to see. So if you have limited time in Japan, I would not stay here long.
          Opposite, if you have a lot of time on your hand, you should take your time and enjoy Osaka.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      imgs: [
        {
          src:
            'https://66.media.tumblr.com/42d07d6dffcd798788f8dcd6bd1a9812/tumblr_pg1sbrtGce1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/fe2b2f30c30b69290b8729eb15ff5928/tumblr_pg1sbw18jd1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/c01c5a3ea3bd0d7c4365958e07827e1d/tumblr_pg1sbfOKmK1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/6636994bf52dd50715f2654b1f974596/tumblr_pg1sb81M4Q1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/47f5c94ffa52d0ecb2816004875c0635/tumblr_pg1sbjjyEt1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/7e51f46265a7f21066f04c0e2c61235d/tumblr_pg1sbc8emR1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/757b42499ccd144aa21afddbb765f928/tumblr_pg1sbnK66j1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/72646c48a6d92bb3c9b884ac2c2ac67c/tumblr_pg1sfmNSLY1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/a3b786ff13626407df43387e20d47cff/tumblr_pg1sfhnmCi1w9240l_1280.jpg'
        }
      ],
      imgs2: [
        {
          src:
            'https://66.media.tumblr.com/b0a586529bd93221acea189ed919ad82/tumblr_pg1sd4C39T1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/69f1e2d54c9098abe321bf55742355ab/tumblr_pg1sda4YnM1w9240l_1280.jpg',
          cap: 'Thats freaking huge!'
        },
        {
          src:
            'https://66.media.tumblr.com/0e4ef01274e12a370651174605c21f9e/tumblr_pg1scndJxd1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/27299f2ef3e0e7115f0ccc283873a416/tumblr_pg1scrmdeS1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/4696d27e844589a08e6fb12a5719825d/tumblr_pg1scwpHTA1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/2380edbec2ebf86fc33dea6013b5275c/tumblr_pg1sd1dj6o1w9240l_1280.jpg'
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
