<template>
  <article>
        <h1>A Shift in Scenery</h1>
        <p class="date">13.09.2018</p>
        <img src="https://78.media.tumblr.com/8329dcd7ba47f6f89faeba044795f1c7/tumblr_pf07ce0vCh1w9240l_540.jpg" />
        <section>
          Another round on the Trans Siberian railway, this time for 31 hours to Irkutsk.
          So far I've been pretty alone on this trip, occasionally talking to some locals. But I haven't met any other traveler.
          I've been thinking maybe it's because I'm traveling off-season or maybe I'm on the road less traveled.
          Maybe this won't change until I attend the Circum-Baikal Walking Tour in Irkutsk,
          staying at the ger camp in Gorkhi Terelj National park in Mongolia, or at least staying in the hostels in China and Japan.
        </section>
        <section>
          But luckily I got a bed next to three girls from the Czech Republic on the train. None of us are perfect at speaking English,
          but we were good enough to keep the conversation going. One thing that was hard though,
          was jumping in and out of the conversation as they were switching between Czech and English a lot.
          We talked about all sorts of things, I also got some traveling tips for Japan, which is coming up in around two weeks.
          But mostly we played games, cards, dices and other games.
        </section>
        <img src="https://78.media.tumblr.com/cc887ebcaee58e46062a7654e42aa973/tumblr_pf07covDQg1w9240l_1280.jpg" />
        <figcaption>Me being a 'Losos'</figcaption>
        <section>
          At the evening we switched to drinking games, as they had brought 'Slivovice', a homemade apricot liqueur with around 40% alcohol.
          Saying they were going to make me drunk. But I think we in Norway have another drinking culture than in Czech.
          So that did not happen, even though they made special rules that made me take a shot if I won or lost, and they only when they lost.
          Giving me a 50% chance and them 25%.
        </section>
        <section>
          When I woke up, the scenery out of the window had changed. It was like the one night made us fall into fall (or maybe we just got to a new place).
          But the trees were now a mix between strong green, yellow and pure red. It was quite pretty. But hard to get any good pictures off, as when
          I saw a tree with only red leaves the train had rolled away before I got the phone up.
        </section>
        <ImageSlider :images="scenery" />
        <section>
          Now I have arrived in Irkutsk, having to walk 1 hour to my hotel.
        </section>
        <img src="https://78.media.tumblr.com/445132d55cd7a648f9f19842022f8c33/tumblr_pf0868PEs61w9240l_540.jpg" />
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180913',
  data () {
    return {
      scenery: [
        {
          src: 'https://78.media.tumblr.com/b962e13a454dea3773f57ce9b0a894ad/tumblr_pf07cb0XQ91w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/facbf7f0ed4a1bcb30a93abade7bb105/tumblr_pf07cxn89Q1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/bd1aa2af500d6fe099e8af91e0ab336e/tumblr_pf07ciLAnm1w9240l_1280.jpg',
          cap: 'Village along the way. Angle is not that good though.'
        },
        {
          src: 'https://78.media.tumblr.com/b153ccdee3f587244cbbd44512265eec/tumblr_pf07c7L0Eu1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/3caee52841816f73a4d528d5d93503cd/tumblr_pf07ct78SB1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/65563bebe8768384f06ab77cce017463/tumblr_pf07c3miJS1w9240l_1280.jpg',
          cap: 'There were quit a few graveyards along the railway.'
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
