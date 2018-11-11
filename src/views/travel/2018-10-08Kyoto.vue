<template>
  <article>
        <h1>Kyoto</h1>
        <p class="date">08.10.2018</p>
        <img src="https://66.media.tumblr.com/e1d6bcc0bb030768cdea53cc9b1fc1d7/tumblr_pg8f3nMtO31w9240l_1280.jpg" />
        <section>
          In Kyoto, I spent 3 nights at a 'futuristic' hostel. At least they try to be.
          They have packed every floor with tiny rooms. I liked having my own room again. Where you have one bed, quite large I think. A shelf over the bed.
          And space to store luggage under the bed. But no place to stand, except for on the bed.
          They give you an iPhone, to control the light, air-condition, the bed which can elevate the back,
          alarm (turns on the light and elevates the bed), and get information about the hostel. It is an abrupt way to wake up,
          having the bed throw you up so you can't lay flat.
        </section>
        <ImageSlider :images="millennials" />
        <section>
          In Ishigaki, I met Amy who is from Kyoto. So she had pinpointed every place I should visit while in Kyoto.
          The second day I went to Arashiyama, a place known for the tall bambus trees. It was a nice place. But the rain was pouring down
          parts of that day.
        </section>
        <ImageSlider :images="day1" />
        <section>
          Later that day I tried out onsen, everybody in Japan are talking about. It was a pinpoint I had to visit,
          and something you had to do while in Japan they told me at the hostel in Ishigaki.
          Onsen is kind of a spa area, where they have baths with naturally hot water from geothermally heated spring that contains a lot of minerals which should
          perform miracles on your skin. They are all over Japan.
          The onsens have all these rules, and they will get mad at you if you break them! Like if you have a tattoo,
          you will be yelled at and kicked out. One rule is that you have to be naked, which I thought would be weird! So I went in with this small
          towel (which can't touch the water), trying to figure out how this worked. No staring is allowed, but I had to look at people for what to do.
          But I just did it all before entering the baths, the bucket pouring, the shower, and the sit-down shower with soap and shampoo.
          Not doing as the rest, but I safed it.
          And the naked thing, it's not weird at all. The onsens are gender separated, so it's
          like never leaving the locker room.
          Being inside I just tried it all, indoor, outdoor, hot, ice-cold, bubbles, no bubbles, sauna, all the mineral-baths.
          The baths were a little too hot I think (except for the ice bath), so it was just partly a relaxing experience.
        </section>
        <section>
          The next day I went to Kinkakuji the Golden Pavilion, to other temple areas which were cool because of the bright colors on them. And then
          I went to the highlight of Kyoto. Fushimi Inari-taisha, a place with about 10 thousand torii gate shrines you can walk through for a couple of hours.
          In the beginning, you are walking in a crowded herd, because everyone thinks its amazing and are in selfie mode. But just wait taking photos <span class="smiley">🙅‍📸</span>.
          After 15 minutes with a lot of people, the incline begins with 15 new minutes of semi-crowdedness. But then it gets is a lot better, where you can walk freely
          and not circling people. You also will get parts where you are walking alone. Now take your pictures <span class="smiley">🤩🤪🤗📸</span>.
          It was a really nice place. Most people walk up, walk around the 40 minutes circle, take some photos, and then go down. I stayed for quite some time
          to see the sunset, walked around the circle three times, then went down in the dark.
        </section>
        <ImageSlider :images="day2" />
        <section>
          I feel I'm getting a little fed up with going to see all the temples. As Mongolia, China and Japan are packed with them.
          And every city has their must-visit temples. So it was nice that Kyoto had temples with uniqueness!
        </section>
        <section>
          I liked Kyoto a lot, but the city was much bigger than I expected. I didn't know anything about Kyoto, so I don't know why I thought it was small.
          Maybe its just coming from Norway, everything here are bigger.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      millennials: [
        {
          src: 'https://66.media.tumblr.com/4392eb432418f0406655172b17d51469/tumblr_pg4l58V13I1w9240l_1280.jpg',
          cap: 'Every floor had two or three corridors like this.'
        },
        {
          src: 'https://66.media.tumblr.com/96f368f2f82a6a5985640531878a6a27/tumblr_pg4l5cjYVD1w9240l_1280.jpg',
          cap: 'My room.'
        }
      ],
      day1: [
        {
          src: 'https://66.media.tumblr.com/5b9d58d493a385a8c70366fdc8be3902/tumblr_pg6kaxyVHW1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/857dc03a0909ed5128b6ff06c4d7590a/tumblr_pg6kaoBnYU1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/b87652b7e79b0c223252b74af689681a/tumblr_pg6kb5u7g81w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/b66d5b07777c385f390dc49ce20edde5/tumblr_pg6kbbIddE1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ee3bdf32d4ae9d41c99d055f92b203b7/tumblr_pg6kbiTZKw1w9240l_1280.jpg',
          cap: 'Kyoto is big.'
        },
        {
          src: 'https://66.media.tumblr.com/0540d00385c0cbe7588d5b7cb987e5b0/tumblr_pg6kajSOD91w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/a2f717c4b61f47a57a7405a2e223080e/tumblr_pg6katFQD41w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/53bd7b2e07c1f2cb4c761d90ff2b9e96/tumblr_pg6kb0g8BR1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/229eacec9519a6298b1deda91f4c41bd/tumblr_pg6kbfaPjl1w9240l_1280.jpg'
        }
      ],
      day2: [
        {
          src: 'https://66.media.tumblr.com/4ddc2a189afe8e0a6be3921fd77207ca/tumblr_pg8hy4NiC71w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/049278d2e095970be59133bd8933e440/tumblr_pg8hxzqjLm1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/56dd69b0e195ee1451175cc379f580cb/tumblr_pg8hy7Sgpu1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/39dc931e4abd99fa238133471bf76fce/tumblr_pg8hxvHKYO1w9240l_1280.jpg',
          cap: 'A woman drinking from a bottle.'
        },
        {
          src: 'https://66.media.tumblr.com/2ecfb87c46722d03bd54a6258a46ad0b/tumblr_pg8ii18jNM1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/cdff1121e167d32e832fe1d7cf0f43f7/tumblr_pg8ihrb3Tb1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/d5f6f4dec6dc255479a151dfbb2b4669/tumblr_pg8ihwrn1u1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/aac55d5b6ee0b816ded481672eea110d/tumblr_pg8ihnfvFo1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/57198775e32061df0ddb287ab0dd4e5d/tumblr_pg8ii6hO9B1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/f87284eae48ae06f63f4a3bb0b64a6ca/tumblr_pg8f39uiIK1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9e6b6a13168544d1f6d1ad9c03d90e5a/tumblr_pg8f3jqs3K1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e3d9534bf62b775556ee90be06658170/tumblr_pg8f3dzE3S1w9240l_1280.jpg',
          cap: 'What am I doing... 🤦'
        },
        {
          src: 'https://66.media.tumblr.com/42e653e27f4c567c78c8f946c6960e4a/tumblr_pg8f2zk8SL1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ad721dd1e533211435b609dbf9892437/tumblr_pg8f3qaygX1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9fb2e98f7244e2fafdb177c7c390c47b/tumblr_pg8f363z5b1w9240l_1280.jpg'
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
