---
title: What's new in JavaScript - ES2021
description: All new features from ECMAScript 2021.
date: 2021-08-06
tags: [JavaScript]
---

In June 2021, a handful of new features arrived in the JavaScript language.

## TLDR - To Long, Didn't Read

If you don't want to read the entire article, I have gathered the most noteworthy in this code snippet.

```js
/* Numeric separators */
const number = 1_000_000_000

/* replaceAll */
const oragens = '🍏🍏🍏'.replaceAll('🍏', '🍊')

/* Promise.any */
const promises = [fetch('/slow'), fetch('/fast')]
const first = await Promise.any(promises)
// returns when the first promise is fulfilled

/* Logical assignment */
x &&= y
x ||= y
x ??= y
// assign y to variable x if logical operator is not short-circuiting

/* weakRef */
const cacheRef = new WeakRef({ count: 0 })
const cache = cacheRef.deref()
// can be garbage-collected, which means deref() can return undefined
```

## Background

Every year in June a new edition of ECMAScript is released, which is the specification of JavaScript. This provides some newly added features which can be used and make JavaScript better. This year ES2021, also known as ES12, was released and I will go through what is new.

## Numeric separators

If your code contains numbers with a lot of digits, it can be hard to read. For example when you have to count the number of zeros to figure out if it's a million or ten million. Now it's allowed to use an underscore in the number to better visualize for instance every thousandth.

```js
const hardToRead = 1000000000
const easyToRead = 1_000_000_000
console.log(hardToRead === easyToRead) // Output: true

const decimal = 1.333_333
```

## replaceAll

When you are working with strings in JavaScript you sometimes need to replace certain parts of the text. Previously, it was possible to use the `replace` method, but this only replaces the first occurrence. Which we could solve by using regex with a global flag. Now we have a new method named `replaceAll` so we don't have to use regex if we don't want to.

```js
const apples = '🍏🍏🍏'
const oranges = apples.replaceAll('🍏', '🍊')
console.log(oranges) // Output: 🍊🍊🍊
```

## Promise.any

If we have multiple asynchronous calls that run in parallel and we would like to continue as soon as the first of them finishes, we could collect those in `Promise.race`. But `Promise.race` would continue independent of if the first request rejects or resolves. If we would like to wait for the first resolved promise, we could use `Promise.any`.

```js
try {
  const promises = [fetch('/slow'), fetch('/fast')]
  const first = await Promise.any(promises)
} catch (error) {
  console.error('Every promise failed', error.errors)
}
```

## Logical assignment

You may know the logical operators `&&`, `||`, and `??`. Now we can use those to assign a variable.

```js
x &&= y
// x is unchanged if it's falsy, otherwise y

x ||= y
// x is unchanged if it's truthy, otherwise y

x ??= y
// x is unchanged if it's not null or undefined, otherwise y
```

This can seem just the same as this:

```js
x = x && y
```

But it's now quite the same. Since the new logical assignments won't do an assignment if the operators are short-circuiting. So it's the same as:

```js
x && (x = y)
```

This could matter a few times if the assignment leads to a side effect. Which is demonstrated in this code snippet:

```js
const obj = {
  value: 0,
  get y() {
    return this.value
  },
  set y(value) {
    console.log('side-effect')
    this.value = value
  },
}

obj.y ??= 99 // no side-effect

obj.y = obj.y ?? 99 // Output: side-effect
```

## WeakRef

JavaScript is a language that uses garbage collecting to free memory space. But as long as someone holds a reference to the object, then it can't be garbage collected and will be held in memory. Now we can use `WeakRef` if it's okay for the garbage collector to free the object from memory if needed without us having control over it. If it has been garbage collected the `deref()` would return `undefined`. If you need control of when the object is being garbage collected, you can use `FinalizationRegistry` to register a callback for when it happens.

```js
const cacheRef = new WeakRef({ count: 0 })

const cache = cacheRef.deref()
if (cache) {
  console.log(cache.count)
} else {
  console.log('cache object lost to garbage-collection')
}

// FinalizationRegistry lets you assign a callback if the object is garbage-collected
const registry = new FinalizationRegistry((value) => {
  console.log(value)
})

registry.register(cacheRef.deref(), 'cacheRef is lost')
```

Note that this is code you want to avoid if possible. The use of `WeakRef` is something to carefully think through since when the garbage collector runs, we have little insight into and can vary between different browsers.
