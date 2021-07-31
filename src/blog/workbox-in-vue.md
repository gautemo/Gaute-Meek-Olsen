---
title: Setting up a Custom Service Worker with the Vue CLI
date: 2018-11-10
hideCoverImg: true
---

Creating a Progressive Web App (PWA) is painlessly simple with the Vue CLI. You can use the default set up, by either selecting the feature 'Progressive Web App (PWA) Support' during project creation.

```bash
vue create [project name]
```

Or in an Already Created Project by entering

```bash
vue add @vue/pwa
```

into the terminal. And there you go, you have a PWA.

But the default service worker you got now uses the Cache First or Stale-While-Revalidate strategy. But often you would like the Network First strategy, at least for some files. But this depends on your application and how it's used. Read more about the [cache strategies here](https://developers.google.com/web/tools/workbox/modules/workbox-strategies). I'll show you how to customize the service worker, it's really simple.

1\. Create a vue.config.js file next to the package.json file.

Add this code to your file.

```js
module.exports = {
  pwa: {
    themeColor: '#639bb4', //not required for service worker, but place theme color here if manifest.json doesn't change the color
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/sw.js'
      // ...other Workbox options...
    }
  }
}
```

2\. Create a sw.js file in your src folder.

Your file could look something like this, see comments for description

```js
/* eslint-disable no-undef */

//Only if you use google analytics and wants to send the offline views
workbox.googleAnalytics.initialize()

//This is how you can use the network first strategy for files ending with .js
workbox.routing.registerRoute(
  /.*\.js/,
  workbox.strategies.networkFirst()
)

// Use cache but update cache files in the background ASAP
workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css-cache'
  })
)

//Cache first, but defining duration and maximum files
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)
```

3\. Now you can register your sw.js file and listen for events in the registerServiceWorker.js file created by the vue cli when you initiated a PWA project.

The file should be in the src folder. Add the events you need.

```js
/* eslint-disable no-console */
 import { register } from 'register-service-worker'
 
 if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}sw.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
```