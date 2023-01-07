---
title: Git tags
date: 2020-09-07
category: git
description: Using tags in git.
---

## Creating a tag

Tags can either be annotaded or lightweight. The difference is that lightweight tags are just a pointer to a specific commit. While annotaded contains metadata such as the tagger name, email, date, a tagging message, and can be signed. Annotaded tags are recommended for release tags.

Annotaded tag:

```sh
git tag -a v1 -m "my version 1.0"
```

Lightweight tag:

```sh
git tag v1
```

### Tagging an earlier commit

First command is just to help if you need to find the commit hash.

```sh
git log -n 5 --pretty=oneline
git tag v1 36f5709fdbd8950e3016ef7ce34b3f71cd7e96af
```

## Listing your tags

```sh
git tag
```

## Pushing tags

Tags are not included in `git push`.

Push a specific tag:

```sh
git push origin v1
```

Push all tags:

```sh
git push --tags
```

## Deleting tags

Deleting tag only locally:

```sh
git tag -d v1
```

Deleting a remote tag:

```sh
git push origin --delete v1
```
