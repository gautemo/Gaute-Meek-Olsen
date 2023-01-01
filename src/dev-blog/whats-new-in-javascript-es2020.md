---
title: What's new in JavaScript - ES2020
description: All new features from ECMAScript 2020.
date: 2020-07-08
tags: [JavaScript]
---

In June 2020, a handful of new features arrived in the JavaScript language.

## TLDR - To Long, Didn't Read

If you don't want to read the entire article, I have gathered the most noteworthy in this code snippet.

```js
/* Nullish coalescing */
const title = jobTitle ?? 'unemployed'
// defaults to unemployed if jobTitle is null or undefined

/* Optional chaining */
const ownsDog = house?.owner?.pet?.type === 'dog'
// does not crash if house, owner, or pet is nullish

/* Promise.allSettled */
const promises = [fetch('/succeeds'), fetch('/fails')]
const [r1, r2] = await Promise.allSetled(promises)
// resolves when all promises is settled (resolved or rejected)

/* BigInt */
BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1000) // 9007199254741991n

/* Dynamic import */
const { default: name, age } = await import('module.js')
// import anywhere and only when needed, instead of on top of file.

/* matchAll */
const matches = '1 44 2'.matchAll(/\d+/g)
for (const match of matches) console.log(match)
// match includes substring and index
```

## Background

Ecma International is responsible for standardizing JavaScript. Therefore they make the ECMAScript specification. So when someone refers to ECMAScript you can think of this as a synonym to JavaScript. Since 2015 they create yearly editions. Therefore we refer to the edition with the year, ie ECMAScript 2015 is shortened to ES2015. But there are a lot who use the count of the number of editions when referring to an edition, therefore ES6 is the same as ES2015. Future features not yet released are referred to as ESNext.

In June ECMAScript 2020/ES2020/ES11 was released and is already implemented in modern browsers. Let's look at what advantages this gives us.

## Nullish coalescing

If you want to assign a value, but want a default value in case it is `null` or `undefined`, you can use `??`.

```js
const name = person.fullName ?? 'anonymous'
```

Here the name will be "anonymous" if the object person doesn't have fullName set. If the person has a value for fullName, then that will be written to the variable name.

You might think that this is something you always have been able to do with `||`. But this is only almost the same, if the value before `||` is falsy, the evaluation won't short-circuit and the next value will be used. But remember that an empty string `''`, `0`, `NaN`, and `false` are falsy and will use the default value, something that might not be wanted if we want to assign those values. `??` uses instead nullish, which only checks for `null` or `undefined`.

```js
const user = { preferredSound: 0 }
let sound = user.preferredSound ?? 50 // value is 0
let soundWrong = user.preferredSound || 50 // value is 50
```

50 is only used if preferredSound is not set or null, it should be possible to set the sound-level to zero.

## Optional chaining

If you want to use properties that are nested in several levels in an object, you previously had to check if they are not `null` or `undefined` for the code not to crash. Now we can use `?.` before accessing those properties so that the code after is only used if the value is not `null` or `undefined`.

Imagine that we have a house with an owner, that again owns a pet. Here we need to make sure that house, owner, or pet has a value or check them in advance to avoid getting the error "Cannot read property 'type' of null". Here you can see how we needed to deal with this before and after ES2020.

```js
const house = { owner: { name: 'Jim', pet: null } }

// Old JavaScript
if (house && house.owner && house.owner.pet && house.owner.pet.type === 'dog') {
  console.log('owner has a dog')
}

// ES2020
if (house?.owner?.pet?.type === 'dog') {
  console.log('owner has a dog')
}
```

## Promise.allSettled

If we have more asynchronous requests that run in parallel, you could gather them with `Promise.all`. But this will throw an exception if one of the requests fails. What if we want to let every request finish no matter if others fail or not. With `Promise.allSettled` it will return when all requests are settled, either resolved or rejected.

```js
const promises = [Promise.resolve(1), Promise.reject(2)]
const [result1, result2] = await Promise.allSettled(promises)
```

Here we can still use the result1 value even though other promises were rejected.

## matchAll

If you want to use regex to find all instances of a regular expression match, you can use `match` to get all the substrings. But what if you want both the substring and the index? Then you can use `matchAll` and iterate the matches.

Let's find all the numbers in a string.

```js
const matches = 'Here are some numbers: 5 12 88'.matchAll(/\d+/g)
for (const match of matches) {
  console.log(match)
}

// Output:
// ["5", index: 22, input: "Here are some numbers: 5 12 88", groups: undefined]
// ["12", index: 24, input: "Here are some numbers: 5 12 88", groups: undefined]
// ["88", index: 27, input: "Here are some numbers: 5 12 88", groups: undefined]
```

## BigInt

`BigInt` is a new primitive datatype in JavaScript, the same as `Boolean`, `Number`, `String`, `Symbol`, and `undefined`. `BigInt` can handle numbers above the safe integer limit of `Number`. That means if we want to deal with numbers larger than 9_007_199_254_740_991, it is wise to use `BigInt`. `BigInt` is represented with an n at the end of the number.

Let's add 2 to the number 9_007_199_254_740_991, the correct number should end with the digit 3.

```js
9_007_199_254_740_991 + 2 // 9007199254740992
BigInt(9_007_199_254_740_991) + BigInt(2) // 9007199254740993n
```

## Dynamic import

Before we only could import modules statically at the top of the file. Now with dynamic imports, we have the option to do this anywhere in the code on-demand and only when we need it. `import()` will return a promise with the module.

```js
const module = await import('module')
```

## Module namespace exports

With import and export of JavaScript modules, we have in most situations been able to rename the name of the module. Like this.

```js
import * as values from 'module'
import { value as v } from 'module'

export { v as value }
```

But we have not been able to re-export something from another module with a name change directly. Now with ES2020 we can do it like this:

```js
export * as someUtils from 'utils'
```

## globalThis

If you write code that runs on multiple environments, for example, both the browser and a Node server, then they have different names for the global object. Browsers use `window`, Node uses `global`, and web workers use `self`. Now, `globalThis` will give you the correct global object no matter which environments the code runs in.

Here is an example where we want to check if we can prompt an alert to the user. If the code runs in a browser the `globalThis` will refer to window and alert will be available.

```js
if (typeof globalThis.alert === 'function') {
  globalThis.alert('hi')
}
```
