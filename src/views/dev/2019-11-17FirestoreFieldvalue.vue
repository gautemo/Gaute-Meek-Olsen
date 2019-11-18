<template>
  <article>
    <h1>Fieldvalue for Firestore</h1>
    <p>
      When using the Firestore SDK the
      <a href="https://firebase.google.com/docs/reference/node/firebase.firestore.FieldValue" target="_blank" rel="noopener">firebase.firestore.FieldValue</a>
      can be very useful for incrementing fields, altering arrays, using the server time or deleting fields.
    </p>
    <p>Examples will be in JavaScript, but is pretty similar for Android and iOS.</p>
    <h3>incremet</h3>
    <p>No need for transactions to safly increment a value. No need to worry about race conditions if two user's are bumping a value.</p>
    <pre class="code block">
      const db = firebase.firestore();
      const ref = db.collection('posts').doc(id);
      ref.update({likes: firebase.firestore.FieldValue.increment(1)});
    </pre>
    <h3>arrayUnion &amp; arrayRemove</h3>
    <p>
      If two family member's are adding/removing items to a
      shopping list document at the same time where the items is stored in an array.
      That could lead to one overwriting the array without having the item from the other person.
      Transaction are verbose, use arrayUnion and arrayRemove.
    </p>
    <pre class="code block">
      const db = firebase.firestore();
      const ref = db.collection('shopping').doc(id);

      ref.update({items: firebase.firestore.FieldValue.arrayUnion('apple', 'milk')});

      ref.update({items: firebase.firestore.FieldValue.arrayRemove('bread')});
    </pre>
    <h3>serverTimestamp</h3>
    <p>
      To avoid different timezones or delays it could be useful to use the server timestamp.
      Since Firestore is used from the client side and we don't deal with server code, Firebase gives us the fieldvalue serverTimestamp.
    </p>
    <pre class="code block">
      const db = firebase.firestore();
      const post = {
      &nbsp;&nbsp;text: 'hello world',
      &nbsp;&nbsp;created: firebase.firestore.FieldValue.serverTimestamp()
      };
      db.collection('posts').add(post);
    </pre>
    <h3>delete</h3>
    <p>If you wan't to delete a field without changing any other fields use the FieldValue.delete()</p>
    <pre class="code block">
      const db = firebase.firestore();
      const ref = db.collection('posts').doc(id);
      ref.update({likes: firebase.firestore.FieldValue.delete()});
    </pre>
  </article>
</template>
