---
title: Clear all local changes
date: 2019-09-20
category: git
---

Today I re-learned how to remove all changes done in your local repository

Restore modified or deleted paths to their original contents:

```bash
git checkout .
git clean -fd
```

`checkout .` restores all tracked files, while `clean` removes untracked files where `f` is for files and `d` for directories.

If you have added files you can reset them to unstaged with:

```bash
git reset
```

Undo all commits with:

```bash
git reset --hard origin/master
```

This was mostly to have a recipe I can go back to later.
