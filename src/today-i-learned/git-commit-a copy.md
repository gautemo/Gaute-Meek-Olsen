---
title: Git squash
date: 2020-09-23
category: git
description: How to do an interactive rebase, also known as squash, locally.
---

First, you need to figure out which commits you want to squash, you can log your commits:

```sh
git log -n 5 --pretty=oneline
```

Then you can count how many you want to squash, let's squash the last three:

```sh
git rebase --interactive HEAD~3
```

or use the commit hash from the one commit before the one you want the squash to start from:

```sh
git rebase --interactive 63881f09fb08036e0b96db05f5654323312df3f2
```

Then you can let the commit you want to start from stay as `pick` and change the ones afterward you want to include to `s`.

Save, close the file, update the commit message, and you are done.
