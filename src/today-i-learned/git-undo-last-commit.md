---
title: Undo last commit
date: 2023-01-08
category: git
description: How to undo last commit, either locally or remotely. With keeping the changes or not.
---

This is a quick guide for undoing your last commit.

## Revert commit

If you would like to keep the commit in the history, but just undo the changes:

```sh
git revert 5d29264
```

## Remove commit

### Keep changes

```sh
git reset HEAD~
```

### Lose changes

```sh
git reset --hard HEAD~
```

### Remote server

This is only if your commit was pushed to the remote server and therefore have to force push:

```sh
git push --force-with-lease
```

### Multiple commits

Specify the number, e.g.

```sh
git reset HEAD~3
```
