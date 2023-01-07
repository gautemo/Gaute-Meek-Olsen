---
title: What's new in JavaScript - ES2022
description: All new features from ECMAScript 2022.
date: 2022-06-28
tags: [JavaScript]
---

In June 2022, a handful of new features arrived in the JavaScript language.

## TLDR - To Long, Didn't Read

If you don't want to read the entire article, I have gathered the most noteworthy in this code snippet.

```js
/* Top-level await */
const response = await fetch('https://gaute.dev')

/* .at() */
const last = ['🐯', '🐥', '🦞'].at(-1)

/* Error cause */
new Error('Some error', { cause: 'cause of error' })

/* Object.hasOwn */
Object.hasOwn({ myNumber: 5 }, 'myNumber') /
  /* Regular expression /d flag */
  spider /
  d.exec('Where is the spider?').indices[0]

/* New class elements */
class Robot {
  static maxAge = 100
  #age = 10
}
```

## Background

Every year in June a new edition of ECMAScript is released, which is the specification of JavaScript. It is the TC39 committee that is responsible for taking a proposal from idea to approval, also known as stages 0 to 4 which is better explained at [https://tc39.es/process-document/](https://tc39.es/process-document/). The edition released will contain every proposal that reached stage 4. This year ES2022, also known as ES13, was released with a couple of useful features we will take a look at.

## Top-level await

In 2017 we got `async` and `await` in JavaScript to easier handle asynchronous code. But the limitation was that await had to be used in an async function. Now we can use `await` on the root level in modules. Note that with top-level `await` the code afterward will wait to run until the asynchronous code has finished.

Time to stop with this awkward syntax to run the code directly with `await`.

```js
;(async () => {
  const response = await fetch('https://github.com/')
  console.log(await response.text())
})()
```

Now it can instead be written simply as this.

```js
const response = await fetch('https://github.com/')
console.log(await response.text())
```

## .at()

Arrays and strings have gotten a new method `at()` which takes in a number as the argument and returns the element on that index. Maybe you are thinking this is exactly the same as brackets. That is correct, and I will continue using that for the most. But `at()` supports negative indexes to retrieve elements from the end. Now it's much easier to get the last element.

```js
const list = ['🐯', '🐥', '🦞']
// Old way was list[list.length - 1]
const last = list.at(-1) // 🦞
const first = list.at(0) // 🐯
```

## Error cause

The known `Error` object has gotten a new property `cause` that we can use to indicate the cause of the error. It can be useful to catch an error, for then throwing a new error with a more specific message, but not losing the actual cause. The value in `cause` can be of type `any`, so don't make any assumptions that it has to be of type `Error`.

```js
try {
  const empty = {}
  console.log(empty.not.existing)
} catch (error) {
  throw new Error('It failed', { cause: error })
}
```

## Object.hasOwn

`Object.hasOwn` can be used to check if a property exists on an object. It is a more convenient alternative to `Object.prototype.hasOwnProperty`.

```js
const object = {
  myNumber: 5,
}
console.log(Object.hasOwn(object, 'myNumber')) // true
console.log(Object.hasOwn(object, 'nonExistent')) // false
```

## RegExp indices flag

Regular expressions have gotten a new flag `/d` to generate indexes for subtexts of your matches. That way you know when the text begins and ends.

```js
const match = /wolf/d.exec('strong wolf pack')
const [start, stop] = match.indices[0] // [7, 11]
```

## New class improvements

We got classes in JavaScript in 2015, but it hasn't been as popular as it has in many other languages. Maybe the reason was that it lacked among other things private and static fields and methods. Now classes have gotten an upgrade and those are included.

You can create a field directly without having to do it in a constructor.

```js
class Robot {
  name = 'Optimus Prime'
}
```

You can use private fields and methods, that can't be accessed from the outside. This is done by prefixing them with `#`.

```js
class Robot {
  #age = 0

  #increaseAge(addedYears) {
    this.#age += addedYears
  }
}
```

You can also use static fields and methods with the keyword `static`. This can also be done in combination with private fields and methods, but as static. You also have the option to create a static block that will run when the class is created, which will say when the JavaScript file runs, not when you initiate an object of the class. This can help you set static values more programmatically.

```js
class Robot {
  static price = 999
  static #maxAge = 100

  static {
    const isSale = new Date().getHours() < 10
    if (isSale) {
      this.price = 50
    }
  }

  static #privateMethod() {
    console.log('private static method called')
  }

  static publicMethod() {
    console.log('public static method called')
  }
}

console.log(Robot.price)
```

## in operator for private fields and methods

The last news is that we can use the `in` operator to check if a private field or method is defined on the class. I'm a bit unsure when you will have use for it, but the code looks like this.

```js
class Robot {
  #age = 0
  static hasAge(object) {
    return #age in object
  }
}

const robot = new Robot()
console.log(Robot.hasAge(robot)) // true
console.log(Robot.hasAge({})) // false
```
