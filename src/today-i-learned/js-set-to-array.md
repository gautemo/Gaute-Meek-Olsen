---
title: Set to array
date: 2019-11-17
category: JavaScript
---

If you have a Set and want to transform it to an array you can do it with the spread syntax

```js
const uniqueNumbers = new Set([1, 1, 4, 5, 4])
const arr = [...uniqueNumbers]
```

So a fancy way of getting unique values is casting an array back and forth:

```js
let arr = [1, 1, 4, 5, 4]
arr = [...new Set(arr)]
```
