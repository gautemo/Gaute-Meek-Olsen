<template>
  <article>
        <h1>A Day in Novosibirsk</h1>
        <p class="date">12.09.2018</p>
        <section>
            I arrived at Novosibirsk at 06:00 in the morning. After walking for one hour and a half to get to my hotel,
            I took some hours just chilling in my room. What to do in Novosibirsk for a day alone? I listened to Google Trips,
            found some places to visit and things to see. And then started walking from place to place.
        </section>
        <ImageSlider :images="sightseeing" />
        <section>
            I also visited the Novosibirsk Zoopark, which has around 11 000 animals and 738 different species.
        </section>
        <ImageSlider :images="zooImages"/>
        <section>
            My thoughts on Novosibirsk. I really liked it here, the city felt old and not well taken care of.
            Buildings and transportation seemed really old and only fixed with duct tape when it was falling apart.
            With occasionally some splendid new buildings and cars in the mix.
            One thing to know about Novosibirsk is that the street blocks are really huge and takes a long time to walk.
            When I saw the city map, I was like 'just take the next right',
            but the turn finally came after several minutes I thought I had missed it by 4 or 5 times.
            So this day has contained a lot of walking and running to not lose so much time.
        </section>
        <div class="center-container">
            <img class="initial-width" src="https://78.media.tumblr.com/930b56ffd5a68ca680d5b278c49456be/tumblr_pewnm7iTUv1w9240l_540.png" />
        </div>
        <figcaption>46 157 steps, 3 497 calories burned and 35.87 kilometers. I need to eat more!</figcaption>
        <section>
            Now I'm heading back to the train station after a night of sleep, another hour and a half to walk.
            Unfortunately, I'm starting the day without showering away all the walking and running from yesterday, because the hotel
            has run out of cold water. Yes, cold water, not hot. I don't know how that is possible. So it was either skip the shower or being burned alive.
        </section>
        <ImageSlider :images="night" />
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180912',
  data () {
    return {
      zooImages: [
        {
          src: 'https://78.media.tumblr.com/841a2299f760844d12f7c81c163e9d6c/tumblr_pewnhqH7OX1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/50ee8f5235b80e54ad60e89bc46170e9/tumblr_pewnhuHDfL1w9240l_540.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/b1c7c3bf6bf084489e7d6885e761ed3e/tumblr_pewnijyEDO1w9240l_540.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/9a89ef5ac7f34f68f943c9d87d390146/tumblr_pewniezbZ31w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/971240165d43d283de99838ac624ea56/tumblr_pewnhzyT7q1w9240l_540.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/c1f84e119ace86787fc5f86ab001e840/tumblr_pewni7AMVg1w9240l_540.jpg'
        }
      ],
      sightseeing: [
        {
          src: 'https://78.media.tumblr.com/c81333b189bed03dbc50c9e87325989e/tumblr_pewnm2ThH21w9240l_540.jpg',
          cap: "How we felt when the city's first traffic light was built in 1936."
        },
        {
          src: 'https://78.media.tumblr.com/73b638738d2a0c0f422695257f8eeb38/tumblr_pewnlthk3f1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/a9cb175b996f6dd61f8f0e9055c16306/tumblr_pewnlnyHuO1w9240l_540.jpg'
        }
      ],
      night: [
        {
          src: 'https://78.media.tumblr.com/9f11130e95a8f2dfe6ce3068d76bc886/tumblr_pewnlhX8gj1w9240l_1280.jpg',
          cap: 'Novosibirsk by night'
        },
        {
          src: 'https://78.media.tumblr.com/f2efaa15d736949d41f9239df4b722d5/tumblr_pewnlx3sbF1w9240l_1280.jpg',
          cap: 'Novosibirsk by night'
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
