---
title: Firestore update rate limit
date: 2019-11-18
category: Firebase
description: Rate limit updates to a document in Firestore.
---

This is how to prevent frequent updates to a Firestore document.

```
match /users/{document=**} {
  allow create: if hasTimestamp();
  allow update: if hasTimestamp() && isCalm();
  function hasTimestamp() {
    return request.resource.data.timestamp == request.time;
  }
  function isCalm() {
    return request.time > resource.data.timestamp + duration.value(5, 's');
  }
}
```

Remember that `request` is the future state of the document (incoming), while `resource` is the requested document (existing).

This works when using `FieldValue.serverTimestamp()` as the timestamp. That is now the only valid timestamp because of `hasTimestamp()` checks against `request.time`.

`isCalm()` now checks that the existing timestamp is less than before 5 seconds ago.

Thanks puf

<script setup>
import Tweet from '../components/Tweet.vue'
</script>
<Tweet id="1196444467684884481"/>
