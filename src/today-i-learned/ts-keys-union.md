---
title: keyof typeof
date: 2022-09-11
category: TypeScript
description: How to get a union type of all the keys of an object.
---

With `keyof typeof` we can get a union type with all the property names of an object.

```ts
const me = { name: 'Gaute', age: 31 }
type Keys = keyof typeof me // "name" | "age"
```

## Explanation

We know `typeof` from JavaScript, but TypeScript gives a bit more info than just `object`.

```ts
type MeType = typeof me
/*
{
    name: string;
    age: number;
}
*/
```

And then `keyof` on a type will give us all the keys/property names in a union type, so a value for `keyof typeof me` has to be either `name` or `age`.
