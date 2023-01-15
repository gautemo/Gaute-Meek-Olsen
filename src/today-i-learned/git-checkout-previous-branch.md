---
title: Checkout previous branch
date: 2021-06-25
category: git
description: How to checkout your last visited branch or by the number since you visited it.
---

Previous branch:

```sh
git switch -
```

N number of last visited branch:

<script setup>
import ToggleView from '../components/ToggleView.vue'
</script>

<ToggleView :options="['Unix-like', 'Windows']"><template #0>

```sh
git switch @{-2}
```

</template>
<template #1>

```sh
git switch "@{-2}"
```

</template>
</ToggleView>
