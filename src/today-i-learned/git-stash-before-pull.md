---
title: Stash local changes before pull
date: 2019-12-08
category: git
description: git stash so you can pull changes and then use git stash pop.
---

When you want to pull remote commits but have changes in the same files locally, you get an error.

I often solved this by committing my changes and then running `git pull`.

But if you don't want to commit your changes yet, you can use git stash

```bash
git stash
git pull
git stash pop
```

That's it. Maybe you need to solve any merge conflicts.
