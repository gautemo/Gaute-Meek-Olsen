---
title: Formatted clock in JavaScript
date: 2020-04-03
category: JavaScript
description: Using Intl to format the time correctly.
---

How to get a formatted clock display easily in JavaScript with Intl.DateTimeFormat.

```js
const date = new Date()
const time = new Intl.DateTimeFormat('default', {
  hour: 'numeric',
  minute: 'numeric',
}).format(date)
```

Bonus, it will be formatted according to the users' local settings. For me, the time will be '23:00', while those on the 12-hour clock will see '11:00 PM'.

No need to deal with string splitting, or concatenation of values.
