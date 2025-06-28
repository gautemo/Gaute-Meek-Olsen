---
title: What's New in JavaScript - ES2025
description: All new features from ECMAScript 2025.
date: 2025-06-28
tags: [JavaScript]
---

It's June 2025, which means a new version of the specification of JavaScript is out. Let's take a look at the new features added.

## Set methods

We have seven new methods added to JavaScript's built-in Set class.

### Set.prototype.intersection()

`intersection` is used to find elements that exist in both sets.

```js
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])
console.log(set1.intersection(set2)) // Set(2) {2, 3}
```

### Set.prototype.union()

`union` is used to get elements in either both sets or in one of them.

```js
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])
console.log(set1.union(set2)) // Set(4) {1, 2, 3, 4}
```

### Set.prototype.difference()

`difference` is used to get elements in this set but not the other one.

```js
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])
console.log(set1.difference(set2)) // Set(1) {1}
```

### Set.prototype.symmetricDifference()

`symmetricDifference` is used to get elements in one of the sets but not in both.

```js
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])
console.log(set1.symmetricDifference(set2)) // Set(2) {1, 4}
```

### Set.prototype.isSubsetOf()

`isSubsetOf` returns true if all elements in this set also exist in the other.

```js
const set1 = new Set([1, 2])
const set2 = new Set([1, 2, 3])
const set3 = new Set([2, 3, 4])
console.log(set1.isSubsetOf(set2)) // true
console.log(set1.isSubsetOf(set3)) // false
```

### Set.prototype.isSupersetOf()

`isSupersetOf` returns true if all elements in the other set also exist in this set.

```js
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3])
const set3 = new Set([3, 4])
console.log(set1.isSupersetOf(set2)) // true
console.log(set1.isSupersetOf(set3)) // false
```

### Set.prototype.isDisjointFrom()

`isDisjointFrom` returns true if the sets have no common element.

```js
const set1 = new Set([1, 2])
const set2 = new Set([2, 3])
const set3 = new Set([3, 4])
console.log(set1.isDisjointFrom(set2)) // false
console.log(set1.isDisjointFrom(set3)) // true
```

## Import Attributes & JSON modules

The primary use case for import attributes is to import non-JS modules.

```js
import json from './data.json' with { type: 'json' }
```

You can now use the `with` keyword followed by an object where currently the only supported attribute is `type` to specify how the module should be loaded. You could ask why it is needed when we can see from the file extension that the type is JSON. However the file extension doesn't have to be the same as the MIME type of the file, so this is needed for security reasons, to prevent executing code when not intended.

Import attributes with `with` are also supported for dynamic imports and exports.

```js
import('./data.json', { with: { type: 'json' } })

export { default } from './data.json' with { type: 'json' }
```

Currently, only JSON modules are supported. However, CSS modules are experimental and supported in some browsers.

## Iterator Helpers

Iterators define a sequence, possibly infinite enumerable data sets. Now they have the same methods that exist on Arrays to make them easy to work with.

### map

```js
function* sequence() {
  yield 1
  yield 2
}

const double = sequence().map((value) => value * 2)
console.log(double.next()) // {value: 2, done: false}
console.log(double.next()) // {value: 4, done: false}
```

### filter

```js
function* sequence() {
  yield 1
  yield 2
}

const even = sequence().filter((value) => value % 2 === 0)
console.log(even.next()) // {value: 2, done: false}
console.log(even.next()) // {value: undefined, done: true}
```

### take

```js
function* sequence() {
  yield 1
  yield 2
}

const sequenceWith1Element = sequence().take(1)
console.log(sequenceWith1Element.next()) // {value: 1, done: false}
console.log(sequenceWith1Element.next()) // {value: undefined, done: true}
```

### drop

```js
function* sequence() {
  yield 1
  yield 2
}

const dropFirstElement = sequence().drop(1)
console.log(dropFirstElement.next()) // {value: 2, done: false}
console.log(dropFirstElement.next()) // {value: undefined, done: true}
```

### flatMap

```js
function* sequence() {
  yield 'hello world'
}

const words = sequence().flatMap((value) => value.split(' '))
console.log(words.next()) // {value: 'hello', done: false}
console.log(words.next()) // {value: 'world', done: false}
```

### reduce

