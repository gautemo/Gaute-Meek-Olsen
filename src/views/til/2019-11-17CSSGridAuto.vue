
<template>
  <article>
    <h1>Responsive with CSS Grid auto-fill</h1>
    <p>
      If you need a responsive grid,
      you can use the auto-fill or auto-fit making
      the elements fit as many as it can with a minimum size and fill the remaining space between them.
    </p>
    <pre class="code block">
      .grid{
      &nbsp;&nbsp;display: grid;
      &nbsp;&nbsp;grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    </pre>
    <p>
      Example, resize your browser window:
    </p>
    <div class="grid">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </article>
</template>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.box{
  margin: 10px;
  background: teal;
  height: 75px;
}
</style>
