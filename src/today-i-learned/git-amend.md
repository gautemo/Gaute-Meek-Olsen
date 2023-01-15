---
title: git amend
date: 2021-10-18
category: git
description: How to add changes to your last commit
---

With `--amend` you can make changes to your most recent commit.

```sh
git commit --amend --no-edit
```

- `--amend` will add the changes to your recent commit.
- `--no-edit` will use the same commit message

If your commit was pushed to the remote server you need to force push, since the commit hash is updated.
