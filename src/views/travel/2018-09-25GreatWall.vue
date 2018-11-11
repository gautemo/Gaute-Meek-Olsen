<template>
  <article>
        <h1>The Great Wall</h1>
        <p class="date">25.09.2018</p>
        <img src="https://66.media.tumblr.com/dbba490d047e6521e4bf648bc1faf0bc/tumblr_pfna94xaeu1w9240l_1280.jpg" />
        <section>
          I attended the Great Wall tour arranged with the hostel. We were 20 people taking a minibus for two hours.
          Then we got an introduction from 'Steve' who spoke Chinglish as he said. How the wall started being built 2700 years ago with a construction period of 2500 years,
          being 21 000 kilometers long,
          and 3 million died building it. As the Chinese had two choices,
          either join the war against the Mongolian or build the wall carrying the stones up to the mountains again and again with little water. Exhausting.
          He looked at it as two ways of dying, either way.
        </section>
        <section>
          We were at the Ancient Badali part of the Great Wall. Which is a wall that is not that restored and preserved, as the popular walls.
          It was really nice, as we were the only one on the wall. Except from like five Chinese which did not go that far up.
          I was afraid of seeing the wall with thousends of other torists, so this was just perfect!
        </section>
        <ImageSlider :images="ancient" />
        <section>
          Then we walked the wall for three hours. 'Going seven tours, you will be heroes' Steve said. It took a little over an hour getting there.
          Then I and Joris walked to the eight tower, and climbed up, to get on top of a watchtower. That was really cool, hoping it wasn't illegal,
          as it was not an easy climb or a place meant to be climbed. There were really steep parts of the wall, and not always stairs to make it walkable.
          As I walked with Cristine from Chile, she fell and couldn't get up to get down a steep part. So we both sat down, sliding down. Which was really fun and laughy.
          I'll try to remember that moment.
        </section>
        <section>
          The Great Wall was awesome, it is incredible how the wall goes up and down the mountains for as far as you can see in both directions. The Great Wall is typical
          a bucket list checkmark. But I think seeing and walking the Great Wall is more than that. So I went back myself to another part of the wall another day. Just because
          I think its the coolest thing to do in Beijing.
        </section>
        <section>
          This time I went to Badaling, which is the best preserved and most complete section. This way I have seen both ends of the spectrum, at least of the walkable parts.
          Badaling was magnificent. First I walked the south side, and then back. Then I walked the north side. Two different experiences, as the south side
          had very few people walking around, while the north side was very popular and had a huge crowd. Most part of it though, from the 8 to 12 watchtower on the north side
          it had very few tourists again. Maybe because its a very challenging part of the wall, with steep sections and a lot of up and down.
        </section>
        <ImageSlider :images="badaling" />
        <section>
          Before I was going to China, friends had warned me about people wanting to take pictures with me. Because I am tall, white and blond with blue eyes.
          But I had not experienced that at all so far. Maybe they were talking about Japan and not China, I can't remember. But when I entered the Great Wall it was like wildfire!
          I have taken countless selfies, posing with them, and a lot of sneak photographing. I even facetimed with someone elsewhere in China,
          as this guy wanting to show he was sitting next to me. I think I have a new profile picture,
          as I walked past this man with a camera larger than my head, all I could hear was *click* *click* *click* on and on. Too bad I will never see those pictures.
          I think they were good.
        </section>
        <section>
          Both sections of the wall has blown me away. Really glad I visited both places. I will have a hard time deciding which trip was best.
        </section>
        <section>
          The Great Wall *Recomended stamp*
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180925',
  data () {
    return {
      ancient: [
        {
          src: 'https://66.media.tumblr.com/f209e75f3ba7a990d4142c15ab3c96c9/tumblr_pfjz1iesRv1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/a8f3a59c0721d969b167f4274ba3a0da/tumblr_pfjz1p4u3j1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/4a355d926cb13f42066a912bbdc0bd3f/tumblr_pfk0noqwlA1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/b5da35167e2aab7e9f762c79f7313c55/tumblr_pfk0njYnz01w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/0ea2ee59e5856f8782c1c4a62a6100f1/tumblr_pfk0nzzgNc1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/d390f397e3f0bc8941d983535055e524/tumblr_pfk0nvW6I71w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/69db0e89952366fff39e385fb0cf8845/tumblr_pfk0ncs1pt1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/bd113e404ee37688b40aff1f87572ca2/tumblr_pfk0n8rjZ01w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/1eb7fb91d2db1c9269ef4e0b5587e73a/tumblr_pfk0nsgN5g1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/f9d96f067bc77096c289ed88b94e4667/tumblr_pfk0nf76v21w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e81112b41e3cfa95a9b5a5e9dc9b7cb6/tumblr_pfk0o3nTYl1w9240l_1280.jpg'
        }
      ],
      badaling: [
        {
          src: 'https://66.media.tumblr.com/48dce683bd651d4ff1e8495c93420bcf/tumblr_pfna63nAjB1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/5363544b6b17eed5ae82cc619b686315/tumblr_pfso1feDNB1w9240l_1280.jpg',
          cap: 'In Norway, we have this saying, if you dig even further now, you will end up in China. Which means I am now on the other side of the gravity-pull in Norway.'
        },
        {
          src: 'https://66.media.tumblr.com/9fcd698a10caf539cd2cc2c53f9b33e0/tumblr_pfna5iuC281w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/81f2cd4149d4553138d1deb34b2bfb61/tumblr_pfna52cYHU1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/1eee32c28c50e061d962acbd900c9e00/tumblr_pfna5aG5nf1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/2b3f5fdf6399d51cfc73e19d338841ce/tumblr_pfna565HM71w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/0f63f40f56995dfbffc7bcdcc01ace07/tumblr_pfna5uyTR91w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/a0b88dcefce0edea0315c31998f28e1a/tumblr_pfna98h3oh1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/3dd9443092969fb21f2d8ed0e8dc75ba/tumblr_pfna5zSPyf1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/852a5a10d9905c83ee4146c4a87e4924/tumblr_pfna5p5o7K1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7feb1bffa31a9c484c57b1355f20cbc3/tumblr_pfna5mN5fc1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/24e7dbe5a02d07c1da81c93b80086ef4/tumblr_pfna5ezG6Y1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7a451fdcf95d5fbe473924fd5d3b6633/tumblr_pfna91JaP51w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/57492b421b05f3dbe993720651fddecf/tumblr_pfna9d5lxe1w9240l_1280.jpg'
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
