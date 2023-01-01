---
title: How to Add a Script Tag in a Vue Component
date: 2018-11-14
updated: 2023-01-01
hideCoverImg: true
tags: [Vue]
description: Load other JavaScript scripts in your Vue template.
---

You might stumble upon an error if you would like to run a script tag only on a specific component in Vue. Let's try to embed a tweet into a component template:

```vue
<template>
  <article>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Vue 3 is here! 🎉💖 Definitely my favorite frontend framework!
        <a href="https://t.co/BRYirur5Wk">https://t.co/BRYirur5Wk</a>
      </p>
      &mdash; Gaute Meek Olsen (@GauteMeekOlsen)
      <a href="https://twitter.com/GauteMeekOlsen/status/1307022489869070337?ref_src=twsrc%5Etfw">September 18, 2020</a>
    </blockquote>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>
```

Building this, Vue throws the error:
::: danger Error
Tags with side effect (&lt;script&gt; and &lt;style&gt;) are ignored in client component templates.
:::

<script setup>
import ToggleView from '../components/ToggleView.vue'
</script>

<ToggleView :options="['Vue 3', 'Vue 2']"><template #0>

This is an easy fix by using the [VueUse](https://vueuse.org/) package.

First, install `@vueuse/core` with `npm i @vueuse/core`, and then we can update our example.

```vue
<script setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://platform.twitter.com/widgets.js')
</script>

<template>
  <article>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Vue 3 is here! 🎉💖 Definitely my favorite frontend framework!
        <a href="https://t.co/BRYirur5Wk">https://t.co/BRYirur5Wk</a>
      </p>
      &mdash; Gaute Meek Olsen (@GauteMeekOlsen)
      <a href="https://twitter.com/GauteMeekOlsen/status/1307022489869070337?ref_src=twsrc%5Etfw">September 18, 2020</a>
    </blockquote>
  </article>
</template>
```

</template>
<template #1>

This is an easy fix, despite that googling the internet might send you down a harder path. Just add `type="application/javascript"` to your script tag. Fixed.

```vue
<template>
  <article>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Vue 3 is here! 🎉💖 Definitely my favorite frontend framework!
        <a href="https://t.co/BRYirur5Wk">https://t.co/BRYirur5Wk</a>
      </p>
      &mdash; Gaute Meek Olsen (@GauteMeekOlsen)
      <a href="https://twitter.com/GauteMeekOlsen/status/1307022489869070337?ref_src=twsrc%5Etfw">September 18, 2020</a>
    </blockquote>
    <script type="application/javascript" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>
```

</template>
</ToggleView>

You could stop reading here. But what if your script contains `document.write`. Your script won't work and throw this warning in the console:

::: warning
Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
:::

This happens because the document has been fully parsed and closed. Then you can't write to it, at least not how you want to.

This can be solved using `postscribe`. (see hyperlink for other approaches than NPM install)

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
