<template>
  <article>
      <h1>{{title}}</h1>
      <section>
          It only takes on line to have the cursor be an image:
        <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'cursor-image.css'" />
      </section>
      <section>
          Now let's make something with it. (Not mobile friendly)
          <div class="stickmans">
              <div class="stickman" v-for="s in stickmans" :data-nr="s.id" v-bind:key="s.id"></div>
          </div>
      </section>
  </article>
</template>

<script>
import Gist from '@/components/Gist.vue'

export default {
  name: 'ServiceWorkerVue',
  data () {
    return {
      title: 'How to Change the Cursor to an Image',
      stickmans: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9
        },
        {
          id: 10
        },
        {
          id: 11
        },
        {
          id: 12
        },
        {
          id: 13
        },
        {
          id: 14
        },
        {
          id: 15
        }
      ]
    }
  },
  methods: {
    walk: function () {
      console.log('walk')
      const width = document.querySelector('.stickmans').clientWidth
      this.stickmans.forEach(s => {
        const x = getRandomInt(width)
        const y = getRandomInt(500)
        document.querySelector(
          `[data-nr="${s.id}"]`
        ).style.transform = `translate(${x}px, ${y}px)`
      })
    }
  },
  mounted: function () {
    document
      .querySelectorAll('.stickman')
      .forEach(s =>
        s.addEventListener('mouseover', e => e.target.classList.add('burning'))
      )
    setInterval(this.walk, 1000)
  },
  components: {
    Gist,
  }
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
</script>

<style scoped>
.stickmans {
  cursor: url(https://66.media.tumblr.com/ed4cdc68eecbf32a982dfe5a1e98eca6/tumblr_pi925kZQsZ1xfbgtko1_75sq.png),
    auto;
  width: 100%;
  height: 550px;
  margin-bottom: 300px;
  margin-top: 10px;
  position: relative;
  border: 5px solid burlywood;
  background-color: rgba(0, 128, 0, 0.39);
}

.stickman {
  position: absolute;
  transition: all 2s;
}
.stickman:not(.burning)::after {
  content: "🏃";
  font-size: 38px;
}
.stickman.burning {
  transition: all 1s;
}
.stickman.burning::after {
  content: "🔥";
  font-size: 38px;
}
</style>
