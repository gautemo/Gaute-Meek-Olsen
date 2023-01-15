---
title: List recent branches committed to
date: 2021-04-14
category: git
description: Find the recent branches you have created a commit on.
---

If you need to find out recent branches you have worked on:

```sh
git for-each-ref --sort=-committerdate refs/heads/
```

You can also use `--format` to list the date of the commit:

```sh
git for-each-ref --sort=-committerdate --format='%(refname:short) (%(committerdate))' refs/heads/
```
