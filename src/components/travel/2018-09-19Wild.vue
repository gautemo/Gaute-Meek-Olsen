<template>
  <article>
        <h1>Into the Wild</h1>
        <p class="date">19.09.2018</p>
        <img src="https://78.media.tumblr.com/07657ddde8c65bc233fb648ff51943e0/tumblr_pfes6dzaXq1w9240l_1280.jpg" />
        <section>
          After spending a few hours in Ulaanbaatar, I am waiting at the big statue in town, where someone from the camp I'm staying at
          has agreed to pick me up. Sitting on a bench, a group of Chinese tourists decides to casually sit next to me and take photos.
          After the lady doing this weird hand symbol pose in front of me, It's obvious I'm the attraction, not the big building behind us.
          I'm just sitting there awkwardly, not knowing what to do. Now it's soon time to meet the woman that's picking me up.
          The thing is, she told me to meet at the right side of the statue. That's so dumb, the right side could be any side.
          It all depends on which direction you are looking at the statue. So I decided to walk around it in circles until she saw me, because I had no idea
          who to look for. There were a lot of tourists, wedding couples taking photos, local sellers and locals, some of them looked weirdly at me
          as I had passed them a couple of times. But then a lady waved at me and it all worked out, to my relief as it was over a month ago we agreed to meet.
          She had not forgotten me.
        </section>
        <section>
          On our way to Gorkhi Terelj National Park, we pit-stopped at the biggest statue I have ever seen. Of Chengis Khaan, built by their President because he's so proud
          of Mongolian culture. Inside the statue is a museum. It was cool, I'm glad I got to see this on my way to the camp. Later we arrived at the camp
          and I was shown my Ger hut, which is where I will be sleeping. A Ger is Mongolian traditional round shaped dwelling that has
          been used since the Mongols started nomadic life with animal husbandry. In essence – it’s their home.
          Ger is portable, easily assembled and disassembled, and the most natural dwelling on earth.
        </section>
        <ImageSlider :images="jengis" />
        <section>
          The landscape here is beautiful! Big green hills and mountains all around, where horses and cows are roaming freely. The first day I climbed onto a mountain
          and just sat there listening to music and looking around until the sun disappeared.
        </section>
        <ImageSlider :images="day1" />
        <section>
          But I'm the only one at the camp. Which is kind of disappointing. I know I'm just outside the recommended time to stay at this Ger camps, and there are a lot of
          Ger camps here, so I guess we tourists are scattered around in Gorkhi Terelj. I've only seen a few others when I'm doing my day hiking trips. It's mostly
          couples I see. So I'm just probably a little late in the season. I can understand why, because it's been really cold at night. It's a little weird how
          it so cold in the evening, night and morning. But when it's daytime it's so hot I need to wear sunscreen. It's kind of like
          that the sun is heating the earth or something, weird right?
        </section>
        <section>
          The first day, being all alone at the camp made me feel lonely. It might have been getting little sleep the day before,
          the expectation of meeting other travelers at the camp, or sitting on top of the world listening to my music,
          which is in this <a href="https://www.youtube.com/watch?v=AdD8Emu-T64" target="_blank" >depressing-heartache relaxing music</a> category, which can set you in that mood.
          But it's okay, I think I enjoy my own company more than the rest of the world and like spending time alone.
        </section>
        <img src="https://78.media.tumblr.com/8a4a7f490bdf306d56dd7320844856db/tumblr_pfeu8pMhR81w9240l_1280.jpg" />
        <figcaption>You thought I ate alone because I'm the only guest, did you, huh!?</figcaption>
        <section>
          In the evenings a lady from the staff enters my Ger and fires up the fireplace. She's doing it by throwing in some firewood and then using a flamethrower
          to light the wood! But the fireplace is kind of small and the fire doesn't last long,
          so I throw in some firewood myself while it's still glowing enough to make the cube light on fire. And then a little later I'm falling asleep to the sound of
          horses making horse noises.
        </section>
        <img src="https://media.giphy.com/media/4Nrym65IhqdGPtaP2s/giphy.gif" />
        <section>
          There has been some relaxing days, doing just what I felt like myself. Each day I have done some hours hiking, seeing the famous turtle rock and a Buddhist monastery,
          but mostly I've liked just walking off-track. Just pointing at a random hill, and start walking up. Then there are always a new hill, mountain or valley to walk
          up or into. Being totaly alone in the wild, expect for some animals looking at me like I'm the attraction around here. In my days here I have also done some
          archery, reading, basketball, just looking,
          eating, netflix, sleeping and more.
        </section>
        <ImageSlider :images="day2" />
        <section>
          The staff is not that good at speaking English. So communication often goes through google translate. Sometimes successful, sometimes not.
          Please let me know if you know what 'the house will be eaten' means.
        </section>
        <section>
          A couple of days in there arrived this huge Chinese group to the camp late in the evening. But I won't even
          try to befriend them... But they left early in the morning anyway, don't know why they were here so short. The last day there arrived an English couple
          twice my age. We talked a little, where I told them about what's around, practical stuff at camp, and the Mongolian raisin water they drink.
        </section>
        <section>
          You know the sound from The Lion King when Simba is caught in the valley with hundreds of wildebeests that rushes through?
          Suddenly I heard that. Seconds later there are
          30 bulls sprinting through our camp in the middle of the Gers. I'm just standing on the left side in camp looking surprised.
          That's how it's like here. I don't know how familiar the bulls, cows, and horses are with humans.
          So when I walk around in this national park and they are passing the road or where I'm going. I always keep a little distance and wait until the last one has passed, not walking between them.
          But I have been so close to them, that if they had been angry at me, I would not have had a chance to get away.
        </section>
        <ImageSlider :images="day3" />
        <section>
          Gorkhi Terelj National Park has been magical and amazing! Wheather couldn't have been better while I was here, as it was sunny and hot each day.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180919',
  data () {
    return {
      jengis: [
        {
          src: 'https://78.media.tumblr.com/9542653ac43d03335edfc620b61d2169/tumblr_pfes69Z6a31w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/3bedc8ae0f5cdcb72ce9e1d33da3458b/tumblr_pfes5xHKpq1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/de0e5e0bcf753ec552240852fa2b3c12/tumblr_pfes64CfGq1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/faa3310d1bdadbb91144d80394bf15d0/tumblr_pfes6lojuE1w9240l_1280.jpg',
          cap: 'Famous people can pay to get their face on the to be 100 horse riding heroes.'
        }
      ],
      day1: [
        {
          src: 'https://78.media.tumblr.com/c75ccd4596f847bf3d8a8239afebb7b2/tumblr_pfes60skv91w9240l_1280.jpg',
          cap: 'My camp'
        },
        {
          src: 'https://66.media.tumblr.com/46c9c330ec876cad27b6364fe4fbae9d/tumblr_pfet2rd2pj1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/08a5c49f81e4f2d41730f9efe880a6ea/tumblr_pfes6pOdFF1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/124508cb5d4792c8068f20f447efdcf6/tumblr_pfes6hqUmN1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/93e53d9528c72179ccb155f8c9444450/tumblr_pfes6xyLQc1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/c1bfa18ba3350cb24540e6e8ef129f9b/tumblr_pfes6s2PVS1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/54ab95b3edfe61af3de58bee638b1e6e/tumblr_pfge79ESCG1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/8079b6742b54617722a2f1b663e6345c/tumblr_pfet35wP4W1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7830d2837984375ef351eeda915f4406/tumblr_pfet39vpGZ1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/c2ab78720e5f8e64dd0137035ee2ffb5/tumblr_pfet2eojVf1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/65bc2fa1e605dd67605c47fb87caf41d/tumblr_pfet31oOUm1w9240l_1280.jpg'
        }
      ],
      day2: [
        {
          src: 'https://66.media.tumblr.com/60d39a530e6406882d1c334c8279fb57/tumblr_pfet2vOkb11w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/3470081877033e28c4bf10d2f056924d/tumblr_pfet2bDeKK1w9240l_1280.jpg',
          cap: 'Turtle'
        },
        {
          src: 'https://66.media.tumblr.com/087e9c95928e49dd50aa142190cfe702/tumblr_pfet3daiNM1w9240l_1280.jpg',
          cap: 'There ware plenty of ladybugs on the turtle rock. Maybe it\'s actually a ladybug rock or the ladybugs thinks they are turtles.'
        },
        {
          src: 'https://66.media.tumblr.com/713825839bbe00b29ea3a55e6fb5e7ec/tumblr_pfet2nmmTF1w9240l_1280.jpg',
          cap: 'A bull staring at me.'
        },
        {
          src: 'https://66.media.tumblr.com/5aa9f920cad489d2b0d1b3f8b7bd4816/tumblr_pfeu13jl1p1w9240l_1280.jpg',
          cap: 'Entrance to the buddhist monistary.'
        },
        {
          src: 'https://66.media.tumblr.com/36d163ee1be71242d7ab3bb32af4e5dd/tumblr_pfeu0zYFmV1w9240l_1280.jpg',
          cap: 'First sign I meet after walking in. What\'s up with Buddhism?'
        },
        {
          src: 'https://66.media.tumblr.com/84af8e5ea52ab08e74b86c2590ba4d59/tumblr_pfeu17JxK01w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/701425e63a7046f809c1a1e8332f7e37/tumblr_pfeu0sDRu21w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/1342c2ab6722a3920a0fec0bd561d0e3/tumblr_pfeu0w2irH1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/abed24af06f66458d25a2114332f55ae/tumblr_pfeu1flV521w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/147c600b9db39f43e0af7c7313fd52ff/tumblr_pfeu1qoWvH1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e7a02a8c4c1f60beaba53440ee1685b4/tumblr_pfeu1j5Yui1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/497f2753a2ade9015ef6596c5dc1a2b8/tumblr_pfeu1rSYsc1w9240l_1280.jpg'
        }
      ],
      day3: [
        {
          src: 'https://66.media.tumblr.com/14b25a6629b1cad2d45b0a06a9831664/tumblr_pfeu1cUFnS1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/3ecd03a79af869faf2a674d6ac20e5f6/tumblr_pfeu1idk8B1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/fd272699227e0503864bece99cb292dc/tumblr_pfeu0h0LD81w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/33336c35ecbe1261597c09d0b90010cf/tumblr_pfeu18ml9Z1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7a3d6eae460b02fc55a6e9c2df8ce0a7/tumblr_pfeu11vSID1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/96049610d88f698951e3fc3b24129735/tumblr_pfeu0th0C61w9240l_1280.jpg',
          cap: 'This day I just walked up a hill, and then up the next hill, and into this new valley with no road or camp. Then suddenly I walk into a group of horses. As they walked past me they all stopped staring at me for every smallest move I made.'
        },
        {
          src: 'https://66.media.tumblr.com/00c291b7cab9f5058d3b0638ba633bb5/tumblr_pfeu0xRaC11w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/f7896dbd7c7d60b00a6dfd70915ff92f/tumblr_pfeu0q6wFu1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9813df98679b06ad6d476d0bd764cbf8/tumblr_pfgchm7BV91w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/89d014a0f58055dacf873e2e4c24ee8a/tumblr_pfgchrbQpi1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/84be9a362c5bd9f819dece11a7e224f4/tumblr_pfgd36S1221w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/c88b501aa6eb4b92b90864a992d14fcb/tumblr_pfgd41BuPU1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/87f085a601e79920f6f9badc7cda49af/tumblr_pfgd3dDOYN1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/da40a640bfc4e954e1f3b4a828c9ef99/tumblr_pfgd334vYF1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/abe162a1eb868c83ad23b2d885d0495e/tumblr_pfgd3huf9t1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/93b95aac98e010f5d6ff5fe289d5068d/tumblr_pfgd3pOutF1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/83bf16e2610efd1944f0fa9b60101713/tumblr_pfgd3mtkYf1w9240l_1280.jpg',
          cap: 'I know this blog post had a lot of images, but it was really beautiful here. This is the last one, congratulations you made it through all!'
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
