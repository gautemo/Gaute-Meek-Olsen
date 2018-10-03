<template>
  <article>
        <h1>Singing on the Railways</h1>
        <p class="date">14.09.2018</p>
        <section>
          Before the trip, I had marked Lake Baikal as one of the big highlights. Lake Baikal is the largest freshwater lake by volume in the world,
          containing 22–23% of the world's fresh surface water.
          So I signed up for the Circum-Baikal Walking Tour.
        </section>
        <section>
          Before the trip, it was confirmed that this great English speaking woman was going to be my guide, which I had talked to online.
          But then, maybe because there were no other attendees this day, it was changed to an Oleg. He only knew a couple of phrases of English.
          We drove down to the forest closer to the Lake. Walked together down to the railways that until the middle of the
          20th century was part of the main line of Trans-Siberian Railway. Oleg tried to point and explain some stuff along the way,
          but using Russian words in the middle of the sentence left me clueless almost everytime he spoke. Oleg has a degree in medicine and is a doctor.
          But he does not currently work as it anymore. Now he guides me, I guess.
          Teaching me some Russian words like 'snake', 'road', 'path', 'minibus', 'lake' and 'rooster'. I'm never going to use this words.
          From the railways, I walked alone along the railways for about 2-3 hours. With a beautiful view of Lake Baikal all the time.
          Stopping along the way to swim, eat and swim.
          Legends say that whoever swims in Lake Baikal
          will add 25 years to their lifespan. Which means I'm now going to be 225 years old when I draw my last breath.
        </section>
        <ImageSlider :images="pics" />
        <section>
          I was this <span class="smiley">👌</span>
          close to stepping on a snake. When my foot was right above the snake, it started moving and hissing,
          and I jumped over it and we both ran in different directions. It was three seconds of panic... For the snake, I'm to cool for that. <span class="smiley">🤥</span>
        </section>
        <section>
          After meeting with Oleg again, we drove back to Irkutsk. This took most of the day, not leaving me with much time to explore the city.
          I walked around for about an hour. But I'm happy with prioritizing Lake Baikal over the city. Lake Baikal delivered!
        </section>
        <ImageSlider :images="city" />
        <section>
          The next day I'm going back to the train, now leaving Russia. Hello Mongolia. But first 23 hours of train time.
          Also, I don't know what's up with the Russian hotels and showers. This time the how water is not as it should be,
          leaving me with a cold shower as my only option. Maybe I just picked too cheap hotels... Or it's Russia.
        </section>
        <section>
          My thoughts on Russia, as I have now been here for seven days and am now leaving. I have been traveling this country kind of fast paced.
          This was on purpose, because I thought that Russia would be the least fun, 'hard' people, but still a place worth visiting.
          But Russia has surprised me, I like the places I have seen and the people has been kind. It has been much cheaper than I excpected, maybe
          it's just because I'm from Norway, but I still think it everything here has been low at cost. So if I could rewrite history, I would have stayed
          in this country for more days than seven. But I would have subtracted the days from work and not the other countries I am about to visit.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180914',
  data () {
    return {
      pics: [
        {
          src:
            'https://78.media.tumblr.com/c22e35ca8fccfcfe8564fd37bf7e2ceb/tumblr_pf1vcc1kwc1w9240l_540.jpg',
          cap: 'Pictures from the Circum-Baikal Walking Tour.'
        },
        {
          src:
            'https://78.media.tumblr.com/3471e28cd717f3dea1141ab816e87b07/tumblr_pf1vbuYnEH1w9240l_540.jpg',
          cap:
            "A snake me and Oleg saw on the way down. I don't know if it's dead or sleeping or whatever, I don't know snakes. Little did I know I was going to say hello to a live one later on."
        },
        {
          src:
            'https://78.media.tumblr.com/738db30818d9710452f96bbb9205c79e/tumblr_pf1vctn8Zl1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/381b4d1792b33b43a71b4f70db67dc6e/tumblr_pf1vd7s92t1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/7a295a9424649eac5f04cf90a0861025/tumblr_pf1vc0Hkkp1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/1df16848b6285f3e324f624aaf16f253/tumblr_pf1vcjY58k1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/299e319ec30b135b2aad9936072d2993/tumblr_pf1vd2Y1Cc1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/3c8a74ec6e79fd5ec22db43953673fc6/tumblr_pf1vcp3et11w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/2f183e1a7aab25d1c40f8f1e445a7c52/tumblr_pf1vdmDf8x1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/405933dd319e9fd60e42f078beacad8f/tumblr_pf1vcyjaTD1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/0d6268c1ccde8a5696f80874e9f15f50/tumblr_pf1vd8FcmE1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/9a783cbaab16962d029a84ffd7bdbd2f/tumblr_pf1vcrXle71w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/6cbfbbd59a556c8aa99b1f521802a037/tumblr_pf1vd48whW1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/6616feee8acc365585dacbd8a8b67ad0/tumblr_pf1vcu2p7d1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/99c6199197b37b9fc632aa855d9b071b/tumblr_pf1vdcVRtH1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/5ea90b7b417a8ab336d3b9cdddfd59d1/tumblr_pf1vdqs9bD1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/c6744244d4624ad1f4bb5294295c0487/tumblr_pf1vdhwjJr1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/030480ce8524a86a6f4053e5e17e6e01/tumblr_pf1vclpCmy1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/4c22820e0a40fdaefb4d9beacf3a9ff2/tumblr_pf1vd3Us3a1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/6ebdb43da9735f4306035488a067c5df/tumblr_pf1vcitKtc1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/49cc636cebf8d16d81fcbc27f1c3fe31/tumblr_pf1vcwrDmI1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/673a27c8ac08c19fbf98e1ff1643b210/tumblr_pf1vczJTPD1w9240l_540.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/a6621f9de78bcba101aeb2f9c209b64c/tumblr_pf1vc555Xp1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/be7673933c32600d421eacfc5371bc39/tumblr_pf1v8zxaV01w9240l_1280.jpg',
          cap: 'Me trying to time the splash to the shutter count.'
        },
        {
          src:
            'https://78.media.tumblr.com/78d3a49894a957d37608dad69f35ada8/tumblr_pf1v8ridxV1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/e389a0d99e322126926c2b270e76f361/tumblr_pf1v8mTHf51w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/c8f8f7e808d85a877009ef82d493ed0d/tumblr_pf1v94ofo81w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/1b4657b10e7ffdcb1d1e5dd8de678de4/tumblr_pf1v8oU1N01w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/08cb51c60a1fc19ddcb0b1cc977e2c85/tumblr_pf1v97C0ww1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/f97ed764897d9e7a15afb4425bcb1923/tumblr_pf1v91MUd21w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/76f0d0a05894dfb878838121f8572038/tumblr_pf1vcyLOM21w9240l_1280.jpg'
        }
      ],
      city: [
        {
          src:
            'https://78.media.tumblr.com/0e34effa2515d668613a2efa159991cb/tumblr_pf1vcokpN01w9240l_1280.jpg',
          cap: 'Images from Irkutsk'
        },
        {
          src:
            'https://78.media.tumblr.com/efb92f507fd969c601663ec7feed71b5/tumblr_pf1vcefmlt1w9240l_1280.jpg',
          cap:
            'The symbol of Irkutsk is a mythological monster known as the babr.'
        },
        {
          src:
            'https://78.media.tumblr.com/df08b862748edb1b58dc1b35f9f1f928/tumblr_pf1vcrhw4K1w9240l_1280.jpg',
          cap:
            "You might remember from day one, that I lost my card in the ATM. I thought it was a little early on the trip to start using my backup card. Thanks to Revolut I could just send a new card to my next destination. Now I'm ready to lose another card!"
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
