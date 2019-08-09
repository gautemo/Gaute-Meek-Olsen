<template>
  <article>
        <h1>Chineese Train</h1>
        <p class="date">16.09.2018</p>
        <img src="https://78.media.tumblr.com/923d1b50a8f7e7bab28b093ec89657ef/tumblr_pfaubu0TCA1w9240l_1280.jpg" />
        <section>
          On the leg 3 of the Trans-Mongolian railway, I've now entered a Chinese train. It's a bit different from the Russian trains I have taken so far.
          First thing is that it's much colder. At the start it was freezing, after a while it got better.
          On the other trains, the first thing I did was changing into shorts and taking off my hoodie.
          Not this time. Some other differences are that the beds are hard, there is no toilet paper and a more minimalistic train, which gives us more space.
        </section>
        <div class="center-container">
          <img class="small" src="https://78.media.tumblr.com/b0510c1d1ed747d0017340a2ac9673b4/tumblr_pfaubmExjb1w9240l_1280.jpg" />
        </div>
        <figcaption>Slowly heating the train, but not enough.</figcaption>
        <section>
          This time I'm sleeping on 2nd class, as 3rd class was not an option on this leg. The difference is I'm not staying in a four-bedroom,
          where we can close the door. I'm sharing the room with a backpacker couple, where she is from Ireland and him from the Netherlands. So talking has never been easier than now on this trip. As we are derailing from the Trans-Siberian railway now and heading to Mongolia and China, there are much fewer locals on the train. But there are not so many backpackers, there are more adult travelers if I can still address myself as a child.
        </section>
        <section>
          The train stopped in Ulan-Ude for 45 minutes. So I stepped out and did a little looking around and went into a shop to buy some water and food.
          When I headed back to the train, the doors were shut and every passenger had left the platform and gotten back into the train. So I ran towards the train,
          starting knocking at the door. This Korean looking couple stared at me from the window, looking concerned. The lady walked to get help from a
          conductor, while the man kept looking at me. I kept nocking, thinking that maybe the train would leave me at the station.
          Before I started this trip, I have heard that when people are losing their train, then they are left with two options. Either jump into a taxi and make it catch up with the train, not an option for me as the stops are getting further away from now on. The other option is to call the train and make them drop your bag off. Maybe I could do that and fly to Ulaanbaatar, so I would still be on schedule. Or take the next train and rearrange the trip. But then they opened the door on the wagon next to mine.
          The stares were taken in, so I had to climb in. But I got back into the train!
        </section>
        <section>
          After Ulan-Ude the trees are getting fewer and fewer, the view consists of big naked hills with wild horses and cows walking around. It's mesmerizing and relaxing
          looking out the window with this stunning view and the train making the 'gudunk gudunk gudunk' sound, <a href="https://www.noisli.com/" target="_blank" rel="noopener">like this</a>
          (click on the railway symbol).
        </section>
        <ImageSlider :images="imgs" />
        <section>
          Border control took almost two hours to leave Russia. Then the train traveled like 15 minutes, then it was two new hours waiting on the Mongolian border control.
          Then it was off to sleep. My roommates decided to leave the window open to get some air, the downside to that was the cold leaking in. I woke up in the middle of the
          night freezing, trying to put on some clothes, but I did not sleep much that night.
        </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180916',
  data () {
    return {
      imgs: [
        {
          src:
            'https://78.media.tumblr.com/50928205eaa17e14677f8f2cb507e234/tumblr_pfaubx4tOV1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/cb164559494cda7b31698f53a71ce70e/tumblr_pfaubqSkNq1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/17780d3a893111f942cb9a1c5a54b5d5/tumblr_pfauc3Ki9I1w9240l_1280.jpg'
        },
        {
          src:
            'https://78.media.tumblr.com/ef8696216f70fbca732f374029ebf92c/tumblr_pfauc0R6qK1w9240l_1280.jpg'
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
