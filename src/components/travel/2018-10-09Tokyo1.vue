<template>
  <article>
        <h1>Worlds Biggest City</h1>
        <p class="date">09.10.2018</p>
        <section>
          I am now leaving Kyoto and heading for Tokyo. It was just taking a bullet train and Japan had rearranged the letters.
        </section>
        <div class="townname">
          <span class="kyo">Kyo</span>
          <span class="to">To</span>
        </div>
        <section>
          The distance between Kyoto and Tokyo are pretty equivalent with the distance between Oslo and Trondheim, only 19 km difference.
          Still the time difference is about 5 hours, as the bullet train only took 2 hours. And the bullet trains left every 5 minutes heading for Tokyo!
        </section>
        <img src="https://66.media.tumblr.com/befc35bc84b297ae7c664795a14dcdc8/tumblr_pgd2a7daxQ1w9240l_1280.jpg" />
        <section>
          After being with people non stop in Beijing and Ishigaki for 12 days straight, some time alone in Osaka, Nara, and Kyoto has been good. But now think I'll try
          to meet some people again, so I have booked a bed in a small hostel. Read on to find out if the introverted Gaute spent his first days in Tokyo alone or not.
        </section>
        <section>
          I am now in Tokyo, the worlds biggest city! I am staying in a not so touristy part of Tokyo. After checking in to the hostel, I went walking around nearby.
          After that I went to the top of Tokyo Metropolitan Government Building, seeing all over the city.
        </section>
        <img src="https://66.media.tumblr.com/355586f71abbfd91bcdf234f197c7d5a/tumblr_pgd2a3FeT21w9240l_1280.jpg" />
        <figcaption>Tokyo by night!</figcaption>
        <section>
          The hostel manager is quite the man. Speaking very freely about things. It is kind of liberating and also a bit unprofessional.
          He says he's going to make big changes to the hostel. Saying straight out that the hostel is dirty, bad, small and messy.
          And if I have any complaints, he's very willing to hear it. Like 'if there is missing soap'. I went up, and there is no soap anywhere.
          Did he just point out a fault? If you are going to make the hostel so great, that is a so simple fix which requires 5 seconds of your time.
          All talk and no action maybe? Later he's talking about what to do while in Japan. 'Don't go and see the tourist stuff, you should go meet
          Japanese girls. Hostess girls, where you pay them to spend time with you. Also, true Japanese experience, go to the capsule hostels in Tokyo.'
          So do you not want the customers at your own hostel? As I said, he's some guy.
        </section>
        <section>
          I have met three others from Scotland. They are a group of two girls and a man. They are easy to talk with and fun.
          We are going to the light museum on Thursday. Later that evening I'm talking to a man from Canada and two from Japan.
          He knows just a little Japanese and they just a little English, so it's not the deepest conversation and I'm not always following along
          as it goes back and forth in English and Japanese.
        </section>
        <img src="https://66.media.tumblr.com/ac2c8282914384f02dd1521fdc564f0b/tumblr_pgd2abIgiO1w9240l_1280.jpg"/>
        <figcaption>Another direction.</figcaption>
        <section>
          I booked to nights at this place, if I really like it I will prolong my stay. If not I will find somewhere else in Tokyo.
          I have now entered my last week and last destination. I think there will be two more blogs, one for the rest of Tokyo and
          one for my final thoughts about the entire trip when/if I make it home. So it's soon coming to an end!
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
    }
  },
  components: {
    ImageSlider
  }
}
</script>

<style scoped>
.townname{
  display: flex;
  justify-content: center;
  align-items: center;
}
.kyo,
.to{
  font-size: 50px;
  font-weight: bold;
  text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
}

.kyo{
  animation: red 5s infinite alternate;
}
.to{
  animation: move 5s infinite alternate;
}

@keyframes move {
  from { transform: translateX(0); color: orange }
  to { transform: translateX(-140px); color: red }
}
@keyframes red {
  from{ color:orange}
  to{color: red}
}
</style>
