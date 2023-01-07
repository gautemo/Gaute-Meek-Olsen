---
title: View unpushed commits
date: 2020-08-25
category: git
description: Log commits and view changes between locally and remote.
---

If you want to view which commits you have done localy that are not yet pushed, you can use these commands. Commands assumes you are on brach `main`.

View commits:

```sh
git log origin/main..HEAD
```

View diff:

```sh
git diff origin/main..HEAD
```
