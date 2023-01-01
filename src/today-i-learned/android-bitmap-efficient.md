---
title: Loading Bitmaps Efficiently
date: 2019-08-12
category: Android
description: Using Glide for more efficient image handling.
---

If you are dealing with loading many bitmaps, chances are you will create a laggy app. To avoid this don't do the bitmap work on the UI thread. Today I learned there is a library called [Glide](https://github.com/bumptech/glide) which does the work for you.

Might change my projects to use [Coil](https://github.com/coil-kt/coil/) instead in the future. It looks promising but was a little buggy at the moment.
