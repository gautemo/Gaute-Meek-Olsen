---
title: Firestore and Security
date: 2018-11-25
tags: [Firebase]
series: Firestore
---

Firestore is a game-changer in databases! It’s never been this easy to save and query data without any hassle of setting up a server and database yourself. Everything is done client-side. But…

There is a security rule; never trust your client. Security should be handled by the server. But how is this done with Firestore?

Introducing Firestore security rules. Which looks like this.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /<some_path>/ {
      allow read, write: if <some_condition>;
    }
  }
}
```

The ``some_path` could match a single document using the document id. But often you would use the brackets {} for the document path, which matches any document in the collection.

## Publish rules

They can be written and published in the rules tab in the Cloud Firestore section of the Firebase console or in a file in your project folder.

### Deploy rules from your project folder

Make sure you have installed the Firebase CLI and are logged in.

```bash
npm install -g firebase-tools
firebase login
```

Inside your project folder.

```bash
firebase init firestore
```

Which creates a .rules file you can edit your rules in. Then deploy them with this command.

```bash
firebase deploy
```

or only deploy rules, if you're using more firebase functionality

```bash
firebase deploy --only firestore:rules
```

## Read-only

If you only need your user to read data, you can put your entire database in read-only mode. Notice that these rules don’t apply to the admin SDK, so you could for example still write to the database using Cloud Functions for Firebase.

```
service cloud.firestore {
  match /databases/{database}/documents {
    //=** to match any document, also in sub-collections
    match /{document=**} {
      allow read;
    }
  }
}
```

We don’t need to specify false for write, because rules are secure by default.

## Validating data

Let’s say users can’t post messages with a length longer than 160 characters and users can only read public messages.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{msg}{
      allow read: if resource.data.visibility == 'public';
      allow write: if request.resource.data.messageText.size() <= 160;
    }
  }
}
```

`request.resource.data` is used to require incoming data. While resource.data is the requested document fields.

One thing to keep in mind is that security rules are either accepted or denied. You can’t filter messages by adding the security rule for public messages. If a message could be private the entire read is denied. This logic only works with a where filter client-side.

```js
db.collection('messages').where('visibility', '==', 'public').get()
```

If you only had this logic client-side, someone could alter your query from the developer tools and get the private messages.

## Authenticated users

Firestore security rules integrate perfectly with Firebase Authentication. Which is trustworthy. Because when you sign in, Firebase will use a server-to-server call to the original identity provider which verifies the user is who they say they are. Then they pass an ID token in form of a JWT back to the client. Which is used in future requests that Firebase will recognize and know this is who they verified through the server-to-server authentication. In short words, Firebase Authentication is safe and trustworthy, and we can use this securely in our Firestore security rules.

Now let’s use this to only allow authenticated users to read and authenticated users who are also verified can write to our database.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if isSignedIn();
      allow write: if isSignedIn() && isVerified();
    }
    function isSignedIn(){
      return request.auth.uid != null;
    }
    function isVerified(){
      return request.auth.token.email_verified;
    }
  }
}
```

Notice how we also can use functions to simplify writing our rules.

## Role-based access

Let’s say we have a user collection. Each user has a role field, defining if they are an administrator, editor, or visitor.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /rooms/{roomId} {
      allow get, list: if isVisitor(getUserData());
      allow create, delete: if isAdmin(getUserData());
      allow update: if isEditor(getUserData());
    }
    function getUserData(){
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;
    }
    function isAdmin(userData){
      return userData.role == 'admin';
    }
    function isEditor(userData){
      return userData.role == 'editor' || isAdmin(userData);
    }
    function isVisitor(userData){
      return userData.role == 'visitor' || isEditor(userData);
    }
  }
}
```

Notice how we can break down `read` into `get`(single document) and `list`(queries and collection). `write` can be broken into `create`, `update`, `delete`.

All queries done inside the rules will count towards our quota. Also, rules don’t have variables, so we can’t keep the result of `getUserData`. This is why we pass it down into our other functions.

### Custom user claims

There is another way of handling roles, which doesn’t query our user collection. We can use custom user claims. Which simplifies our rules and doesn’t eat of our quota.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /rooms/{roomId} {
      allow get, list: if role() == 'admin' || role() == 'editor' || role() == 'visitor';
      allow create, delete: if role() == 'admin';
      allow update: if role() == 'admin'|| role() == 'editor';
    }
    function role(){
      return request.auth.token.role;
    }
  }
}
```

Custom claims are set by the admin SDK, for example in a Cloud Functions for Firebase like this.

```js
admin.auth().setCustomUserClaims(uid, { role: 'admin' })
```

## Validate authenticated profile data

Let’s deal with another scenario. We have a message collection and a user collection. Since Firestore is a NoSQL database, we can’t join different collections. And we would like to avoid doubling our queries to get the user who posted the message. Therefore we have a `name` and `profileimg` field in the message documents.

```js
const user = firebase.auth().currentUser
db.collection('messages').add({
  msg: getmsg(),
  name: user.displayName,
  profileimg: user.photoURL,
  uid: user.uid,
})
```

The security issue, users can alter the method and change the `name` and `profileimg` fields and pretend to be someone else. This rule will prevent this.

```
service cloud.firestore {
  match /databases/{database}/documents {

    match /messages/{msg}{
      allow read: if request.auth.uid != null;
      allow write: if validUserData(getUserData());
    }

    function validUserData(userData){
      return request.resource.data.uid == request.auth.uid
        && request.resource.data.name == userData.name
        && request.resource.data.profilepic == userData.profilepic
    }

    function getUserData(){
     return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;
    }

  }
}
```

### The Cloud Functions for Firebase way

You have another option when you want to prevent evil users to alter authenticated profile data. You can close all write to the messages collection.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{msg}{
      allow read: if request.auth.uid != null;
      allow write: if false;
    }
  }
}
```

Then use Cloud Functions for Firebase and retrieve the profile data there. Then use the admin SDK to add the message to the collection, which will bypass the security rules. Cloud Functions for Firebase is a great way to validate and secure data when the security rules become too complex.

```js
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()
exports.addMessage = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called while authenticated.')
  }
  const name = context.auth.token.name || null
  const picture = context.auth.token.picture || null
  const message = {
    profileimg: picture,
    name: name,
    message: data.msg,
  }
  return db
    .collection('messages')
    .add(message)
    .then(() => {
      return 'message added'
    })
})
```

Then trigger the function client-side (web example).

```js
const addMessage = firebase.functions().httpsCallable('addMessage')
addMessage({ msg: this.newMessage })
```

Doing this, you might not feel the messages are as snappy as the first message. This is because Firebase lowers the function's resources if they are not frequently triggered, and you experience a cold start. This will likely improve in production when they are frequently triggered.

## Conclusion

Even though logic is performed client-side, the Firestore database can be completely secured. This has only been an introduction to how Firestore security rules work with example rules for some use cases. In the end, your application will decide how your rules end up.
