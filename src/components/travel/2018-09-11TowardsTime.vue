<template>
  <article>
      <h1>Travelling Towards Time</h1>
      <p class="date">11.09.2018</p>
      <img src="https://78.media.tumblr.com/10285dde1a3f42d36283bbe431babb14/tumblr_pesywePnC01w9240l_540.jpg" />
      <figcaption>Friend at Bolshaya station</figcaption>
      <section>
        I'm traveling towards time, by taking the train from Moscow to Novosibirsk, I'm jumping into time zones where I need to add one hour to the clock.
        Which means a day in my world, now only has 22 hours. Which is the opposite of what I would like. I'm still waiting for the crazy scientist to figure out how to slow down the spinning of the earth, giving us 30 hours a day. 9 hours sleep, 6 hours work and 15 hours of free time.
      </section>
      <section>
        My new companion is a one-year-old boy, which is a lot easier to communicate with because no talking is involved. We are laughing and pointing.
        After playing a little hide and seek above and under the table, I think I need to tone it down so the mother can put the child to sleep.
      </section>
      <section>
        On day three (if you count the one hour, two days ago as a day) I got two new bed neighbors. A man and a woman. They happened to know someone who
speaks English. She was a Russian who seemed very eager to practice her English. They had trouble pronouncing Gaute, so they decided to
        call me by the surname of their first Tsar. They continued asking me some questions through the English speaking lady, but the conversation ended after a short while.
      </section>
      <img src="https://78.media.tumblr.com/7d92f195baa71ea69017e32e9edd924a/tumblr_pevh2hzqsk1w9240l_540.jpg" />
      <section>
        So far the view of the train has been a lot of trees and bushes. If I hadn't known, it might as well be Norwegian nature, just more flat.
        And I've seen some cities and some worn out cities and a train station full of stray dogs barking away.
      </section>
      <img src="https://78.media.tumblr.com/a0962ceb27736c3b8c9a646ee281cd66/tumblr_pevh2lLaIF1w9240l_1280.jpg" />
      <section>
        I have now entered Novosibirsk. This is my first time in Asia. Also my first time outside Europe, finally! It only took me 27 years.
      </section>
      <img src="https://78.media.tumblr.com/e722b3088a5f268afbe8c71f00366fa4/tumblr_pevh2miApN1w9240l_1280.jpg" />
      <section>
        My tips on the Trans Siberian/Mongolian railway
        <ul>
          <li>Find the timetable, so you know when the breaks are coming and how long you can stay outside the train. </li>
          <li>Do some exercises during the short breaks to move your body. I did pistol squats, pushups and handstands.</li>
          <li>I would prefer the top bed for more privacy. A lot of the time I had someone sitting in my bed.</li>
          <li>The temperature varies a lot, so the perfect clothing is slippers, thin socks, sports shorts, t-shirt, and a hoodie to take of and on.</li>
          <li>They have blankets you can take. It might be hot going to sleep, but I've woken up a little cold.</li>
          <li>To my surprise I had my own power outlet.</li>
          <li>On class 3, look out for bumping into floating feet when walking to the toilet or other wagons</li>
          <li>Noodles and mashed potatoes food packets are your friend, as they have hot water. Which can be a lot easier than going to the restaurant wagon.</li>
          <li>Eye mask for sleeping.</li>
          <li>Hang a plastic bag under the table or on a knob, so you have a garbage bag.</li>
        </ul>
      </section>
      <!--section>
        <div class="question-box">
          <div class="q" v-if="answer === ''">
            <span>Does Snickers taste the same in Russia and Norway?</span>
            <div class="b">
              <button class="y" @click="answer = 'yes'">YES</button>
              <button class="n" @click="answer = 'no'">NO</button>
            </div>
          </div>
          <transition name="slide-fade">
            <div class="w" v-if="answer === 'yes'">
              WRONG
            </div>
            <div class="c" v-if="answer === 'no'">
              CORRECT
            </div>
          </transition>
        </div>
      </section-->
  </article>
</template>

<script>
export default {
  name: 'Travel20180911',
  data () {
    return {
      answer: ''
    }
  }
}
</script>

<style scoped>
/*.question-box{
  margin-top: 80px;
  height: 100px;
  font-size: 1.5em;
  font-style: italic;
}
.q{
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
.b{
  display: flex;
  width: 100%;
}
.b button{
  flex: 1;
  height: 50px;
  font-size: 1.3em;
}
.w,.n{
  background: linear-gradient(200deg, whitesmoke -100%, red);
}
.c,.y{
  background: linear-gradient(200deg, whitesmoke -100%, green);
}

.w,.c{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
}

.slide-fade-enter-active{
  transition: all 3s ease;
}

.slide-fade-enter{
  transform: translateX(500px);
  opacity: 0;
}*/
</style>
