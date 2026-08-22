---
title: What's New in JavaScript - ES2026
description: All new features from ECMAScript 2026.
date: 2026-08-22
tags: [JavaScript]
---

ES2026 is out, people might have been expecting Temporal, but that have to wait until next year. Let me explain what is included this year.

## Upsert/getOrInsert

`Map` and `WeakMap` have new methods `getOrInsert` and `getOrInsertComputed`. They help you write less code so you don't have to check if the key exist and insert a value before reading the value. They will both read and insert the default value if the key is not present.

```js
const map = new Map()

// Old javascript
if (!map.has('count')) {
  map.set('count', 0)
}
console.log(map.get('count')) // 0

// ES2026 upsert
console.log(map.getOrInsert('count', 0)) // 0
```

`getOrInsertComputed` can be used in a similar way, but providing a function to compute the default value. Useful when you want to avoid expensive computing until it's actually needed.

```js
const map = new Map()
console.log(map.getOrInsertComputed('date', () => Date.now()))
```

## sumPrecise

Calculating the sum of an array with numbers is a common task. With `sumPrecise` it is very easy to do for iterables. No more `reduce`.

```js
const sum = Math.sumPrecise([1, 2, 3, 4, 5])
console.log(sum) // 15
```

The reason it has precise in the name is because it will sum floating point numbers more precisely. See the difference in this example.

```js
let values = [1e20, 0.1, -1e20]
console.log(values.reduce((a, b) => a + b, 0)) // 0
console.log(Math.sumPrecise(values)) // 0.1
```

## Error.isError

This is a more robust alternative to `instanceof Error`.

```js
console.log(Error.isError(new Error())) // true
console.log(Error.isError(new TypeError())) // true
console.log(Error.isError('error')) // false
```

`instanceof Error` can produce false negative with a cross-realm, such as errors from an iframe or node's `vm` modules.

## fromAsync

`Array.fromAsync` iterates an async iterable (will also work on sync itarables), similar to `for await`. `Array.fromAsync` await all promises sequentially and returns a new `Promise` that resolves into an array with the values.

```js
function returnPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('wait 300 ms for me'), 300)
  })
}

const asyncIterable = async function* () {
  yield await returnPromise()
  yield await returnPromise()
}

const array = await Array.fromAsync(asyncIterable())
console.log(array) // [ 'wait 300 ms for me', 'wait 300 ms for me' ]
```

## Iterator.concat

`Iterator.concat` is made to make it simpler to join 2 or more iterators into a single iterator.

```js
function* sequence1() {
  yield 1
  yield 2
}

function* sequence2() {
  yield 3
  yield 4
}

const joined = Iterator.concat(sequence1(), sequence2(), [5, 6])

for (const n of joined) {
  console.log(n)
}
```

## JSON.parse source

`JSON.parse` has been updated, it now exposes the source. Transorming between JSON text and JavaScript values can be lossy. Which is often a problem with deserializing `BigInt`.

Here is an example of how the deserialized number is wrong, without using the extra reviver parameter. Which is a function with access to the key, value and the source.

```js
const json = `{
  "name": "Scrooge McDuck",
  "money": 9007199254740993
}`

const dataLossy = JSON.parse(json)
console.log(dataLossy.money) // 9007199254740992

const data = JSON.parse(json, (key, value, { source }) => {
  if (key === 'money') {
    return BigInt(source)
  }
  return value
})
console.log(data.money) // 9007199254740993n
```

It can also be used to preserve `Date` which otherwise would be parsed into a string.

```js
const json = JSON.stringify({ date: new Date() })

const date1 = JSON.parse(json).date
console.log(typeof date1) // string

const date2 = JSON.parse(json, (key, value, { source }) => {
  if (key === 'date') {
    return new Date(value)
  }
  return value
}).date
console.log(typeof date2) // object
```

## Uint8Array to/from base64 and hex

If you are working with binary data using Uint8Arrays you now have a built-in mechanism to encode and decode into base64 and hex.

```js
const arr = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
console.log(arr.toBase64()) // 'SGVsbG8gV29ybGQ='
console.log(arr.toHex()) // '48656c6c6f20576f726c64'

console.log(Uint8Array.fromBase64('SGVsbG8gV29ybGQ=')) // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
console.log(Uint8Array.fromHex('48656c6c6f20576f726c64')) // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100])
```
