---
title: Conditional import
date: 2019-07-10
category: CSS
---

```css
@import url('mobile.css') screen and (max-width: 600px);
```

<script setup>
import Tweet from '../components/Tweet.vue'
</script>
<Tweet id="1148882328812281856"/>

This is really useful because you can start your mobile CSS file without the extra indentation.

Remember that importing other CSS files like this will make the browser do a separate network request
