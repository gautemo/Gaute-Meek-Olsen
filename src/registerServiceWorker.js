/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}sw.js`, {
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
