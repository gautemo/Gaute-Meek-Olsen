---
title: Location for Cloud Functions for Firebase
date: 2019-04-19
tags: [Firebase]
---

Today Cloud Functions for Firebase has four available locations they can run from. It's not super important, but it could be smart to have them run close to the location of your Firestore or users for minimizing latency. By default, the function will run in us-central1, which is Iowa. This is super easy to change by adding `.region('europe-west1')` in your code, like this:

```js
exports.hello = functions.region('europe-west1').https.onRequest((req, res) => {
  res.send('Hello')
})
```

If you deploy your function now, you will see it will run from europe-west1. As of today, possible locations are:

- us-central1 (Iowa)
- us-east1 (South Carolina)
- us-east4 (Northern Virginia)
- europe-west1 (Belgium)
- europe-west2 (London)
- asia-east2 (Hong Kong)
- asia-northeast1 (Tokyo)

[Updated docs](https://firebase.google.com/docs/functions/locations)
