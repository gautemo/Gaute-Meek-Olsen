---
title: How to publish a js library to NPM and CDN
date: 2018-11-16
hideCoverImg: true
tags: [NPM, JavaScript]
description: A guide to how you can publish your package to NPM.
---

Let's say we have made our new JavaScript library to easily select elements from the DOM. A lot of people still use jQuery, but that should be abandoned a long time ago. Let's make something to ease them into living without it.

```js
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
```

Now it's time to publish our library so it can be installed with NPM or imported by script from a CDN, so it can be used in other projects.

First, let's create our package.json file.

```bash
npm init
```

The fields **name** and **version** are required. But I encourage you to fill out the other fields as well. This is our package.json file.

```json
{
  "name": "selector-library",
  "version": "1.0.0",
  "description": "Library to select elements the jQuery way, without needing to import all the jQuery stuff",
  "main": "selector.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gautemo/selector-library.git"
  },
  "author": "Gaute Meek Olsen (https://gaute.app)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/gautemo/selector-library/issues"
  },
  "homepage": "https://github.com/gautemo/selector-library#readme"
}
```

The **main** field contains the starting js file (often minified and in a dist folder) where we export our module. Use the **bin** field if it's a command-line file.

Let's update our selector.js file and export our variables.

```js
export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)
```

If you don't have an NPM user you need to sign up [here](https://www.npmjs.com/signup).

Then log in to your terminal.

```bash
npm login
```

Now we are ready to publish our module.

```bash
npm publish
```

That's it, we have published our NPM module. See NPMs [own guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) for a more detailed guide.

Others can now use our module. Then we should have a readme with the installation and usage steps. (If you are coding along, create a new project)

Installation:

```bash
npm i selector-library --save
```

Usage:

```js
import { $, $$ } from 'selector-library'

$('#id-name').classList.add('added-class')
$$('.class-name').forEach((el) => (el.style.backgroundColor = 'red'))
```

See [WesBos guide](https://wesbos.com/javascript-modules/) for how to export and import your modules to fit your need.

We also want to access the module from a script tag, we'll use the simple solution [UNPKG](https://unpkg.com/) which gets the file from npm for us. This is what we put in the src attribute.

`unpkg.com/:package@:version/:file`

We can skip `file` and `version` if we don't have to be specific about what the browser should download. Pick the option you like.

```html
<script src="https://unpkg.com/selector-library@1.0.6/selector.js"></script>
```

```html
<script src="https://unpkg.com/selector-library"></script>
```

Just one short thing, including a script tag, does not allow the export statement. Let's change our selector script if we want to allow installation through NPM and CDN.

```js
if (typeof exports != 'undefined') {
  exports.$ = document.querySelector.bind(document)
  exports.$$ = document.querySelectorAll.bind(document)
} else {
  var $ = document.querySelector.bind(document)
  var $$ = document.querySelectorAll.bind(document)
}
```

That's it! Example NPM and GitHub. Of course, this is just a demo library, but this is how creating an NPM module is done that's also available to a script tag for people not using a build tool.
