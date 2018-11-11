<template>
  <article>
        <h1>Tokyo</h1>
        <p class="date">12.10.2018</p>
        <section>
          My second day in Tokyo I went out to a park and ate my breakfast looking at a nice pond.
          I sat at a bench next to a girl. I don't know how people can turn having an ant crawling on them into a long conversation.
          I would like that power. She was Saba from Canada, an electrical engineer, traveling Japan for two weeks, with an inspiering quote:
          I will try to go visit a new place each year.
        </section>
        <ImageSlider :images="imgs1" />
        <section>
          In the evening the hostel held a dinner party. Someone told me it was kind of famous as the international television channel had talked about it.
          Some Japanese come to practice their English. So we were a mix of guests, volunteer workers, and Japanese.
          There are a lot of travelers volunteering in this hostel. Working 20 hours a week for a free stay at the hostel.
          So we are a group of French, Canadian, USA's
          <HoverText :hoverMeClasses="'smiley'" :hoverMe="'🤷‍'" :hoverText="'I refuse to call them Americans! Just because a person from Chile, Canada, Mexico, Argentina, and all the other countries in America should be called Americans. Just as all the Europeans are called Europeans, it is not reserved for just one country in Europe.'"/>
          , Scottish, Paraguayan, Japanese, and me. There were drinking games.
          I would have liked to go out, but we just stayed at the hostel and went across the street when we had to buy more alcohol from 7-eleven.
          So I'm a little tired now as I'm about to leave the hostel and head for a capsule hostel.
        </section>
        <div class="center-container">
          <img class="mini" src="https://66.media.tumblr.com/5e23236b0ad70a37258cbbe3d44309ae/tumblr_pggkx1HRHo1w9240l_1280.jpg" />
        </div>
        <figcaption>Me leaving the hostel</figcaption>
        <section>
          Yes, I decided to change hostel. I liked being in this hostel. Just because of the people. The hostel has no style,
          everything looks bad and having just the minimum things that are necessary. Shady white walls and furniture self-built by planks.
          But I want to try the capsule hostels in Tokyo. That's why I'm changing.
          The working culture in Japan makes the capsule hostels quite popular. People working for many hours, maybe out of town.
          So they just rent a bed, sleep, shower, go to work again.
        </section>
        <ImageSlider :images="ninehours" />
        <section>
          The hostel was located in Tokyo's Koreatown. So by random, I ended up there. There were a few differences from elsewhere in Tokyo.
          One thing is that they eat cheese, a lot of it apparently. When I was looking at the menu's outside restaurants, it was like a normal menu, but everything had added
          melted cheese to the dish. And a super popular streetfood many booths sold, with long ques, was this deep fried melted cheese covered in sugar.
          It was a little good actually.
        </section>
        <section>
          Later that day I went to a shopping market, the oldest temple in Tokyo, and to the Tokyo Skytree.
          The Skytree gets you up to the height of 451.2 meters, casting shame onto Trondheims Tyholttårnet.
          In total Tokyo Skytree is the tallest tower in the world with it's total 634 meters!
        </section>
        <ImageSlider :images="skytree" />
        <img src="https://66.media.tumblr.com/e8b6ffd129d176a70f6694d32e0a9f85/tumblr_pggl2csi9J1w9240l_1280.jpg" />
        <figcaption>What do you think my record is on this obstacle course?
          <HoverText :hoverMeClasses="'answer'" :hoverMe="'Answer'" :hoverText="'35 seconds'"/>
        </figcaption>
        <section>
          On Thursday I started the day at the famous Tsukiji Market to taste some Sushi,
          just because I'm in Japan and romours has it sushi in Japan is something else and amazing.
          I found this popular restaurant with a lot of locals where the chefs are lined up and prepares the sushi in front of you.
          Everything was set up to finaly surender to the sushi hype. You know what?
          Sushi still sucks, even in Japan they forgot to fry or boil the fish.
          Afterwards I met up with Erran, Nicola, and Lauren. We went to the light museum, which was amazing. A labyrinth,
          with lots of different rooms. It was a maze trying to find every room. And it was amazing. There were so many cool lightings.
        </section>
        <ImageSlider :images="lightmuseum" />
        <section>
          After the light museum, we went out to eat at a dog restaurant. After that, I convinced them to join me for the rainbow bridge.
          I had this hope that it would be exactly as Rainbow Road in Mario Kart. I don't think they had put on as much light as they sometimes do on this evening.
          But we still walked it, it takes about 30-45 minutes. After that, they were pretty worn out,
          from chasing the lights at the museum the whole day and crossing the bridge.
          We were really close to the Tokyo tower when we were at the subway planning to go home.
          So I decided to leave the others and see it for myself. It was after all my last full day.
          I would have been angry at myself if I had overseen such a momentum when I was only 15-minutes walk away.
          Erran said 'You have such an endless energy', as we parted our different ways. I liked the Scottish trio,
          they were really lively.
        </section>
        <ImageSlider :images="imgs2" />
        <section>
          Tokyo has been big. There are many things and places I haven't seen. I have had a good time here. But it doesn't get into my top 3
          places in Japan, I have visited. Still beats Osaka by far though. Tokyo has been pretty easy to get around,
          as the train/subway/metro system is pretty easy to understand. The only struggle has been when you're at the station trying to find the track
          for the correct line and direction. But I always figured that out after some time as well.
        </section>
        <section>
          I am now done with Japan. Japan is so good! It is a little expensive though, as the prices sometimes feel like in Norway.
          And we all know that Norway is an expensive place. Also, a weird thing about Japan is that there are no trash cans.
          You end up carrying all your garbage with you until the end of the day.
          If you are lucky, you will find a store you can throw away your garbage at.
          Still, Japan was so clean compared to China, where they had trash cans all over the place.
          It must be their culture or something, as you probably have seen how the Japanese fans do after a <a href="https://www.youtube.com/watch?v=5iF1WSjN4uU" target="_blank"> match in the world cup</a>.
        </section>
        <section>
          I am coming back to Japan. Yeah, I'm pretty sure I will be back someday. Now I traveled the perfect time weather-wise.
          As the summer has just ended, and it's not too hot. But still hot, between 25-30 degrees. And I think I escaped the worst tourist periods.
          But I would like to go back during the cherry blossom spring time or autumn leaves color change time.
          Or perhaps at summer when the mount Fuji tracks are open for hiking.
        </section>
        <section>
          Some towns had their logo printed on the sewer manholes, I liked that. Too bad not all had it. So here is a quiz, which city are they from?
          <div style="display: flex;">
            <div class="manhole">
              <img src="https://66.media.tumblr.com/cce3074a348789fb694e8a1d372d1418/tumblr_pfyzqpMTpN1w9240l_1280.jpg" />
              <HoverText :hoverMeClasses="'answer'" :hoverMe="'Answer'" :hoverText="'Osaka. Fun fact; google manhole and you will see a photo just like this as your first hits.'"/>
            </div>
            <div class="manhole">
              <img src="https://66.media.tumblr.com/07b4df0ddb469a4efc9fe3dda5017832/tumblr_pg4eeynxpo1w9240l_540.jpg" />
              <HoverText :hoverMeClasses="'answer'" :hoverMe="'Answer'" :hoverText="'Nara'"/>
            </div>
          </div>
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'
import HoverText from '@/components/HoverText.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      ninehours: [
        {
          src:
            'https://66.media.tumblr.com/25b78ebf60c15ce0384f2773a9515de1/tumblr_pggkwxXTaX1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/6ff1f8130b9f937c73ba57a38229c247/tumblr_pggkwqdBZJ1w9240l_1280.jpg',
          cap: 'Hello there, come in and see my capsule.'
        },
        {
          src:
            'https://66.media.tumblr.com/e72bed2507ac4c475b8e01f41fe7c1a6/tumblr_pggkx6PNWh1w9240l_1280.jpg'
        }
      ],
      skytree: [
        {
          src: 'https://66.media.tumblr.com/ce11f12c0139a6e3c0b1aa5af50346e7/tumblr_pggl28vffN1w9240l_1280.jpg',
          cap: 'Tokyo Skytree'
        },
        {
          src: 'https://66.media.tumblr.com/2643c2c99bbd6828f60ec4dce673a3b6/tumblr_pggl2fEwkM1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/1b6fa3799d66d770fa7f3e93b5b82bbd/tumblr_pggl2jnSNW1w9240l_1280.jpg'
        }
      ],
      imgs1: [
        {
          src: 'https://66.media.tumblr.com/0da0fb492d89345b475ea11d84562f96/tumblr_pgd2ciJ9FH1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9daaaf1b015a92b18bfdefd16c54cfa4/tumblr_pgd2cphHha1w9240l_1280.jpg',
          cap: 'Shibuya Crossing. Rumoured to be the busiest intersection in the world.'
        }
      ],
      lightmuseum: [
        {
          src: 'https://66.media.tumblr.com/af6c45d0ef6402dc6f63226b05f18069/tumblr_pggtgvL70k1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e5660e0c121da0f928e923c01664f767/tumblr_pggth5LCAS1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9b81169f5b74a64e5ab55227d5381267/tumblr_pggtgiexEg1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/be24f4a2b93d314bba8081e6ff05e467/tumblr_pggth9om9O1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/e32a459273bdb0bcece095f38a0e0004/tumblr_pggtgmMzCk1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/7a5207489d31e1ec51b3783721733135/tumblr_pggth2tRvb1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/90cf260aa48572006b74a88044d1695e/tumblr_pggtgyaP7s1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/81a705b2d396c837a94cb35180504d48/tumblr_pggtgfwKkU1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/efe17d7536ae12924ee4c4459be00fef/tumblr_pggtgab1Pz1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/2bcff0c3797b2a97a1964186d2a8c433/tumblr_pggtgs9QBG1w9240l_1280.jpg',
          cap: 'Trampoline'
        },
        {
          src: 'https://66.media.tumblr.com/d639dca48795a687b065c898f1a1fad7/tumblr_pggth0CaG41w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/3d26ea3f5ffcba89df38734446bfecb2/tumblr_pggtgaVN981w9240l_1280.jpg',
          cap: 'I love how the lights gave me all these cool hipster t-shirts!'
        },
        {
          src: 'https://66.media.tumblr.com/f4142a5c9c012929887ea95fc72cb843/tumblr_pggtgqI8Rq1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/d71aafc45c7fd964f3905bf33916f532/tumblr_pggtgv7ROG1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/1409edc7b203026ba0a4f3c2aa1cd9a7/tumblr_pggtg51Cp61w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/afccd60f955239c7445d4d7f89567a11/tumblr_pggth4aXTX1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/72e7f89294513bb25d1658994f800451/tumblr_pggtgjSOIt1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/4027bb46c87d83e38e37f50ea9a1a923/tumblr_pggtgd2Ywf1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/412407fd52d401083f09a0918de45196/tumblr_pggtgn7pSs1w9240l_1280.jpg'
        }
      ],
      imgs2: [
        {
          src: 'https://66.media.tumblr.com/d2ad25140b0366e2edc235a58aff8f04/tumblr_pggtfgIHKD1w9240l_1280.jpg',
          cap: 'Rainbow Bridge'
        },
        {
          src: 'https://66.media.tumblr.com/8e3de69b76bdc5d8339d0f6653b71569/tumblr_pghpujqzma1w9240l_1280.jpg',
          cap: 'Tokyo Tower'
        },
        {
          src: 'https://66.media.tumblr.com/f7f8b56893ce9070a83b3e80bf7b3261/tumblr_pghpuh0OhK1w9240l_1280.jpg'
        }
      ]
    }
  },
  components: {
    ImageSlider, HoverText
  }
}
</script>

<style scoped>
img.mini {
  width: 300px;
}

.answer {
  background-color: var(--green);
  border-radius: 20px;
  padding: 10px;
  font-weight: bold;
}

.manhole{
  display: flex;
  flex-direction: column;
  width: 180px;
  margin: 5px 25px 0 0;
  align-items: center;
}
.manhole img{
  border-radius: 15px;
  margin-bottom: 5px;
}
</style>
