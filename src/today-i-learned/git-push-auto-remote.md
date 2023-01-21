---
title: Auto remote push branches
date: 2022-07-13
category: git
description: Now git allows us to auto push branches to remote origin.
---

Since Git 2.37.0 you can forget about the `--set-upstream origin` which I always just copy after getting it wrong on purpose the first time writing `git push` on a new branch.

Now we can change the default with `git config`.

```sh
git config --global --add --bool push.autoSetupRemote true
```

Requires git version `2.37.0` or later.
