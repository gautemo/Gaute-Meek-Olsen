---
title: Global state in React with Vue!
description: How we can use the Vue reactivity to simplify React state.
date: 2020-09-26
coverImgExtension: png
tags: [React, Vue]
---

There exist a million (or many) global state solutions in React. It seems like the community is struggling to find the best solution. So here I'm going to come with yet another one.

Recently Vue 3 was released. I know, Vue is another framework, but Vue solves the reactivity in a way that it's not tied to the framework. This means we can use the reactivity everywhere, including React.

First, let's create a store file.
_store.js_

```js
import { reactive } from 'vue'

const store = reactive({
  count: 0,
})

const increase = () => store.count++

export { store, increase }
```

For an overview of what the Vue composition API can do you can get an [overview here](https://vuejs.org/guide/extras/composition-api-faq.html).

Now we can import the reactive `store` object and the `increase` method from the store.js file anywhere we like. The problem is that React functions don't know when to re-run the function to render the updated values. We will create a custom hook to deal with this.

_useStore.js_

```js
import { useReducer, useEffect } from 'react'
import { watch } from 'vue'

function useStore(...stores) {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    const stopWatch = watch(stores, forceUpdate)
    return stopWatch
  }, [])
}

export default useStore
```

We can either use `useState` or `useReducer` to make the component [update itself](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate). We are watching the params `stores` with the Vue Composition API and calls `forceUpdate` on every change. Also, we stop watching on component unmount by returning `stopWatch` in `useEffect`. Any amount of stores could be passed into our `useStore`.

_Bump.js_

```jsx
import React from 'react'
import { increase } from './store'

export default function Bump() {
  return <button onClick={increase}>+1</button>
}
```

We could also do `store.count++` directly here if we wanted.

_Counter.js_

```jsx
import React from 'react'
import { store } from './store'
import useStore from './useStore'

export default function Counter() {
  useStore(store)

  return <p>{store.count}</p>
}
```

Complete example on [StackBlitz](https://stackblitz.com/edit/react-global-state-with-vue).

## Afterthoughts

I actually think this is a nice and simple way of handling a global state. No need for extra components, reduce, dispatch, and/or complete re-assigning of the whole state object. This way we can create exactly as many global stores as we want in a clean way.

Importing the whole Vue might create a bigger bundle size. But you can import only Vue's reactivity module [@vue/reactivity](https://github.com/vuejs/vue-next/tree/master/packages/reactivity) and [@vue-reactivity/watch](https://github.com/vue-reactivity/watch) or rely on tree shaking for a small bundle.

Now not every developer would want a different way of dealing with component state and global state, so the React way and Vue way might be confusing in the same project. But it's at least an interesting and fun idea.
