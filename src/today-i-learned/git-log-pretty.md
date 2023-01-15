---
title: Log pretty
date: 2020-10-29
category: git
description: How to log last commits with less noise.
---

When only the commit message and hash matter, this is an easy way to log the last commits.

```sh
git log -n 5 --pretty=oneline
```

Or simpler if you want with abbreviated hashes.

```sh
git log -n 5 --oneline
```
