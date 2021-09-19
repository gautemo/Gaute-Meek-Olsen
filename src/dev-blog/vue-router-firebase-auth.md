---
title: Vue, guard routes with Firebase Authentication
date: 2019-11-17
tags: [Vue, Firebase]
---

With Vue Router you might want to guard som paths and redirect users to a signup page if they are not authenticated. I will show you how this is done correctly with Firebase Authentication.

This article assumes you already have implemented your project with [Vue Router](https://router.vuejs.org/) and [Firebase Authentication](https://firebase.google.com/docs/auth)

First, we must mark each route that we want to guard with a meta property called requiresAuth.

```js
const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  }
]
```
In this example, the path /signin is allowed for everyone, but /profile should only be for signed-in users.


Now we can use the <b>beforeEach</b> guard to check for this property.

```js
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser){
    next('signin');
  }else{
    next();
  }
});
```

Now if the currentUser is null or undefined, we should redirect users to the signin path. But how do we get currentUser? We can’t use `firebase.auth().currentUser` because on page refresh that property has not been set yet before the guard is triggered. We will have to use the `onAuthStateChanged` callback somehow. Let’s add a method to the firebase object after we initialize the firebase app.

```js
firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};
```

This method will return a Promise which resolves currentUser as soon as it is set. `onAuthStateChangedwill` trigger the callback immediately with either null or the user object if signed in. Then we unsubscribe to not listen for further changes.

Now we will update our <b>beforeEach</b> guard so that only paths that require authentication await this method.

```js
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('signin');
  }else{
    next();
  }
});
``` 

That’s all. This also simplifies getting the currentUser for components under the guarded routes, because we know `firebase.auth().currentUser` is set.

For full example check out this [GitHub repository](https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication) and demo at [vue-routes-authentication.web.app](https://vue-routes-authentication.web.app/)