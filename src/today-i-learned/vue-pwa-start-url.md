---
title: Fix PWA start URL with Vue Router
date: 2019-11-17
category: Vue
description: Change start URL of your PWA.
---

If you have created a Vue project with the CLI with PWA and routing, you might have an issue that the installed PWA is starting with a blank page.

To fix this, go to your manifest.json and change the `start_url` from `./index.html` to `/`.
