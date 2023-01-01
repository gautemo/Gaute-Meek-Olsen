---
title: Improve readability for test fun with backticks
date: 2019-12-07
category: Kotlin
description: Creating test functions with backticks for the name to improve readability.
---

Kotlin allows you to name functions with backticks, allowing you to put spaces in the name to write a sentence. This isn't very nice for ordinary functions. But for your unit tests, this is perfect, since you never call these functions yourself. This improves readability a lot. No need for CamelCase or Snake_case.

```kotlin
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

internal class MagicNumberTests {

  // Not that readable function name
  @Test
  fun shouldAlwaysReturn100ForMagicWordHappy(){
    val result = findMagicNumber("happy")
    assertEquals(100, result)
  }

  // Now this is a lot better
  @Test
  fun `should always return 100 for magic word happy`(){
    val result = findMagicNumber("happy")
    assertEquals(100, result)
  }
}
```
