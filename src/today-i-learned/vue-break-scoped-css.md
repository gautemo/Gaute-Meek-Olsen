---
title: Break Out of Scoped CSS
date: 2019-08-12
updated: 2022-02-26
category: Vue
description: How to select elements outside the component scope in Vue.
---

<script setup>
import ToggleView from '../components/ToggleView.vue'
</script>

<ToggleView :options="['Vue 3', 'Vue 2']"><template #0>

If you need to break out of CSS scoped to a component, it can be done with `:deep`, `:slotted`, and `:global`.

```vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

Which will be compiled into this, allowing to select `.b` inside child components:

```css
.a[data-v-f13b4d11] .b {
  /* ... */
}
```

</template>
<template #1>

If you need to break out of CSS scoped to a component, it can be done with `>>>` or `/deep/`.

```vue
<style scoped>
.a >>> b {
  /* ... */
}
</style>
```

Which will be compiled into this, allowing to select `.b` inside child components:

```css
.a[data-v-f13b4d11] .b {
  /* ... */
}
```

</template>
</ToggleView>
