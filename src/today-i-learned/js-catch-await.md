---
title: How to catch errors with async await
date: 2019-08-13
category: JavaScript
description: Alternative way to catch error with async await.
---

You could always wrap the `await` inside a `try` `catch`

```js
const getData = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    console.error(err)
  }
  return null
}
```

But I like this approach better.

```js
const getData = async (url) => {
  const response = await fetch(url).catch((err) => console.error(err))
  if (response) {
    return await response.json()
  }
}
```

And if you need to do more when you catch the error, you could always just pass your method `.catch(handleError)`
