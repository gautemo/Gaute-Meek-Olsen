---
title: Deep clone
date: 2022-07-20
category: JavaScript
description: How to deep clone an object.
---

Sometimes you want to clone an object but make sure that properties don't reference anything in the old object, which could happen with using the spread operator. You can instead use the built-in method `structuredClone()`.

```js
const thing = {
  list: [1, 2, 3],
}
const clone = structuredClone(thing)
```

No need for `JSON.parse(JSON.stringify(thing))`
