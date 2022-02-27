---
title: Firestore, get collection with async/await
date: 2020-03-18
category: Firebase
---

Today I Learned how to get all documents in a collection in [Firestore](https://firebase.google.com/docs/firestore/) with `async/await` and `for...of` by using the `.docs` property.

Firebase documentation has examples with `.then` to get the result from a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```js
const logCities = () => {
  let citiesRef = db.collection('cities')
  let allCities = citiesRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
    })
  })
}
```

But it can be written easier with [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

```js
const logCities = async () => {
  let citiesRef = db.collection('cities')
  let allCities = await citiesRef.get()
  for (const doc of allCities.docs) {
    console.log(doc.id, '=>', doc.data())
  }
}
```

I think this is more readable, has fewer lines, and `.docs` allows us to use [`for of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).
