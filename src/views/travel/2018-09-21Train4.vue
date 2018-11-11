<template>
  <article>
        <h1>Pink Train to China</h1>
        <p class="date">21.09.2018</p>
        <img src="https://78.media.tumblr.com/a459eb338734ce8b094c294461a203ce/tumblr_pfjwe9Zpp11w9240l_1280.jpg" />
        <section>
          This time there was a Mongolian train waiting for me at the station. With a new look, being white with pink decoration.
          Inside there is also some pink inventory, making the train look more luxury. This has been the best train
          so far. As the three others might seem shabby compared to this one, but still, I don't mind being shabby for some days.
        </section>
        <section>
          This leg is also on 2nd class, as only 1st and 2nd classes were optional. This time I'm in a room with a French man, just staying in his upper bed.
          Also, there are two Mongolian girls, where only one of them speaks English.
          Where the first thing they do are putting on this rap music playing in our room
          while going to sleep. Are the music for me? I mean since you are sleeping.
        </section>
        <ImageSlider :images="imgs" />
        <section>
          Walking a little around I understand two things. There are more backpackers this time and I would rather have stayed in another room. Mine is kind of dull.
          Of course, I know I'm a contributor to that. There have just been a few short conversations with the French one.
          And a little with the two vain Mongolian girls. Apparently, I have 'Big eyes'.
          And this is the second time a group of girls talk in their language and laugh at me.
          This time they didn't say anything to me, just turned up the volume on their music playing.
          Atleast the Czech girls would say 'we are crazy' or 'does not translate'.
        </section>
        <section>
          This time we are crossing the border from Mongolia to China, spending almost two hours on the Mongolian side. Then a 20 minutes ride into China,
          just to spend five more hours not moving. This time we had to walk outside the train and pass border control in this building
          quite similar to an airport security check. While we are inside, the train will be checked for drugs and illegal stuff.
          Then driven away to a place where they change the 'wheels' under the wagons so it will fit the Chinese railway tracks which are smaller in size.
          During the breaks, I met up with the couple from my last train. But mostly I spent time
          with the Swede, who knows a lot more people than I do, so I met some others as well.
        </section>
        <div class="center-container">
          <img class="small" src="https://78.media.tumblr.com/b59ec5895b8a6aea201855e3118184b2/tumblr_pfjwdrgnsy1w9240l_1280.jpg" />
        </div>
        <figcaption>This is the best toilet I have ever been to! I love this toilet fotball game!</figcaption>
        <section>
          As I am waking up and we are getting closer to Beijing, around 1-3 hours before arriving. The landscape here is quite cool.
          There are green mountains all over the place, reminding me of the Jurassic Park landscape. Thumbs up, China. As for the rest of
          China, its the place I'm most uncertain and scared about. Not knowing how the communication, getting around, air pollution,
          the great firewall (blocking all western social media and many websites), food, cleanliness, crowdedness and the rest will be like.
          But the first glance into the black box has been positive.
        </section>
        <ImageSlider :images="china" />
        <section>
          I am now done with the Trans-Mongolian railway. I liked it a lot, it was a nice way to travel to the other side of the planet.
          Getting to stop at cities, I would never have visited otherwise. It was nice to eat small chunks of the time differences at the time,
          meaning I still haven't experienced a jetlag in my life. There have been times where I met others and there have been moments alone.
          On the train, you have to enjoy to take your time, looking at the scenery, read, look at tv-shows/movies, podcasts, walk around and whatever you like.
        </section>
        <section>
          Now there is one reason for being here. Seeing the Great wall! Let's hope the next blog post will be about how I got to see it...
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      imgs: [
        {
          src: 'https://78.media.tumblr.com/de001825b790b4e8fccc549eb8e8575b/tumblr_pfjwdvjt031w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/8176ac62a1bda51dbe81f22f7dcdae07/tumblr_pfjwdy1gqK1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/d632a130ca7afb138fd092a8adff17e5/tumblr_pfjwdkcxtC1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/639af1ee59c7566f05781ea7c41760f1/tumblr_pfjwdh17a21w9240l_1280.jpg'
        }
      ],
      china: [
        {
          src: 'https://78.media.tumblr.com/02e2b389b307419199249c20332efeaf/tumblr_pfjwdoGka81w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/88236fa27f3accfd51d47f6bd5865cd3/tumblr_pfjwe2kVbm1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/63851d54fea669fbc2e617abb976286b/tumblr_pfjwedNQlD1w9240l_1280.jpg'
        },
        {
          src: 'https://78.media.tumblr.com/5f0e0eb6172924204b4d425be62946b8/tumblr_pfjwe5i0RX1w9240l_1280.jpg'
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
