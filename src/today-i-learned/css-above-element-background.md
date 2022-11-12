---
title: Above Previous Element's Background
date: 2020-03-08
category: CSS
---

<Teleport to="#app">
<header>
    <div class="intro">
        Remember to smile!
    </div>
    <div class="box">
        Thank you for reading and smiling!✨
    </div>
</header>
</Teleport>

How to make the element seem to be above the previous element's background color? You don't want to use negative margins, as they can lead to errors later on. Using `box-shadow` to extend the background color creates a nice effect.

```css
box-shadow: 0 70px 0 #1ce;
```

See the result above the title.

<style scoped>
    header{
        position: absolute;
        left: 0;
        right: 0;
        top: var(--menu-height);
    }
    .intro{
        background: #1CE;
        height: 60px;
        padding: 50px;
        font-family: fantasy;
        text-align: center;
        font-size: 2em;
        box-shadow: 0 70px 0 #1CE;
    }
    .box{
        background: #4A7C85;
        height: 100px;
        width: 150px;
        padding: 20px;
        border-radius: 10px;
        color: white;
        font-size: 1.1em;
        position: absolute;
        right: 120px;
    }
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelector('article').style.marginTop="200px"
})
</script>
