---
title: Shadow on Shapes
date: 2020-03-08
category: CSS
---

You can't use `box-shadow` on elements with `clip-path` or images(png or svg) that are transparent. We have to use `filter` and `drop-shadow`. For images, you can use the filter directly. But for clip-path, it needs to be a child element (`::before` can be used to avoid wrapper elements).

```css
filter: drop-shadow(1px 5px 5px red);
```

## filter

<section id="filter">
  <figure>
    <div class="star"></div>
    <figcaption>clip-path</figcaption>
  </figure>
  <figure>
    <img class="img-star" src="./assets/star.png" alt="a star">
    <figcaption>png/svg</figcaption>
  </figure>
</section>

## box-shadow

<section id="box">
    <figure>
        <div class="star"></div>
        <figcaption>clip-path</figcaption>
    </figure>
    <figure>
        <img class="img-star" src="./assets/star.png" alt="a star">
        <figcaption>png/svg</figcaption>
    </figure>
</section>

<style scoped>
.star::before{
    content: "";
    display: block;
    height: 150px;
    width: 150px;
    background: black;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.img-star{
    height: 150px;
    width: 150px;
}
#filter .star,
#filter .img-star{
    filter: drop-shadow(1px 5px 5px red);
}
#box .star,
#box .img-star{
    box-shadow: 1px 5px 5px red;
}
section{
    display: grid;
    grid-auto-flow: column;
    gap: 25px;
    width: fit-content;
}
figure{
    margin: 0;
}
</style>
