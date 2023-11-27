---
title: Keep screen on
date: 2023-11-27
category: JavaScript
description: Using the Wake Lock API to prevent devices from dimming or locking the screen.
---

With JavaScript you can request to keep the screen on. This can be handy to prevent the operating system from hibernating.

```js
navigator.wakeLock.request('screen')
```

<script setup>
  import KeepScreenOn from './components/KeepScreenOn.vue'
</script>

<KeepScreenOn />

Note that leaving the tab or window will release the lock.
