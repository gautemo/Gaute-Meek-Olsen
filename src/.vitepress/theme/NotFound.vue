<script setup lang="ts">
const options = [
  {
    img: 'https://66.media.tumblr.com/09c9a844a896f711ece43b679338eb24/tumblr_ptuxt5eKeI1xfbgtko1_400.png',
    msg: 'You are not allowed here, red card!',
  },
  {
    img: 'https://66.media.tumblr.com/f7957faf8bfbc5e7c6b52bf576bbacca/tumblr_ptuxt5eKeI1xfbgtko2_400.png',
    msg: `I'm sorry for not finding the page, please don't leave.`,
  },
  {
    img: 'https://66.media.tumblr.com/715e3158c562f2764627232b1054a567/tumblr_ptuxt5eKeI1xfbgtko3_400.png',
    msg: `Oh noo, I'm to late. I haven't created this page yet.`,
  },
  {
    img: 'https://66.media.tumblr.com/dcffde55531498d0cdf00c0d746e1e7a/tumblr_ptuxt5eKeI1xfbgtko4_400.png',
    msg: 'There is nothing here.',
  },
  {
    img: 'https://66.media.tumblr.com/62b7674e74c7ce111cca34d79f72e855/tumblr_ptuxt5eKeI1xfbgtko5_400.png',
    msg: `I'm sorry, but the page doesn't exist.`,
  },
  {
    img: 'https://66.media.tumblr.com/7fe8f9a2bbba1b492c0b57023e3a64ae/tumblr_ptuxt5eKeI1xfbgtko6_400.png',
    msg: 'How did you manage to get here?',
  },
]
const show = Math.floor(Math.random() * Math.floor(6))
</script>

<template>
  <main>
    <h1>404 - not found</h1>
    <p>The page you are looking for was moved, removed, or might never existed.</p>
    <img :src="options[show].img" height="400" />
    <p>{{ options[show].msg }}</p>
  </main>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
</style>
