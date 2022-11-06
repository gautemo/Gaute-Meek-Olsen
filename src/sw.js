import { precacheAndRoute } from 'workbox-precaching'
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate, NetworkFirst, CacheFirst} from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

/* eslint-disable no-undef */

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /.*\.js/,
  new NetworkFirst()
)

registerRoute(
  /.*\.css/,
  new StaleWhileRevalidate({
    cacheName: 'css-cache'
  })
)

registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)

registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new CacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30
      })
    ]
  })
)
