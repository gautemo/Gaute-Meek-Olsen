---
title: How to Add a Script Tag in a Vue Component
date: 2018-11-14
hideCoverImg: true
tags: [Vue]
---

You might stumble upon an error if you would like to run a script tag only on a specific component in Vue. Let's try to embed a tweet into a component template:

```vue
<template>
  <article>
    <blockquote class="twitter-tweet" data-lang="no">
      <p lang="en" dir="ltr">
        Just arrived at Prague. Excited for the
        <a href="https://twitter.com/hashtag/FirebaseSummit?src=hash&amp;ref_src=twsrc%5Etfw">#FirebaseSummit</a>!
        <a href="https://twitter.com/hashtag/BetterTogether?src=hash&amp;ref_src=twsrc%5Etfw">#BetterTogether</a>
        <a href="https://t.co/ikWg5gLYBm">pic.twitter.com/ikWg5gLYBm</a>
      </p>
      &mdash; Gaute Meek Olsen (@GauteMeekOlsen)
      <a href="https://twitter.com/GauteMeekOlsen/status/1056185340996870144?ref_src=twsrc%5Etfw">27. oktober 2018</a>
    </blockquote>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>
```

Building this, Vue throws the error:
::: danger Error
Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as script, as they will not be parsed.
:::

This is an easy fix, despite that googling the internet might send you down a harder path. Just add `type="application/javascript"` to your script tag. Fixed.

```vue
<template>
  <article>
    <blockquote class="twitter-tweet" data-lang="no">
      <p lang="en" dir="ltr">
        Just arrived at Prague. Excited for the
        <a href="https://twitter.com/hashtag/FirebaseSummit?src=hash&amp;ref_src=twsrc%5Etfw">#FirebaseSummit</a>!
        <a href="https://twitter.com/hashtag/BetterTogether?src=hash&amp;ref_src=twsrc%5Etfw">#BetterTogether</a>
        <a href="https://t.co/ikWg5gLYBm">pic.twitter.com/ikWg5gLYBm</a>
      </p>
      &mdash; Gaute Meek Olsen (@GauteMeekOlsen)
      <a href="https://twitter.com/GauteMeekOlsen/status/1056185340996870144?ref_src=twsrc%5Etfw">27. oktober 2018</a>
    </blockquote>
    <script type="application/javascript" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>
```

You could stop reading here. But what if your script contains `document.write`. Your script won't work and throw this error in the console:

::: danger Error
Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
:::

This happens because the document has been fully parsed and closed. Then you can't write to it, at least not how you want to.

This can be solved using postscribe. (see hyperlink for other approaches than NPM install)

```bash
npm i postscribe --save
```

Then in the mounted lifecycle to the Vue component, you can add the script tag like this.

```vue
<template>
  <div id="gist"></div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {
  name: 'Gist-Example',
  mounted: function () {
    postscribe('#gist', `<script src="https://gist.github.com/gautemo/d6b309c2bafe8f611f239b82f4f5501f.js"><\/script>`)
  },
}
</script>
```

Congratulations, you now have embedded a gist in your Vue component!
