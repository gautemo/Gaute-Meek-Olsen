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
date: 2018-11-15
hideCoverImg: true
coverImgExtension: png
tags: [CSS]
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
