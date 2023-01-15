---
title: Extension properties
date: 2022-03-07
category: Kotlin
description: How to create extension properties in Kotlin, similar to extension functions.
---

You are probably familiar with extension functions in Kotlin.

```kotlin
class Count(var value: Int)

fun Count.double() = value * 2
```

But you can also have extension properties.

```kotlin
val Count.double: Int
  get() = value * 2
```