```js
function* sequence() {
  yield 1
  yield 2
}

const sum = sequence().reduce((acc, value) => acc + value)
console.log(sum) // 3
```

### reduce

```js
function* sequence() {
  yield 1
  yield 2
}

const array = sequence().toArray()
console.log(array) // [1, 2]
```

### forEach

```js
function* sequence() {
  yield 1
  yield 2
}

sequence().forEach((value) => console.log(value)) // 1 // 2
```

### some

```js
function* sequence() {
  yield 1
  yield 2
}

const hasEven = sequence().some((value) => value % 2 === 0)
console.log(hasEven) // true
```

### every

```js
function* sequence() {
  yield 1
  yield 2
}

const allEven = sequence().every((value) => value % 2 === 0)
console.log(allEven) // false
```

### find

```js
function* sequence() {
  yield 1
  yield 2
}

const firstEven = sequence().find((value) => value % 2 === 0)
console.log(firstEven) // 2
```

### Iterator.from

Unlike the methods above, this is a static method on Iterator which takes in an object.

```js
class Iter {
  next() {
    return { done: false, value: 1 }
  }
}

const iter = new Iter()
const wrapper = Iterator.from(iter)

console.log(wrapper.next()) // {done: false, value: 1}
```

## Promise.try

`Promise.try` is a static method that wraps a function into a Promise. The function can be both sync and async, the idea is that we don't have to know, we just wrap it in `Promise.try` and now we know it is async.

```js
function syncFunc() {
  return 'sync'
}

async function asyncFunc() {
  return 'async'
}

Promise.try(syncFunc)
  .then((result) => console.log(result)) // sync
  .catch((error) => console.error(error))
  .finally(() => console.log('done'))

Promise.try(asyncFunc)
  .then((result) => console.log(result)) // async
  .catch((error) => console.error(error))
  .finally(() => console.log('done'))
```

Extra arguments will be passed to the function.

```js
function double(value) {
  return value * 2
}

Promise.try(double, 5).then((result) => console.log(result)) // 10
```

Errors thrown from the function are caught and turned into rejections.

```js
function func() {
  throw new Error('buhu')
}

Promise.try(func)
  .then((result) => console.log(result))
  .catch((error) => console.error(error)) // Error: buhu
```

## Duplicate named capturing groups

Previously named capturing groups in a regex needed to be unique. Now capturing groups don't have to be unique as long as they are in different `|` alternatives.

Let's imagine we have a use case where we want to capture the year in the string, but the string can contain dates in different formats. Here `dd.mm.yyyy` and `yyyy.mm.dd` are supported.

```js
const match = '26.06.2025'.match(/(?<year>\d{4})\.\d{2}\.\d{2}|\d{2}\.\d{2}\.(?<year>\d{4})/)
console.log(match.groups.year) // 2025
```

## Regular Expression Pattern Modifiers

Modifiers allow you to change RegExp flags within a subexpression.

```js
const re = /^Hello\s(?i:w)orld$/
console.log(re.test('Hello world')) // true
console.log(re.test('Hello World')) // true
console.log(re.test('HELLO WORLD')) // false
```

The flags, `g`, `y`, `u`, and `d`, currently cannot be modified mid-expression.

## Regular Expression Escaping

`RegExp.escape` static function that escapes all the regex syntax characters in a string.

```js
const reString = RegExp.escape('Hello world.')
console.log(reString) // \x48ello\x20world\.
const re = new RegExp(reString)
console.log(re.test('Hello world.')) // true
console.log(re.test('Hello world!')) // false
```

See how `.` is transformed into `\.`, meaning it will match a period and not any character except newline.

## Float16Array

Now we have `Float16Array`, in addition to `Float32Array` and `Float64Array` that we already had. `DataView` has added the methods `getFloat16` and `setFloat16`. The static method `Math.f16round` is also added.

The `Float16Array` typed array represents an array of 16-bit (64kb) floating point numbers.

```js
const float16 = new Float16Array(2)
float16[0] = 42
console.log(float16[0]) // 42
float16[0] = 66000
console.log(float16[0]) // Infinity
```

I think this is code I'm never going to use, but it has its use cases for interacting with highly optimized and performance-sensitive systems such as float-backed canvases, WebGPU, WebGL, and deep learning models.
