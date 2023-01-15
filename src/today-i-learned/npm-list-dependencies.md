---
title: dependency tree
date: 2023-01-12
category: npm
description: How to list the dependency tree.
---

With `npm ls` you can list the dependencies. Adding `--all` to see the nested dependency tree. You can also use `--omit` to omit dev dependencies.

```sh
npm ls --all --omit dev
```

You can also find the tree for a given package:

```sh
npm ls @vue/reactivity
```
