# gaute-meek-olsen

My personal website: [gaute.dev](https://gaute.dev)

## Blogs
Create `.md` file in [blog](src/blog). Start file with
```
---
title: How to Change the Cursor to an Image
date: 2018-11-15
hideCoverImg: true
coverImgExtension: png
tags: [CSS]
---
```

### Cover image
Go to [squoosh.app/](https://squoosh.app/).
Usually settings 
- width 600px
- MozJPEG
- Quality 70%

### Embed Tweet

Create card on [publish.twitter.com/](https://publish.twitter.com/) and copy everything inside `<blockquote>` tags and place inside `<Tweet>` component.

```md
<script setup>
import Tweet from '../components/Tweet.vue'
</script>
<Tweet>

</Tweet>
```