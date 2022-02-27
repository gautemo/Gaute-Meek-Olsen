---
title: Fragment Transactions with Kotlin
date: 2019-08-11
category: Android
---

First, add a helper method on the FragmentManager

```kotlin
inline fun FragmentManager.inTransaction(func: FragmentTransaction.() -> FragmentTransaction) {
  beginTransaction().addToBackStack(null).func().commit()
}
```

Then we can call it, like this:

```kotlin
supportFragmentManager.inTransaction {
  add(android.R.id.content, GalleryFragment())
}
```
