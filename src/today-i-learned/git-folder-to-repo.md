---
title: Connect a folder to an existing repository
date: 2019-11-17
updated: 2022-11-29
category: git
---

Often when I create a new repository through the GitHub website I initiate it with a Readme and License. When I don't clone this repo directly, but rather want to connect a folder to it, these commands come in handy.

```bash
git init
git remote add origin https://github.com/url.git
git pull origin main --allow-unrelated-histories

//fix merge conflicts if they exist and commit

git push --set-upstream origin main
```
