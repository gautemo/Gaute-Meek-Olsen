---
title: Active router link CSS class
date: 2019-11-17
updated: 2022-02-24
category: Vue
---

<script setup>
import ToggleView from '../components/ToggleView.vue'
</script>

<ToggleView :options="['Vue 3', 'Vue 2']"><template #0>

The Vue Router automatically applies `router-link-active` to active router links. No need to compare the URL yourself.

```vue
<router-link to="/link">Link</router-link>
```

```css
.router-link-active {
  background: blue;
}
```

If you have nested routes, you can also use `router-link-exact-active` to differentiate between active routes and the exact active child route.

```js
const routes = [
  {
    path: '/parent',
    children: [{ path: 'child' }],
  },
]
```

```css
.router-link-exact-active {
  background: red;
}
```

Now visiting `/parent/child` a link with `/parent` would be `router-link-active`, but only `/parent/child` is both `router-link-active` and `router-link-exact-active`.

</template>
<template #1>

The Vue Router automatically applies classes to active router links. No need to compare the URL yourself.

```vue
<router-link to="/link">Link</router-link>
```

can now be targeted with

```css
.router-link-active {
  background: blue;
}

.router-link-exact-active {
  background: red;
}
```

The difference between `router-link-exact-active` and `router-link-active` is that the exact only applies if the entire URL matches, while the `router-link-active` is applied if it is part of the URL, the user is on a sub-path or exact path.

</template>
</ToggleView>
