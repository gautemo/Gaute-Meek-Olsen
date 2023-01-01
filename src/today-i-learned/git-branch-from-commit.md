---
title: Create a Branch from a Commit
date: 2020-03-08
category: git
description: How to create a new branch from an earlier commit.
---

Let's say you have committed some changes, but you want to continue from a previous commit without deleting your commits from the branch because you might want to go back.

1. List recent commits to find the one you want to branch from. You can change the number 3 to how many commits you want to go back.
2.

```bash
git log -3
```

3. Copy the commit hash (looks something like this: `5eb92c63c960036a9cb52aaa98b916ce9ca86979`)
4. Add your branch name and commit hash to the next step
5.

```bash
git checkout -b my-branch-name 5eb92c63c960036a9cb52aaa98b916ce9ca86979
```
