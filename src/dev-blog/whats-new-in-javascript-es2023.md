---
title: What's New in JavaScript - ES2023
description: All new features from ECMAScript 2023.
date: 2023-07-06
tags: [JavaScript]
---

In June 2023, some new features arrived in the JavaScript language.

## TLDR - To Long, Didn't Read

If you don't want to read the entire article, I have gathered the most noteworthy in this code snippet.

```js
#!/usr/bin/env node

const lastEven = [1, 2, 3].findLast((n) => n % 2 === 0)
const lastEvenIndex = [1, 2, 3].findLastIndex((n) => n % 2 === 0)

const sorted = [2, 1, 3].toSorted((a, b) => a - b)
const reversed = [1, 2, 3].toReversed()
const changedSpliced = [1, 2, 3].toSpliced(0, 1, 0, 1)
const changedWith = [1, 2, 9].with(2, 3)

const symbol = Symbol('my-symbol')
const weakMap = new WeakMap()
weakMap.set(symbol, 10)
```

## Background

Every year in June a new edition of ECMAScript is released, which is the specification of JavaScript. This year ES2023, also known as ES14, was released with a couple of useful features we will take a look at.

## Array find from last

When dealing with arrays, it has previously been hard to find an item from the end and not the beginning without having some compromise such as unnecessary mutation or unnecessary copy.

Let's say we have an array and want to find the last valid.

```js
const array = [
  { valid: true, value: 10 },
  { valid: false, value: 20 },
  { valid: true, value: 30 },
]
```

No need to do something like this anymore.

```js
const lastValid = [...array].reverse().find((it) => it.valid)
```

From now on we can use `findLast`.

```js
const lastValid = array.findLast((it) => it.valid)
```

And similar we have `findLastIndex` for getting the last index given a condition.

```js
const lastValidIndex = array.findLastIndex((it) => it.valid)
```

## Change array by copy

Did you know that the array methods `sort` and `reverse` will not just return the sorted or reversed array, but also mutate the existing array?

```js
const array = [3, 2, 1]
const sorted = array.sort((a, b) => a - b)
console.log(array) // [1, 2, 3]
console.log(sorted) // [1, 2, 3]
```

If that broke your code, you could work around it with something like this.

```js
const array = [3, 2, 1]
const sorted = [...array].sort((a, b) => a - b)
```

No need for those workarounds anymore now that `toSorted`, `toReversed`, `toSpliced`, and `with` give you a copy instead.

### toSorted

```js
const array = [3, 2, 1]
const sorted = array.toSorted((a, b) => a - b)
```

### toReversed

```js
const array = [3, 2, 1]
const reversed = array.toReversed()
```

### toSpliced

`toSpliced(startÌndex, deleteCount, item1, item2, itemN)`

```js
const array = [1, 100, 3]
const counting = array.toSpliced(1, 1, 2)
console.log(counting) // [1, 2, 3]
```

### with

The `with` method changes the value of a given index in the array, returning a new array with the element at the given index replaced with the given value.

```js
const array = [10, 2, 3]
const counting = array.with(0, 1)
console.log(counting) // [1, 2, 3]
```

## Symbols in weak collections

`symbol` is a primitive in JavaScript that is guaranteed to be unique.

Now symbols are allowed as keys in `WeakMap` and entries in WeakSets and WeakRefs, and to be registered in FinalizationRegistries.

```js
const symbol = Symbol('my-symbol')

/* symbol as key */
const weakMap = new WeakMap()
weakMap.set(symbol, 10)
console.log(weakMap.get(symbol))

/* symbol as entry */
const weakSet = new WeakSet()
weakSet.add(symbol)
console.log(weakSet.has(symbol))

const weakRef = new WeakRef(symbol)
console.log(weakRef.deref())

const registry = new FinalizationRegistry((value) => {
  console.log(value)
})
registry.register(symbol, 'weakRef is lost')
```

## Hashbang

Hashbang/Shebangs are used to point to which binary that runs the script when the file is executable. Meaning you can add e.g. `#!/usr/bin/env node` or `#!/usr/bin/env -S deno run` as the first line and run the file without specifying the runtime. This is for Unix-like operating systems, meaning it won't work on Windows.

If you create a JavaScript file named hello.js with the content:

```js
#!/usr/bin/env node

console.log('👋')
```

You can now run it with only:

```sh
./hello.js
```

instead of

```sh
node hello.js
```

This has been possible before, but the change with ES2023 is that the engine will ignore the leading hashbangs in the source so that the runtimes don't have to.
