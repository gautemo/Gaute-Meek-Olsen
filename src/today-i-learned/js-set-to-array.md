---
title: Set to array
date: 2019-11-17
category: JavaScript
description: How to transform a Set to an array and the other way around.
---

If you have a Set and want to transform it into an array you can do it with the spread syntax

```js
const uniqueNumbers = new Set([1, 1, 4, 5, 4])
const arr = [...uniqueNumbers]
```

So a fancy way of getting unique values is casting an array back and forth:

```js
let arr = [1, 1, 4, 5, 4]
arr = [...new Set(arr)]
```
