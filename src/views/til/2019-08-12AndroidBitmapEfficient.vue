<template>
  <article>
    <h1>Loading Bitmaps Efficiently</h1>
    <p>
      If you are dealing with loading many bitmaps, chances are you will create a laggy app.
      To avoid this don't do the bitmap work on the UI thread.
      Today I learned there is a library called
      <a
        href="https://github.com/bumptech/glide"
        target="_blank"
        rel="noopener"
      >Glide</a> wich does the work for you.
    </p>
    <h6>
      Might change my projects to use
      <a href="https://github.com/coil-kt/coil/" target="_blank" rel="noopener">Coil</a> instead in the future.
      It looks promising, but was a little buggy at the moment. (12.08.2019)
    </h6>
  </article>
</template>

<style scoped>
h6 {
  font-weight: 100;
}
</style>
