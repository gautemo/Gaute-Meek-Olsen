---
title: Formatting large numbers in JavaScript
date: 2020-04-12
category: JavaScript
description: Using Intl to display large numbers formatted.
---

How to get a formatted number easily in JavaScript that is human-readable with Intl.NumberFormat.

Let's say we want to display three million, 3000000. This isn't that easy to read, you need to look closely to check that it isn't 300,000 or 30,000,000.

```js
const number = 3000000
const numberToDisplay = new Intl.NumberFormat().format(number)
```

Bonus, it will be formatted according to the users' local settings. For me in Norway, `numberToDisplay` is 3 000 000. While 'en-US' will be 3,000,000 and 'de-DE' it is 3.000.000.
