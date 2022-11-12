---
title: Firestore update rate limit
date: 2019-11-18
category: Firebase
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
<Tweet>
<p lang="en" dir="ltr">Implementing a write rate-limit in Firestore security rules.<br><br>The link contains examples with a global limit, and a per-user limit.<br><br>I still think this is one of the most fun things I&#39;ve done with Firestore security rules this year...<a href="https://t.co/AUIBD6RNt7">https://t.co/AUIBD6RNt7</a> <a href="https://t.co/gDDCByHmml">pic.twitter.com/gDDCByHmml</a></p>&mdash; Frank van Puffelen (@puf) <a href="https://twitter.com/puf/status/1196444467684884481?ref_src=twsrc%5Etfw">November 18, 2019</a>
</Tweet>
