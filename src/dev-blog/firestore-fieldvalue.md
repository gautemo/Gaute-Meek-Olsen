---
title: Fieldvalue for Firestore
date: 2019-11-17
hideCoverImg: true
tags: [Firebase]
---

When using the Firestore SDK the [firebase.firestore.FieldValue](https://firebase.google.com/docs/reference/node/firebase.firestore.FieldValue) can be very useful for incrementing fields, altering arrays, using the server time or deleting fields.

Examples will be in JavaScript, but is pretty similar for Android and iOS.

### increment

No need for transactions to safly increment a value. No need to worry about race conditions if two user's are bumping a value.

```js
const db = firebase.firestore()
const ref = db.collection('posts').doc(id)
ref.update({ likes: firebase.firestore.FieldValue.increment(1) })
```

### arrayUnion & arrayRemove

If two family member's are adding/removing items to a shopping list document at the same time where the items is stored in an array. That could lead to one overwriting the array without having the item from the other person. Transaction are verbose, use arrayUnion and arrayRemove.

```js
const db = firebase.firestore()
const ref = db.collection('shopping').doc(id)

ref.update({ items: firebase.firestore.FieldValue.arrayUnion('apple', 'milk') })

ref.update({ items: firebase.firestore.FieldValue.arrayRemove('bread') })
```

### serverTimestamp

To avoid different timezones or delays it could be useful to use the server timestamp. Since Firestore is used from the client side and we don't deal with server code, Firebase gives us the fieldvalue serverTimestamp.

```js
const db = firebase.firestore()
const post = {
  text: 'hello world',
  created: firebase.firestore.FieldValue.serverTimestamp(),
}
db.collection('posts').add(post)
```

### delete

If you wan't to delete a field without changing any other fields use the FieldValue.delete()

```js
const db = firebase.firestore()
const ref = db.collection('posts').doc(id)
ref.update({ likes: firebase.firestore.FieldValue.delete() })
```
