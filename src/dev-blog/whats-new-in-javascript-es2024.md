---
title: What's New in JavaScript - ES2024
description: All new features from ECMAScript 2024.
date: 2024-07-28
tags: [JavaScript]
---

In June 2024, some new features arrived in the JavaScript language. There are just a few of them you are likely to use, but I will go through them all.

## Array groupBy

Grouping items in an array has become much easier. The array can be grouped into an object or a map.

```js
const ducks = [
  { age: 30, name: 'Donald Duck' },
  { age: 12, name: 'Dewey' },
  { age: 65, name: 'Scrooge McDuck' },
]

const grouped = Object.groupBy(ducks, (d) => (d.age < 18 ? 'children' : 'adults'))
console.log(grouped.children) // [ { age: 12, name: 'Dewey' } ]
console.log(grouped.adults) // [ { age: 30, name: 'Donald Duck' }, { age: 65, name: 'Scrooge McDuck' } ]

const map = Map.groupBy(ducks, (d) => {
  if (d.age < 18) return 'children'
  if (d.age > 200) return 'ghosts'
  return 'adults'
})
console.log(map.get('children')) // [ { age: 12, name: 'Dewey' } ]
console.log(map.has('ghosts')) // false
```

## Promise.withResolvers

`Promise.withResolvers` allows you to resolve and reject the promise in the same scope as the promise itself.

```js
const { promise, resolve, reject } = Promise.withResolvers()

async function waitForPromise() {
  const result = await promise
  console.log(result) // done
}

waitForPromise()
resolve('done')
```

## RegExp UnicodeSets

The `v` flag is an "upgrade" to the `u` flag. The `\p` matches a set of characters. With the `v` flag it also allows intersection, union, and subtraction syntaxes.

```js
const greek = /\p{Script_Extensions=Greek}/v.test('μ')
console.log(greek) // true

const emoji = /\p{Emoji}/v.test('👽')
console.log(emoji) // true

const digitNotNine = /[\d--9]/v
console.log(digitNotNine.test('9')) // false
console.log(digitNotNine.test('1')) // true

const greekLetter = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v
// U+03C0 GREEK SMALL LETTER PI
console.log(greekLetter.test('π')) // true
// U+1018A GREEK ZERO SIGN
console.log(greekLetter.test('𐆊')) // false

const union = /[\q{1|2}]/v
console.log(union.test('1')) // true
```

## Strings well formed

In JavaScript, strings are sequences of UTF-16 code units, 65536 possible characters. The extra characters are stored in UTF-16 as surrogate pairs. To avoid ambiguity, the two parts of the pair must be between 0xD800 and 0xDFFF called surrogates. A "lone surrogate" is a 16-bit code unit where the leading surrogate or the trailing surrogate is wrong. Strings not containing any lone surrogates are called well-formed strings, and are safe to be used in functions not using UTF-16 e.g. `encodeURI`.

```js
console.log('ab\uD800'.isWellFormed()) // false
console.log('ab\uD83D\uDE04c'.isWellFormed()) // true
console.log('abc'.isWellFormed()) // true

console.log('\uD83D\uDE04'.toWellFormed()) // 😄
```

## waitAsync

The Atomics namespace object is for atomic operations. Atomics is helpful for synchronization between multiple threads such as workers. ES2024 has added the waitAsync function. This can be useful for not locking the main thread.

```js
const worker = new Worker('./worker.js')

const sab = new SharedArrayBuffer(4)
const int32 = new Int32Array(sab)

worker.postMessage(sab)

const result = Atomics.waitAsync(int32, 0, 0)
console.log(await result.value)
```

```js
self.onmessage = async (event) => {
  const int32 = new Int32Array(event.data)
  Atomics.notify(int32, 0)
}
```

## ArrayBuffer resize

The constructor has added a new options parameter, if you specify `maxByteLength` the buffer will be resizable. The properties `resizable` and `maxByteLength` and the function `resize` have been added.

```js
const buf = new ArrayBuffer(2, { maxByteLength: 4 })
console.log(buf.resizable) // true
console.log(buf.maxByteLength) // 4

const typedArray = new Uint8Array(buf)
console.log(typedArray.length) // 2
buf.resize(4)
console.log(typedArray.length) // 4
```

## ArrayBuffer transfer

Transfering is usually faster than copying and has become easier. The functions `transfer` and `transferToFixedLength` and the property `detached` are added.

```js
const original = new ArrayBuffer(16, { maxByteLength: 32 })
const transferred = original.transfer()
console.log(original.detached) // true
console.log(transferred.detached) // false
```

`transferToFixedLength` will make the buffer not resizable.

```js
const original = new ArrayBuffer(16, { maxByteLength: 32 })
const transferred = original.transferToFixedLength()
console.log(transferred.resizable) // false
```
