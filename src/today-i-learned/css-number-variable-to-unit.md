---
title: Number variable used with a unit
date: 2020-12-25
category: CSS
description: How to use custom properties that are just a number to be used with a unit.
---

What if we have a custom property that is just a number, but we would like to use it where we need a unit? Then `calc` is to the rescue.

```css
.text {
  --size: 18;
  font-size: calc(var(--size) * 1px);
}
```

<script setup lang="ts">
  import { ref } from 'vue';
  const size = ref(18)
</script>

<input type="range" min="0" max="100" v-model="size"/>

<style scoped>
  p {
    font-size: calc(v-bind(size) * 1px);
    line-height: initial;
  }
</style>
