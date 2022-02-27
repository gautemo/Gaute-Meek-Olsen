---
title: git commit -a
date: 2020-03-28
category: git
---

Today I learned that you can add `-a` to a commit command to automatically stage files that have been modified and deleted.

Why write two lines:

```bash
git add .
git commit -m "msg"
```

When you can write one:

```bash
git commit -m "msg" -a
```

**NB**: new files you have not told Git about are not affected.
