---
title: Git delete old branches
date: 2020-05-11
category: git
description: Delete all local branches that doesn't exists remote.
---

Over time in a project you end up with a lot of old branches. If you want to do some house keeping and only keep branches that exists on the remote server you can follow along.

::: warning
Make sure you don't have any local work you want to keep on a brach that has not been pushed.
:::

## Deleting local branches

First you want to delete all local branches, except `main`.

<script setup>
import ToggleView from '../components/ToggleView.vue'
</script>

<ToggleView :options="['Unix-like', 'Powershell']"><template #0>

```sh
git branch | grep -v "main" | xargs git branch -D
```

</template>
<template #1>

```sh
git branch | Select-String -NotMatch -Pattern "main" | %{ git branch -D $_.ToString().Trim() }
```

</template>
</ToggleView>

## Deliting remote branches

```sh
git remote prune origin
```

## Conclusion

Now you are only left with `main` and the remote-tracking branches that actually exists in the remote repository. You can see them with:

```sh
git branch -a
```
