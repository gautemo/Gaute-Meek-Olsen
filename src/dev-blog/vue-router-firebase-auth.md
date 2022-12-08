---
title: Vue, guard routes with Firebase Authentication
date: 2019-11-17
updated: 2022-12-08
tags: [Vue, Firebase]
---

With Vue Router you might want to guard some paths and redirect users to a signup page if they are not authenticated. I will show you how this is done correctly with Firebase Authentication.

This article assumes you already have implemented your project with [Vue Router](https://router.vuejs.org/) and [Firebase Authentication](https://firebase.google.com/docs/auth)

First, we must mark each route that we want to guard with a meta property called `requiresAuth`.

```js
const routes = [
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
]
```

In this example, the path `/signin` is allowed for everyone, but `/profile` should only be for signed-in users.

Now we can use the `beforeEach` guard to check for this property.

```js
router.beforeEach((to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    return '/signin'
  }
})
```

Now if the `currentUser` is `null` or `undefined`, we should redirect users to the sign-in path. But how do we get `currentUser`? We can’t use `getAuth().currentUser` because on page refresh that property has not been set yet before the guard is triggered. We will have to use the `onAuthStateChanged` callback somehow. Let’s create a function that waits for the auth state to be set.

```js
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}
```

This method will return a Promise which resolves `currentUser` as soon as it is set. `onAuthStateChanged` will trigger the callback immediately with either null or the user object if signed in. Then we unsubscribe to not listen for further changes.

Now we will update our `beforeEach` guard so that only paths that require authentication await this method.

```js
router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    return '/signin'
  }
})
```

That’s all. This also simplifies getting the currentUser for components under the guarded routes, because we know `getAuth().currentUser` is set.

For full example check out this [GitHub repository](https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication) and demo at [vue-routes-authentication.web.app](https://vue-routes-authentication.web.app/)
