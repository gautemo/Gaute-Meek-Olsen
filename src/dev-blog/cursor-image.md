---
title: How to Change the Cursor to an Image
date: 2018-11-15
hideCoverImg: true
tags: [CSS]
---

It only takes on line to have the cursor be an image:

```css
.custom {
  cursor: url(https://66.media.tumblr.com/ed4cdc68eecbf32a982dfe5a1e98eca6/tumblr_pi925kZQsZ1xfbgtko1_75sq.png), auto;
}
```

Now let's make something with it. (Not mobile friendly)

<div class="stickmans">
  <div class="stickman" v-for="n in 15" :data-nr="n" :key="n"></div>
</div>

<script setup>
import { onMounted, onUnmounted } from 'vue'

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const walk = () => {
  const { clientWidth, clientHeight } = document.querySelector('.stickmans')
  for(const id of [...Array(15).keys()].map(i => i+1)){
    const x = getRandomInt(clientWidth - 40)
    const y = getRandomInt(clientHeight - 40)
    document.querySelector(
      `[data-nr="${id}"]`
    ).style.transform = `translate(${x}px, ${y}px)`
  }
}

let interval
onMounted(() => {
  document
    .querySelectorAll('.stickman')
    .forEach(s =>
      s.addEventListener('mouseover', e => e.target.classList.add('burning'))
    )
  interval = setInterval(walk, 1000)
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.stickmans {
  cursor: url(https://66.media.tumblr.com/ed4cdc68eecbf32a982dfe5a1e98eca6/tumblr_pi925kZQsZ1xfbgtko1_75sq.png),
    auto;
  width: 100%;
  height: 550px;
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
