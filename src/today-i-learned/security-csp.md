---
title: Content Security Policy (CSP)
date: 2019-08-08
category: Security
description: How to set CSP headers to control where your website can download files from.
---

This is used to prevent your website from downloading files from untrusted domains.

I heard about it from Troy Hunt [here](https://youtu.be/kIo7DNAd_oo?t=1096).

You want to add something like this to your head tag in the HTML file.

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' https://www.googletagmanager.com; img-src 'self' https://*; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
/>
```

If some attackers have managed to get, let's say a script tag into your browser, this would stop that script from running.

For more information see [this page](https://content-security-policy.com/).
