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
<Tweet>
<p lang="en" dir="ltr">I may be the last person to know but <a href="https://twitter.com/hashtag/TIL?src=hash&amp;ref_src=twsrc%5Etfw">#TIL</a> you can import files based on conditions. <a href="https://twitter.com/hashtag/CSS?src=hash&amp;ref_src=twsrc%5Etfw">#CSS</a> <a href="https://t.co/w0Bd9ZVrHw">pic.twitter.com/w0Bd9ZVrHw</a></p>&mdash; Ananya Neogi (@_ananyaneogi) <a href="https://twitter.com/_ananyaneogi/status/1148882328812281856?ref_src=twsrc%5Etfw">July 10, 2019</a>
</Tweet>

This is really useful because you can start your mobile CSS file without the extra indentation.

Remember that importing other CSS files like this will make the browser do a separate network request
