<template>
  <article>
        <h1>Nara😍</h1>
        <p class="date">05.10.2018</p>
        <section>
          Nara took me a little by surprise. A hero who walks among us mortals told me to go to Nara. Thank you!
          I don't know much about the city. I have just spent my time in this huge park/nature side of town.
          And I love it.
        </section>
        <section>
          I think I will keep the text short in this blog. But the pictures looooong...
        </section>
        <section>
          I'm staying in a hostel which is over 120 years old building. The style is a mixture of a modern building and the old buildings
          you see on movies and tv-shows with the samurais or something. It's quite cool!
        </section>
        <ImageSlider :images="hostel" />
        <section>
          After arriving and checking into the hostel, I went out to the Nara Park around 15:00.
          You should know that Nara is known for deers. According to the legendary history of Kasuga Shrine,
          the god Takemikazuchi arrived in Nara on a white deer to guard the newly built capital of Heijō-kyō.
          Since then, the deer have been regarded as heavenly animals, protecting the city and the country.
          There are a lot of protectors I can tell you. They are walking around everywhere, especially in Nara Park.
        </section>
        <section>
          Some deers shy away and some come straight to you. I have now cuddled with several deers. It is a unique experience.
          But there are a few mischievous deers walking around. There have been pushing, tackling and biting the ass.
          I won't tell you if it was by me or the deers. You can guess.
        </section>
        <ImageSlider :images="day1" />
        <section>
          I just walked aimlessly in the park, just randomly following paths. I've been stumbling onto ruins, shrines,
          temples and deers, deers, deers... The parks I have been telling you about in the previous post can not compare to this one.
          This is more than a park.
        </section>
        <section>
          The next day I woke up, showered, ate, and the headed straight to the park again!
          I love these deers. It is so cool!
          This time I entered the Toda-ji temple, which contains the worlds biggest bronze statue of Buddah.
        </section>
        <ImageSlider :images="temple" />
        <section>
          I also went up Mount Wakakusa, to get a view of the city and meet the top deers.
          After that I just walked around aimlesly again. I like that.
        </section>
        <ImageSlider :images="day2" />
        <section>
          I hope now you believe me that the deers are everywhere. Not just gathered at a part of the park. They are everywhere yoo go!
        </section>
        <section>
          Next, I'm heading to Kyoto. I like the Kansai region. It's so easy and short go get between the cities, as the train is less than an hour.
          I think I will stop at the three cities and then head to Tokyo. But I wish I had more time to travel around this region.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      hostel: [
        {
          src: 'https://66.media.tumblr.com/06a6aad11034cdcf6f7cc28f81b81970/tumblr_pg4dujwZnb1w9240l_1280.jpg',
          cap: 'Joking, this is not the hostel!'
        },
        {
          src: 'https://66.media.tumblr.com/d52483c0b86bbe2d6e5323557f579d2f/tumblr_pg2xm6VHqh1w9240l_1280.jpg',
          cap: 'This is the hostel :)'
        },
        {
          src: 'https://66.media.tumblr.com/601b5557e789679ce3ecd891b0c1d659/tumblr_pg4dufVupQ1w9240l_1280.jpg'
        }
      ],
      day1: [
        {
          src: 'https://66.media.tumblr.com/7963116de1fbfa798f892afbc59e7607/tumblr_pg2w4obFf31w9240l_1280.jpg',
          cap: 'The first deers I saw.'
        },
        {
          src: 'https://66.media.tumblr.com/1df6767ca7286d43855ed3d3301be30b/tumblr_pg2w5isgFs1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9d82c18fac53833e2764b5505006d587/tumblr_pg2w5efjJK1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/0886c0b5c90ae168b262ee0d0d47e92c/tumblr_pg2w4rgSnU1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/fdec1fbd8ffc9333d25c521fcc99ec8b/tumblr_pg2w5l6XFH1w9240l_1280.jpg',
          cap: 'He\'s crazy'
        },
        {
          src: 'https://66.media.tumblr.com/a4fd0f0795b281c84b9a1549cf3df77d/tumblr_pg2w5raRdu1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/48b60e902eb09b52666b20180a9b77a8/tumblr_pg2w4vYgK01w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/c272b480028840a971cafad735da563a/tumblr_pg2w4z6qC11w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/cafc469d09950dcc9bf5e8bbe18ac33b/tumblr_pg2w59Os311w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/97031c9c1bf1c8a453f84e79bbff5c55/tumblr_pg4evkyeFO1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e5d30974f254700c91c1f3a78e663b4e/tumblr_pg4evzQkFu1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/4f331406dcf2e31f6e9ceb2ab2e47002/tumblr_pg4ewgpDlM1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/a97f1a458e65010ff89734edd765d139/tumblr_pg4ewaDD3m1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/bcb5dc9f6fd0e9b034834f70335e35c2/tumblr_pg4evroXp41w9240l_1280.jpg',
          cap: 'Shrine, shrine, shrine, shirne, deer, shire, deer....'
        },
        {
          src: 'https://66.media.tumblr.com/12e5b32e7e06dfe9b0e1f15ac3dc217f/tumblr_pg4evuZHoC1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/79523b63c3119ebb545344b7c1bb73a6/tumblr_pg4ew2MyrH1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/73ab010f3e5267c3750d22b38b032c46/tumblr_pg4ew70IQr1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/94984710b19ed108003a1bd3dfeb9c5f/tumblr_pg4evnTG6i1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/659e3ad4bd284270cfca2e96e2e0fe70/tumblr_pg2xm3LZi31w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/f0699394ab1d0ff6663c2a7455864b92/tumblr_pg2xm9xA1M1w9240l_1280.jpg',
          cap: 'Nara by night'
        }
      ],
      temple: [
        {
          src: 'https://66.media.tumblr.com/06a6aad11034cdcf6f7cc28f81b81970/tumblr_pg4dujwZnb1w9240l_1280.jpg',
          cap: 'Toda-ji temple'
        },
        {
          src: 'https://66.media.tumblr.com/e0d146bf56c6a24e4ef48b3c6cbfa44a/tumblr_pg4effQfvP1w9240l_1280.jpg',
          cap: 'Worlds largest bronze buddah statue'
        },
        {
          src: 'https://66.media.tumblr.com/46f36c01100e78f6eb43f7649e9d5a65/tumblr_pg4efawF8m1w9240l_1280.jpg',
          cap: 'Selfie turned out dark...'
        },
        {
          src: 'https://66.media.tumblr.com/4835a05367ca7e41272c0b12fdccebda/tumblr_pg4eg0LsXL1w9240l_1280.jpg',
          cap: 'I guess I\'ll selfie with you instead'
        }
      ],
      day2: [
        {
          src: 'https://66.media.tumblr.com/99cbe306cc396953a9cda0fb888b4876/tumblr_pg4dunHo0e1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/18dd0410f7949ab9137060ec3a3f513a/tumblr_pg4dv1KKWh1w9240l_1280.jpg',
          cap: 'Dude, your walking on red light!'
        },
        {
          src: 'https://66.media.tumblr.com/9030708d072225ff9723ce0f356e8058/tumblr_pg4du4GRsK1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/99b670c42f0ae42986064474c2417961/tumblr_pg4dv55NB71w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/1a47eb502913e598059bf85809539401/tumblr_pg4duafOZX1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/b469ea395f47f1e428e6a99b073c3a5c/tumblr_pg4duvxWhc1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e4e2558b908266d3319fec01c15ee45b/tumblr_pg4duqeKxl1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/de87c67c05738c7ab83022a370f920d9/tumblr_pg4efuGW5D1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/b962726ad82dba029a6dda65c5ee5d0c/tumblr_pg4eg5b9A91w9240l_1280.jpg',
          cap: 'No you can\'t use this door'
        },
        {
          src: 'https://66.media.tumblr.com/48d1606189702b594271c65d05c7836b/tumblr_pg4efkCcVM1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/a373d06166a1b72f627d0bebfd63715c/tumblr_pg4eg9ivaY1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7aabf8e9603e54ca767f8d717b90e619/tumblr_pg4efpMf7y1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/c183e9d8906fe76b0920aecfbedcdd21/tumblr_pg4ef6hF6r1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/f1e5731b61807645b9860138a4f8a884/tumblr_pg4egfWqWW1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/562e0c24b81f16cfad64e8908c754e7c/tumblr_pg4eacySyW1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ea5030b7aaece2d73358d2d1ed9df5fd/tumblr_pg4eawfXMF1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e441fe91903312c515002c56765ebbe2/tumblr_pg4ealB7MT1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/8d0c5773ba1c4d650707dc38fcd08489/tumblr_pg4eb0tImf1w9240l_1280.jpg',
          cap: 'You dumb man!'
        },
        {
          src: 'https://66.media.tumblr.com/fac4ebe921c23bd9ac6b5dff12985dde/tumblr_pg4eagk1hN1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/41d5c3e15a43f19bf631830be5f4470c/tumblr_pg4ea8sIST1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/fbb3aa752c052bb3d78bdb7e7c2886b1/tumblr_pg4eb5oIV21w9240l_1280.jpg',
          cap: 'Just shopping some souvenirs over here. Don\'t mind me'
        },
        {
          src: 'https://66.media.tumblr.com/5f42c4139f8787ddcfa053a9f2c53329/tumblr_pg4eb90Xfm1w9240l_1280.jpg',
          cap: 'Small one'
        },
        {
          src: 'https://66.media.tumblr.com/0e375fd1b8a3dc5e091721b7aac1da4f/tumblr_pg4earmDSa1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/c9e1cb931d1804d6b828ceb279e6a48e/tumblr_pg4ef7J7o81w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/66d3d11bbea1ed41e27a1310f1989a03/tumblr_pg4ef2hcsj1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/f795319e8b1fe28ca5645e97295c8dd9/tumblr_pg4efb9nQ31w9240l_1280.jpg',
          cap: 'You made it through all pictures this time as well. The stamina.'
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
