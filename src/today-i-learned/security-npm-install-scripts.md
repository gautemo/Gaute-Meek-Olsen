---
title: Disallow npm install to run other scripts
date: 2019-11-17
category: Security
---

When installing packages from NPM, the packages could run preinstall and postinstall scripts. This could potentially be malicious code or viruses allowed to run directly on your computer.

This could be disallowed with

```bash
npm install --ignore-scripts
```

or disallowed all the time with

```bash
npm config set ignore-scripts true
```

This could lead to problems you need to fix if the package relies on those scripts. Kind of a hassle versus safety dilemma.

More information on the [npm blog](https://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability)
