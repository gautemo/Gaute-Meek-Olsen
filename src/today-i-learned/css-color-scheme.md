---
title: color-scheme
date: 2022-05-25
category: CSS
description: color-scheme tells the operating system which colors the element can be rendered in.
---

If you use a dark mode theme you should set `color-scheme: dark` to let the operating system which colors the element can be rendered in. This includes form controls, scrollbars, and the used values of CSS system colors.

```css
:root {
  color-scheme: dark;
}
```

You can use both `light` and `dark` so that the user's color preferences from their device settings will be used.

```css
:root {
  color-scheme: light dark;
}
```
