---
title: rel=noopener
date: 2019-08-08
category: HTML
description: How to protect your anchor elements.
---

You should add `rel="noopener"` on all links with `target="_blank"` for performance and security. This is because, without it, it could allow the other page to run JavaScript on the same process as your page.

`rel="norefferer"` does the same, but also prevents the Referer header to be sent to the new page.

For more information, see [developers.google.com](https://developers.google.com/web/tools/lighthouse/audits/noopener)
