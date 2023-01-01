---
title: Transition on appear
date: 2022-11-27
category: Vue
description: How to create an animation when the Vue component appears.
---

`<Transition>` in Vue is usually used together with `v-if` on elements or components to add animations. With the transition, you will automatically get the wanted CSS transition classes once the element enters and leaves.

But you can also use it when a node first is rendered by applying `appear`.

```html
<Transition appear>
  <p>Spin</p>
</Transition>
```

<Transition appear>
  <p class="spin">Spin</p>
</Transition>

<style scoped>
.v-enter-active {
  transition: all 8s ease-in;
}

.v-enter-from {
  rotate: 2000deg;
}

.spin {
  width: fit-content;
}
</style>
