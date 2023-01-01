# gaute-meek-olsen

My personal website: [gaute.dev](https://gaute.dev)

## pre-commit lint-staged

Add file `.git/hooks/pre-commit` with content:

```sh
#!/bin/sh

exec npx lint-staged
```

## Blogs

Create `.md` file in [blog](src/blog). Start file with

```
---
title: How to Change the Cursor to an Image
description: Changing the cursor with CSS.
date: 2018-11-15
updated: 2022-02-24
hideCoverImg: true
coverImgExtension: png
tags: [CSS]
series: Twitter bot with Kotlin in AWS
---
```

### Cover image

Go to [squoosh.app/](https://squoosh.app/).
Usually settings

- width 600px
- MozJPEG
- Quality 70%

### Embed Tweet

```md
<Tweet id="123" />
```
