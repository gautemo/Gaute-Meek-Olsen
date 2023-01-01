---
title: Ignore already committed files
date: 2019-11-18
category: git
description: How to remove committed files that are later git ignored.
---

If you have some files that should be ignored, but you discovered them after committing or pushing the files, this will fix that.

## Step 1

Make sure all your changes are committed!

## Step 2

```bash
git rm -r --cached .
```

## Step 3

```bash
git add .
```

## Step 4

```bash
git commit -m ".gitignore fix"
```
