---
title: How to get JSON.stringify formatted
date: 2020-05-05
category: JavaScript
description: How to stringify JSON formatted.
---

Today I learned how to get the JSON stringified string to be human-readable, which could be nice when saving the data to a file, with `JSON.stringify(value, null, 2)`.

```js
const characters = [
  {
    name: 'Mario',
    color: 'red',
  },
  {
    name: 'Luigi',
    color: 'green',
  },
]

const oneLine = JSON.stringify(characters)
const readable = JSON.stringify(characters, null, 2)

console.log(oneLine)
/* "[{"name":"Mario","color":"red"},{"name":"Luigi","color":"green"}]" */

console.log(readable)
/*
"[
  {
    "name": "Mario",
    "color": "red"
  },
  {
    "name": "Luigi",
    "color": "green"
  }
]"
*/
```

See how adding 2 as the third parameter helped us. Especially if the list would have been larger. The number 2 is the number of spaces you want. For tab, you can use `JSON.stringify(characters, null, '\t')`.
