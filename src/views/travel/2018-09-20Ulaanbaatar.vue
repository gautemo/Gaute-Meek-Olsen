<template>
  <article>
        <h1>Ulaanbaatar</h1>
        <p class="date">20.09.2018</p>
        <section>
          I spent a few hours in Ulaanbaatar some days ago, and now I'm having almost a day here before I leave early in the morning.
          What surprised me was that the majority of the locals I spoke to talked English very well. So things have been much easier than
          in Russia.
        </section>
        <section>
          What did I do in the city? I walked around a little, trying to find things to see. My impression is that it's an okay place.
          But I'm glad I spent four days away from the city and only a day in Ulaanbaatar while I've been in Mongolia. I talked to a Swede
          who had done the opposite. Being four days in Ulaanbaatar and only a day trip to the Gorkhi Terelj National Park. We agreed that
          my days in Mongolia was spent better.
        </section>
        <ImageSlider :images="imgs" />
        <section>
          Ulaanbaatar is split into a poor side and a rich side. The reason for this is that a lot of the poor people sleep in
          Gers, as I have done for the last days. And when all the Gers make a fire to keep hot, the smoke gets all around the area.
          So the wealthy has settled on the other side of town to avoid the smoke.
        </section>
        <section>
          When you are crossing the zebra stripes in Norway, the car always waits if they see a pedestrian. Even some seconds away.
          Here it's nothing like that. It's the first one who gets in front of each other that gets to pass first. Whether it's the human or the car. So when the cars see me,
          they are like oh he's walking slowly, I'll speed up so I get in front of him and just drive away. And I think it's kind of scary
          to walk in front of a moving car just so I'll be in front of the car to make it stop. Later I just started walking creepingly close
          to the locals, so I got to pass the streets with them. Maybe they thought I was a pickpocket thief or something, but hey, I'm alive.
        </section>
        <section>
          At the hostel I stayed at for a night, it was me and a 71-year-old Japanese man in the room. He apologized in advance more times
          than there are ants on this planet for going to keep me awake at night because of his frequent toilet visits. 'You will not sleep'.
          But that was not really a problem, but his breathing was. It was this heavy, almost snoring like noise keeping me up. I slept some, but
          I think I will have some more hours on the train.
        </section>
        <img src="https://78.media.tumblr.com/b8de0cd4f9214efaa63f39258adbef01/tumblr_pfeh2krDWK1w9240l_1280.jpg" />
        <figcaption>View from hostel</figcaption>
        <section>
          Early in the morning walking to the train station, it was snowing. Only some hours ago I was walking around in shorts and a t-shirt
          feeling too hot. The changes are weirdly extreme. Walking with the Swede he said that he had told everyone back home
          <i>'Jag ska lämna vintern och komma tillbaka nästa sommar'</i>. He was now biting the sour apple, as we walked for 45 minutes in cold snow
          while in Sweden it's 20 degrees.
        </section>
        <div class="center-container">
          <img class="small" src="https://78.media.tumblr.com/cb0511945aea6ab3cb98a97706d547b8/tumblr_pfeh2o0Vac1w9240l_1280.jpg" />
        </div>
        <section>
          My thoughts on Mongolia as I'm about to leave. You can actually speak some English here, the people are friendly, and the country is cheap.
          Pro tip is getting out into the Mongolian nature!
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180920',
  data () {
    return {
      imgs: [
        {
          src: 'https://78.media.tumblr.com/4d9916cfef6407bee093d7bb10f00d8a/tumblr_pfeh27QPLV1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/83b3ec533389889531949ee3c6e8eb4b/tumblr_pfeh2e1fTx1w9240l_1280.jpg',
          cap: 'I\'m in Liverpool. I think?'
        },
        {
          src: 'https://78.media.tumblr.com/25504874f64768503a2d76af6be4c890/tumblr_pfeh23Vyrh1w9240l_1280.jpg',
          cap: 'First time millonair!!! Please don\'t calculate how increadible much this is in NOK.'
        },
        {
          src: 'https://78.media.tumblr.com/7409efdd252910f4c3c62b4cd100f5a5/tumblr_pfeh1z5H3o1w9240l_1280.jpg',
          cap: 'Dragon peace!'
        },
        {
          src: 'https://78.media.tumblr.com/a511581f9c7f2b05cd216ce150d73f83/tumblr_pfeh2xmRnr1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/f10b2129070ecf16f43a93f53af17046/tumblr_pfeh2sC4fM1w9240l_1280.jpg',
          cap: 'The statue I walked around and around.'
        },
        {
          src: 'https://78.media.tumblr.com/c1d360682428465675286a48c1811a0c/tumblr_pfeh31DykF1w9240l_1280.jpg',
          cap: 'Wall dedicated to the sustainable development goals for 2030'
        },
        {
          src: 'https://78.media.tumblr.com/79b4e6a43706247654c28879b7674048/tumblr_pfeh2baEzE1w9240l_1280.jpg'
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
