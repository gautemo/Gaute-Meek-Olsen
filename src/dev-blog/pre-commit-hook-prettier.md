---
title: Pre-commit hook with Git
description: How to set up a pre-commit hook running prettier, without huskey
date: 2023-09-28
coverImgExtension: png
tags: []
---

This is an easy guide to setting up formatting your frontend code with [Prettier](https://prettier.io/) automatically before every Git commit. Usually, guides will point you towards using [huskey](https://github.com/typicode/husky), but it is really simple to do without any additional dependencies.

Go to the `.git/hooks` folder in a git-initialized folder and create the file `pre-commit`. Add this code to your `pre-commit` file:

```
#!/bin/sh

exec npx lint-staged
```

The hook uses the dependency [lint-staged](https://github.com/okonet/lint-staged), which makes sure to run Prettier only on the staged files. This improves speed compared to running prettier on all files `prettier . --write`. lint-staged requires a configuration file, so you can add `lint-staged.config.js` with e.g.

```js
export default {
  '*.(vue|md|js|ts|css|json)': (filenames) => filenames.map((filename) => `prettier --write '${filename}'`),
}
```

Now make some changes and perform a commit to see it all in action.

Note that the `.git/hooks/pre-commit` file is personal on your computer, and others working on the same repository will not get this pre-commit hook the same way as if it was set up with huskey. But it is probably better to give each developer the choice to run prettier on save, on commit, or whenever they prefer.

Go to [Atlassian](https://www.atlassian.com/git/tutorials/git-hooks) to read more about git hooks.
