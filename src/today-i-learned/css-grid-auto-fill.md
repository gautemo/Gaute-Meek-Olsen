---
title: Responsive with CSS Grid auto-fill
date: 2019-11-17
category: CSS
---

If you need a responsive grid, you can use the auto-fill or auto-fit making the elements fit as many as they can with minimum size and filling the remaining space between them.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

Example, resize your browser window:

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
