<template>
  <article>
        <h1>Beijing Part Two</h1>
        <p class="date">26.09.2018</p>
        <section>
          On my last days in Bejing I went sightseeing, hung out with friends, took a trip to the Great Wall again and I don't know probably some other things.
          Beijing has been a little non-stop, as there were always something happening. I haven't just sat down and done nothing, which is nice in between.
        </section>
        <section>
          One day I went to the Temple of Heaven. It is a round temple in the middle of a green park.
          So you get a little bit of both the spectacular buildings and park life.
          It was a good day.
        </section>
        <ImageSlider :images="heaven" />
        <section>
          One of the days was the Mid-Autumn Festival in China. A festival where Chinese celebrate the full moon and eat mooncake. So I, Damien and Jack went out
          to town and to the night market. We didn't really see anything spectacular, just some more lightings in the streets. So we did as every Chinese and ate mooncake.
          As we entered the night market, the first booth sold scorpions to eat. We decided to eat one. It was crunchy with not much taste. I hope it wasn't poisonous.
          As we walked further into the night market, pleased with ourselves, we saw another booth selling scorpions with the size of a fist. We were just like 'nope...'.
          As the one we ate was just the size of a fingertip, making us feel not that impressed by ourselves anymore.
        </section>
        <ImageSlider :images="nightmarket" />
        <section>
          The day I went to the Great Wall on my own, I took the bus back with two from India which I met on the wall. After the bus ride, they asked me to join a bar.
          I'm kind of this always saying 'yes' person, so I agreed to join. After one beer, they were like; We do as in India, having one beer at the bar,
          then going to the supermarket to buy two beers that you drink on the street, then back to the bar for a beer. 'It's cheap'.
          They were really open and friendly. A little too much. Another world from what I'm used to. I think we Norwegian have something to learn.
        </section>
        <section>
          Now my time in Bejing is over. I have had a great time. As of my previous concerns;
          <ul>
          <li>Communication - hard, but better than Russia.</li>
          <li>Getting around - subway was easy to understand but complicated as there are many lines and a lot of transfers because of the huge city.
            The bus to the Great Wall was also manageble.</li>
          <li>Air pollution - not noticeable. I have heard that it could vary from day to day, but I didn't feel it any of the days here.</li>
          <li>The great firewall - VPN worked fine so I could do anything as normal on my phone and computer.
            I had some problems being disconnected all the time, I don't know if it was because of the wifi or VPN.</li>
          <li>Food - the food was really good. A lot of noodles.</li>
          <li>Cleanliness - not really that clean. A lot of places felt dirty, but it did not ruin any experience.</li>
          <li>Crowdedness - there are a lot of people here, but it wasn't as bad as expected.</li>
          </ul>
        </section>
        <section>
          China is big, and I just saw Beijing. 6 days for Beijing was a good amount. But I would like to come back to China, then to see other places.
          So next time I will set aside more than 3 weeks just for China to get around. Before my trip, I was like; 'I'm going to Asia to eat wok!'.
          Wok is on my top 5 food list. Later I have found out that wok is from south China, but is also popular in some parts of Asia. Beijing had none!
          Nowhere! So I will see you next time wok...
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      heaven: [
        {
          src: 'https://66.media.tumblr.com/4ce82d28c67e029554d57c0f82eefaf4/tumblr_pfn9tm6p3B1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e870271ecbee96eee9ef9fd1e2a8ceaf/tumblr_pfn9t7uNk11w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ab050c10f36031c2afa332bc49d0e9e1/tumblr_pfn9trGH1l1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9ec9bf0b0a0657c3df949e39e7a01ef1/tumblr_pfn9t22Ln31w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/917245be33047b9707fe05e3e18e3f46/tumblr_pfn9tdPQym1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/8ecabef3dc5f07cb52612c29235ec948/tumblr_pfn9tvyF1a1w9240l_1280.jpg',
          cap: 'Just one person had walked through this door. The emperor was old and not fit to walk the usual distance to the ceremony, so they made a new door for him. He was concerned that his descendants would get lazy, so he made a law that just his descendants could walk through this door, but only after they turn 70 years old. No one ever got that old.'
        },
        {
          src: 'https://66.media.tumblr.com/e576cd8a8e82d7ec11ea4e6147687919/tumblr_pfn9tijtuT1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ad0082a2343aeecfbc34d10a91acb0f7/tumblr_pfn9tz6xeN1w9240l_1280.jpg'
        }
      ],
      nightmarket: [
        {
          src: 'https://66.media.tumblr.com/44e57c0c9ed531ba4e619417c6edd763/tumblr_pfn9yvSogH1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/232ab93f1fd3deece2959392125a7027/tumblr_pfn9yghw8Y1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7a21dbcfe47b64bfed04e0519f9a75de/tumblr_pfn9yjeY7T1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9e640f2159e821bb259087270e4cd6ee/tumblr_pfn9yrODHx1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/0f78977cd1637c4d9d46f8593d484883/tumblr_pfn9ynSsXd1w9240l_1280.jpg',
          cap: 'Mooncake'
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
