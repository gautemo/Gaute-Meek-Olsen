---
title: Post script
date: 2021-01-10
category: npm
description: How you can use pre and post script in npm.
---

Npm allows you to add "pre" or "post" scripts for any script, by having another script with a matching name and adding "pre" or "post" to the beginning of them.

Let's say you have a project structure with a subfolder, that you also would like to install when the user runs `npm install`, that can be solved with:

```json
{
  "scripts": {
    "postinstall": "cd folder && npm i"
  }
}
```
