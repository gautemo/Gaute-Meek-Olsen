---
title: CSS Variables
date: 2019-02-03
hideCoverImg: true
tags: [CSS]
---

Previously you needed a CSS extension such as SASS or LESS to use variables in CSS. Not anymore, variables have been introduced in CSS leaving SASS and LESS unnecessary.

This is how you declare and use variables.

```css
/* Variables attached to the root, making it available for the whole page */
:root {
  --main-color: #5ad;
}

/* Variables attached to a element */
.content {
  --text-size: 2em;
  --main-color: #b4d; /* Overwrites variable for class content and all childs*/
  border: solid 1px gray;
}

/* Using the variable */
.box {
  background-color: var(--main-color);
  width: 50px;
  height: 50px;
  margin: 5px;
}

.circle {
  background-color: var(--main-color, #1ce); /* Using the variable with default value if not set */
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
}

.content span {
  font-size: var(--text-size);
}
```

<div class="example">
  <div class="box"></div>
  <div class="circle"></div>
  <div class="content">
    <span>Content</span>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</div>

<style scoped>
.example{
  --main-color: #5AD;
}

.content{
  --text-size: 2em;
  --main-color: #B4D;
  border: solid 1px gray;
}

.box{
  background-color: var(--main-color);
  width: 50px;
  height: 50px;
  margin: 5px;
}

.circle{
  background-color: var(--main-color, #1CE);
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
}

.content span{
  font-size: var(--text-size);
}

#bulb{
  font-size: 5rem;
  cursor: pointer;
}
</style>

If I had a lot of classes using the main color, it would be easy for me to specify a new color only at one place in my CSS.

## JavaScript Control

But you can also change the value of your CSS variables through JavaScript. Which gives us a better way to change the style. Let's say we want to have a dark theme. Previously we needed to write a lot of extra CSS classes and through JavaScript select the element and swap classes. But now;

```js
/* Change root element variables */
document.documentElement.style.setProperty('--main-color', '#FB1')

/* Select element and change variable for it and it's children */
const darkControl = document.querySelector('#dark-control')
darkControl.style.setProperty('--bg-color', 'black')
darkControl.style.setProperty('--text-color', 'white')
```

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { darkMode } from '../store/settings'

const toggle = () => darkMode.value = !darkMode.value
let bulb
onMounted(() => {
  bulb = document.querySelector('#bulb')
  bulb.addEventListener('click', toggle)
})

onUnmounted(() => {
  bulb.removeEventListener('click', toggle)
})
</script>

<span id="bulb" title="Click on me!">💡</span>

## Summary

You may disagree with the syntax they decided for, but you can't argue it's a nice feature. CSS variables can make you write cleaner and less CSS. Makes it easier to make changes afterwards. But also creates room for functionality as you can change their value through JavaScript.

_Remember to click the light bulb._
