<template>
  <article>
        <h1>4 days trip to Prague</h1>
        <p class="date">30.10.2018</p>
        <section>
          So I'll just get this memory down to the travel blog to prepare for when I'm getting Alzheimer.
        </section>
        <section>
          The thing is that I just scrolled on Twitter when Firebase suddenly announced that you could apply for a ticket to their developer summit in Prague.
          I love developer conferences, so I just applied hoping work would sort itself out allowing me to go. The summit was on Monday, so it was perfect to
          get some extra days in Prague by spending the weekend there.
        </section>
        <section>
          Arriving the first day and just strolling around in the city, threw the backpacking feeling of traveling solo straight back at me.
          Since it's only been two weeks since I ended my backpacking trip, I think it was easy to get back in the mode. And I love it.
          Prague is a nice city with a lot of medieval buildings. A perfect city to just walk around in and enjoy the feeling of not needing to do anything.
          I like the vibe of the city.
        </section>
        <ImageSlider :images="day1" />
        <section>
          I checked in to a party hostel, which was kind of a blessing and a curse. As the hostel held free diners, drinking games and going out as a group at night.
          The blessing was having people to be and have fun with, and the curse was being wakened up by people getting home late at night when I needed to wake up early for
          the summit with a clear focus. But I'm exaggerating a little. It was only like a 20% blessing and 20% curse.
        </section>
        <section>
          It's weird how new faces seems so familiar straight away. After just five minutes with them, its like they are someone I have been around before.
          But I haven't, they're completely new to me. I feel this now, but also on my backpacking trip. Sometimes after a while, I remember who they remind me of,
          and sometimes not. It's like the <a href="https://www.youtube.com/watch?v=tlTKTTt47WE" target="_blank" rel="noopener">simulation</a> is failing me!
        </section>
        <section>
          With the hostel people, they guessed I was 20 years old. Maybe I have a really young face? I don't know. Then I told them I was 38 years old,
          and the response was 'oh, really'. Liked they believed it. Am I just hard to place, agewise? You outsiders (outside my head) can tell me.
          To the readers who don't know me, I'm 16 years old, just so you got a reference to the numbers I threw out.
        </section>
        <ImageSlider :images="day2" />
        <section>
          As luck would provide, it happened to be Czechoslovakia's 100th years anniversary on Sunday.
          Maybe it was planned by Firebase to have the event just the next day to the anniversary. But I will consider it as me being lucky.
          But I'm a little disappointed in the Czech people, as walking around in the street seemed just like a normal day.
          Maybe it was due to it raining all day. But in the evening, 19:18, they held the biggest fireworks ever being done in Czech.
          That was super cool. A lot of amazing fireworks being sent up while music is played accompaning it.
        </section>
        <ImageSlider :images="fireworks" />
        <section>
          Then Monday came around and it was time for the Firebase summit (Firebase is a product/service from Google). I will not talk about the summit,
          except to say that it was really cool and I enjoyed it a lot! Attending talks and workshops.
        </section>
        <section>
          Luckily some cool Norwegians found me at the summit. Ivan randomly saw my attendance badge with my Norwegian name and I got in touch with
          three other Norwegian developers from Shortcut. It was perfect, then I had someone to hang out with at the social hour and afterward we went out
          to eat a burger and have some drinks. I like them and it was really nice spending the evening with them! But I just got to say it, the day before they met me,
          they took an uber for 45 minutes for just an 8 minutes walk... Just saying. <span class="smiley">🤦</span> Crazy stupid.
        </section>
        <ImageSlider :images="firebase" />
        <section>
          Afterward, I walked home to the hostel, when suddenly I walked past a group that seemed familiar. And at the end was Joe from
          USA and we stopped doing this handshake thingy which I'm awkwardly trying to do by following his lead but is very natural for the Americans.
          The group was my hostel group! So I ended up joining my hostel group going out to town. I hadn't seen them all day,
          and there had been some changes to the group as some had left the hostel and new ones joined.
        </section>
        <section>
          Around 1 or 2 at night I and two Canadian girls decided to quit and go home. When we talked they told me that 'Your the coolest in this hostel',
          which is bizarre and something I never would have thought out of a group of 30 people. Also 'You're the one we connected the best with', what's going on?
          I'm the shy one, not contributing to much talk. But I could tell they were genuine about it, so it was nice to hear. They tried convincing me to stay two more days,
          but I'm still going home tomorrow.
        </section>
        <section>
          A solo trip to Prague has been really nice, even though it's just for a few days. I recommend Prague, it has a lot to see and is a city with a good vibe.
          I think I will do this kind of solo trips around Europe some more, just for a weekend or a little more. Why not, I had a really good time.
          So next time I don't need a reason like an event to go, I'll just randomly find a new city in Europe.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      day1: [
        {
          src: 'https://66.media.tumblr.com/07b47c3b21104c3217fe3fb134e651cd/tumblr_ph9pb0V8hV1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9661403832abb8522c5f888a65ebcbe0/tumblr_ph9pbnauAT1w9240l_1280.jpg',
          cap: 'The Prague Astronomical Clock, or Prague Orloj, is a medieval astronomical clock located in Prague. The oldest part of the Orloj, the mechanical clock and astronomical dial, dates back to 1410.'
        },
        {
          src: 'https://66.media.tumblr.com/fd5b5a390f882e5709ef988eda2ac315/tumblr_ph9pbrmr3h1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/bc15a6f355f72da3556e722db5caf5d8/tumblr_ph9pb5nvvc1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/eb4477524a42a03c133de683755feb27/tumblr_ph9pbkQ3JJ1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ed05cfa988976c3b0ea3f8ef49be72af/tumblr_ph9pbgfdsM1w9240l_1280.jpg',
          cap: 'Hi there!'
        },
        {
          src: 'https://66.media.tumblr.com/3c5692d37b0ae86a15e973716e40e7b5/tumblr_ph9pat6yhJ1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/5b22c1427f21fd9eb8cd374e2693fa77/tumblr_ph9pbwLt981w9240l_1280.jpg',
          cap: 'Charles Bridge'
        },
        {
          src: 'https://66.media.tumblr.com/352ac5efb8b89eeb5288c3bb01fb4fbd/tumblr_ph9pax9Yqg1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/ae7b5dd979dc4a259b7810b5a895e8af/tumblr_ph9pbbzOld1w9240l_1280.jpg',
          cap: 'On top of Charles Bridge Tower'
        }
      ],
      day2: [
        {
          src: 'https://66.media.tumblr.com/e6cc8b667009c89d4b9252016dd8add1/tumblr_pheowg28Al1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/890910bf5b420370e5bdf16e265b5857/tumblr_pheow9Gm9K1w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/86d4d46e147a3b344354de79d5e20334/tumblr_pheovxsNE41w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/9e64dd800416fbbda30005c57c6ffdc7/tumblr_pheowkKXSi1w9240l_1280.jpg',
          cap: 'I will close my eyes and put my finger on the map'
        }
      ],
      fireworks: [
        {
          src: 'https://66.media.tumblr.com/5ac47bff90d4680f589e686484e549f1/tumblr_pheow6ZZq11w9240l_1280.jpg'
        },
        {
          src: 'https://66.media.tumblr.com/976a03bce9f12e9cf0881cbf5d883b78/tumblr_pheowdEvwe1w9240l_1280.jpg',
          cap: 'Yeah, I know I did not get photos of when the fireworks were at its best. But sometimes you just need to put the camera down and live the moment through your eyes.'
        }
      ],
      firebase: [
        {
          src: 'https://66.media.tumblr.com/6abe3ca7b214450838b2e58650b448e7/tumblr_pheow2sXVi1w9240l_1280.jpg',
          cap: 'Me at the screen in the background'
        },
        {
          src: 'https://66.media.tumblr.com/e558dfedfccbb6c4bad74aa97beeae15/tumblr_pheow5ePfq1w9240l_1280.png',
          cap: 'How nerds get their portraits done. We sit there and get computer animated by an artist and not drawn.'
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
