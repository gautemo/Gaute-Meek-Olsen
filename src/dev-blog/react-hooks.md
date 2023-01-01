---
title: Explain React Hooks like I'm (?)
date: 2020-03-20
coverImgExtension: png
tags: [React]
description: An explanation of every Reack hook.
---

Explaining React Hooks (yes there is more than one of them) like I'm... I don't know which age, but I will try to be thorough with good examples. I'm writing this to better understand and learn myself as I have found them a little confusing. I'm not really a React [developer](https://dev.to/gautemeekolsen/why-i-prefer-vue-over-react-3jm6), so if I get something wrong, let me know 👇

I hope this brings some clarity to React Hooks for you as well!

## What are Hooks?

Hooks are now available with the release of React v16.8.0. Hooks don't work inside class components, but are used in functional components. This doesn't mean you can't write class components anymore, but I believe from now on we should mostly be using function components with hooks.

_Example of a functional component_:

```jsx
import React from 'react'

function MyComponent() {
  return <h1>Hi friends!</h1>
}

export default MyComponent
```

Remember that in functional components the function is called every time a state changes and will run multiple times.

There are 10 hooks (we will also look at how to create custom hooks). You can import the ones you are going to use like this:

```js
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useDebugValue,
} from 'react'
```

The [React documentation](https://reactjs.org/docs/hooks-reference.html) classifies `useState`, `useEffect`, and `useContext` as basic hooks while the rest is considered additional.

## useState

`useState` is used to handle reactive values in a component. The hook returns a stateful value, and a function to update it.

```js
const [person, setPerson] = useState({ name: 'Gaute', age: 28 })
```

The whole object needs to be passed to the update function. The spread syntax can help simplify this.

Full example:

```jsx
import React, { useState } from 'react'

function State() {
  const [person, setPerson] = useState({ name: 'Gaute', age: 28 })

  const birthday = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

  return (
    <>
      <h1>
        {person.name}, {person.age}
      </h1>
      <button onClick={birthday}>Age</button>
    </>
  )
}

export default State
```

## useEffect

Since the component function will re-run multiple times, how do you prevent your code from creating an infinite loop? `useEffect` is used for mutations, subscriptions, timers, logging, and other side effects. You need to define which values you want your hook to trigger on.

The `useEffect` method has two parameters, the first is the function to run and the second is an array containing the values it listens for changes and re-runs if changed. By returning a method, that will be called when the component leaves the screen.

An empty array is used to run only once.

```js
useEffect(() => {
  console.log('Runned once at the beginning')
}, [])
```

Full example:

```jsx
import React, { useState, useEffect } from 'react'

function Effect() {
  const [person, setPerson] = useState({ name: 'Gaute', age: 28 })

  const birthday = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

  useEffect(() => {
    console.log('Run once at the beginning')
    return () => console.log('Component leaves')
  }, [])

  useEffect(() => {
    console.log('Run when person changes', person)
  }, [person])

  return (
    <>
      <h1>
        {person.name}, {person.age}
      </h1>
      <button onClick={birthday}>Age</button>
    </>
  )
}

export default Effect
```

## useContext

`useContext` can be used to share values/state through all child components. A component calling `useContext` will always re-render when the context value changes.

Let's create one file for our context, using the `createContext`.

_likesContext.js_:

```js
import { createContext } from 'react'

const LikesContext = createContext()

export default LikesContext
```

Then we will have a provider component that set's the initial value and will hold the state which can be used for all child components.

_likesProvider.js_:

```jsx
import React, { useState } from 'react'
import LikesContext from './likesContext'
import LikesConsumer from './likesConsumer'

function LikesProvider() {
  const [likes, setLikes] = useState(0)
  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
      <LikesConsumer />
    </LikesContext.Provider>
  )
}

export default LikesProvider
```

Then we can have child components with `useContext`, which will then use the values from the nearest parent using the context.

_likesConsumer.js_:

```jsx
import React, { useContext } from 'react'
import LikesContext from './likesContext'

function LikesConsumer() {
  const { likes, setLikes } = useContext(LikesContext)

  return (
    <>
      <span>Likes: {likes}</span>
      <button onClick={() => setLikes(likes + 1)}>+1</button>
    </>
  )
}

export default LikesConsumer
```

With multiple consumers under the same provider, you would see that they update the same state.

## useReducer

`useReducer` is an alternative to `useState` when you need a little more complex setter. `useReducer` takes in a function that changes the state and an initial value as parameters and returns a stateful value, and a function to update it (calling the function provided as the first parameter).

```js
const [statefulValue, updateValue] = useReducer(
  (previousValue, inputToUpdateValue) => previousValue + inputToUpdateValue,
  'initial value'
)

//statefulValue: 'initial value'
updateValue(' abc')
//statefulValue: 'initial value abc'
updateValue(' 123')
//statefulValue: 'initial value abc 123'
```

That might have been a little confusing, but here is a full example of how you can change the state with a keyword and how to have a setter method for the state.

_Example contains one reducer for updating an array with numbers and one reducer for setting the text in lowercase_:

```jsx
import React, { useReducer } from 'react'

const reduce = (prevState, action) => {
  switch (action) {
    case 'grow':
      return prevState.map((g) => g + 1)
    case 'cut':
      return prevState.map((_) => 0)
    case 'buy':
      return [...prevState, 0]
    default:
      return prevState
  }
}

function Reduce() {
  const [grass, dispatch] = useReducer(reduce, [])
  const [name, setName] = useReducer((_, value) => value.toLowerCase(), '')

  return (
    <>
      <button onClick={() => dispatch('grow')}>Grow</button>
      <button onClick={() => dispatch('cut')}>Cut</button>
      <button onClick={() => dispatch('buy')}>Buy</button>
      {grass.join()}
      <input type="text" onChange={(e) => setName(e.target.value)} /> {name}
    </>
  )
}

export default Reduce
```

## useCallback

`useCallback` will cache the method and not recreate it every time the component function re-runs. This is used to improve performance. The first parameter is the callback function and the second is an array of dependencies for when the callback function should update (like `useEffect`).

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

Let's say we have a component that counts the seconds. Our component function will be called a lot. We can improve the performance by not recreating other functions on every render.

```jsx
import React, { useState, useEffect, useCallback } from 'react'

function Callback() {
  const [seconds, setSeconds] = useState(0)
  const [face] = useState('😎')

  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000)
  }, [seconds])

  //method recreated on every render
  const saySomethingTired = () => {
    console.log(`I'm tired 🥱`)
  }

  //Don't recreate me every time
  const saySomethingCool = useCallback(() => console.log(`You are cool ${face}`), [face])

  return (
    <>
      <h1>{seconds}</h1>
      <button onClick={saySomethingTired}>Tired</button>
      <button onClick={saySomethingCool}>Cool</button>
    </>
  )
}

export default Callback
```

I was thinking, why not use this for every method? The answer is that it's [not always worth it](https://stackoverflow.com/a/55371823/5994441).

## useMemo

Almost like `useCallback` but for values and not methods. Also somewhat similar to [Computed Properties in Vue](https://vuejs.org/v2/guide/computed.html). The first parameter is a function returning a value and the second is an array of dependencies for when the callback function should update (like `useEffect`).

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

Say we have an array that we want to show sorted to the user. If we have other values, such as a timer, making our component function run a lot of times we don't want to perform a sort every time. Then we use `useMemo` with dependency only to our array.

```jsx
import React, { useState, useEffect, useMemo } from 'react'

function Memo() {
  const [seconds, setSeconds] = useState(0)
  const [colors, setColors] = useState([
    { name: 'red', code: '#ff0000' },
    { name: 'blue', code: '#0000ff' },
  ])

  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000)
  }, [seconds])

  const sortedColors = useMemo(
    () =>
      colors
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((c) => c.code)
        .join(', '),
    [colors]
  )

  return (
    <>
      <h1>{seconds}</h1>
      <p>{sortedColors}</p>
      <button onClick={() => setColors([...colors, { name: 'green', code: '#008000' }])}>Add green</button>
    </>
  )
}

export default Memo
```

## useRef

`useRef` is used to hold a value that persists for the lifetime of the component, but doesn't create a re-render when mutating. Value is stored in `.current`. It can be used with the `ref` attribute to hold DOM elements.

Example copying value from input element:

```jsx
import React, { useRef } from 'react'

function Ref() {
  const inputEl = useRef()

  const copy = () => {
    inputEl.current.select()
    document.execCommand('copy')
  }

  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={copy}>Copy</button>
    </>
  )
}

export default Ref
```

Example holding the setInterval object:

```jsx
import React, { useRef, useEffect } from 'react'

function Ref() {
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('time has passed')
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  const stopCounting = () => clearInterval(intervalRef.current)

  return <button onClick={stopCounting}>Stop</button>
}

export default Ref
```

## useImperativeHandle

`useImperativeHandle` is used to customize what value is exposed to the parent when it uses `ref`. This should be used with [forwardRef](https://reactjs.org/docs/react-api.html#reactforwardref).

_child.js_:

```jsx
import React, { useImperativeHandle } from 'react'

function Child(props, ref) {
  useImperativeHandle(ref, () => 'Some value')

  return <h1>Hello</h1>
}

export default React.forwardRef(Child)
```

_parent.js_:

```jsx
import React, { useRef, useEffect } from 'react'
import Child from './child'

function Parent() {
  const childRef = useRef()

  useEffect(() => {
    console.log(inputEl.current)
    //output: 'Some value'
    //Not DOM element anymore
  }, [])

  return <Child ref={childRef} />
}

export default Parent
```

Let's take our example from the `useRef`, but now we want to move the input element to a component with some more elements. `useImperativeHandle` can be used to expose only the input DOM element to the parent, to keep the copy method just as simple.

_myInput.js_:

```jsx
import React, { useRef, useImperativeHandle } from 'react'

function MyInput(props, ref) {
  const inputEl = useRef()

  useImperativeHandle(ref, () => inputEl.current)

  return (
    <>
      <span className="decoration">🦄</span>
      <input type="text" ref={inputEl} />
    </>
  )
}

export default React.forwardRef(MyInput)
```

_parent.js_:

```jsx
import React, { useRef } from 'react'
import MyInput from './myInput'

function Parent() {
  const inputEl = useRef()

  const copy = () => {
    inputEl.current.select()
    document.execCommand('copy')
  }

  return (
    <>
      <MyInput ref={inputEl} />
      <button onClick={copy}>Copy</button>
    </>
  )
}

export default Parent
```

## useLayoutEffect

`useLayoutEffect` works the same way as `useEffect`, the only difference is when it runs. `useEffect` will run asynchronously after the DOM is updated to not block the UI. While `useLayoutEffect` will run synchronously before the browser updates the DOM. So you might want to change to `useLayoutEffect` if you see a flicker in the UI with `useEffect`, otherwise `useEffect` should be used.

Here is an example of changing the text and background color. If you use `useEffect` and have eagle eyes, you will see a quick flicker because the browser will first update the text, then the background color. With `useLayoutEffect` they will update at the same time.

```jsx
import React, { useState, useLayoutEffect, useRef } from 'react'

const quotes = [
  { text: 'The secret of getting ahead is getting started', color: 'blue' },
  { text: `Your limitation - It's only your imagination`, color: 'red' },
]

function LayoutEffect() {
  const [toggle, setToggle] = useState(true)
  const quoteRef = useRef()

  useLayoutEffect(() => {
    quoteRef.current.style.backgroundColor = quotes[toggle ? 0 : 1].color
  }, [toggle])

  return (
    <>
      <span ref={quoteRef}>{quotes[toggle ? 0 : 1].text}</span>
      <button onClick={() => setToggle(!toggle)}>Give me a new quote</button>
    </>
  )
}

export default LayoutEffect
```

## useDebugValue

The last hook. This one is only for custom hooks. So let's look at that first.

## Custom hook

You can create your own custom hooks, to move logic out of components, re-use code, and/or combine other hooks into one hook. Do this by creating a function starting with `use`.

Here is an example with `useState` and `useMemo` to hold the value of a family and return them sorted. So the component using the hook will just need to know about the family value and the add method.

_useFamily.js_:

```js
import { useState, useMemo } from 'react'

function useFamily(initialFamily) {
  const [persons, setPersons] = useState(initialFamily)

  const family = useMemo(() => persons.sort((a, b) => a.age - b.age), [persons])

  const add = (person) => setPersons([...persons, person])

  return { family, add }
}

export default useFamily
```

_kryptonFamily.js_:

```jsx
import React from 'react'
import useFamily from './useFamily'

function Krypton() {
  const { family, add } = useFamily([
    { name: 'Jor-El', age: 40 },
    { name: 'Lara', age: 39 },
  ])

  return (
    <>
      <ul>
        {family.map((p) => (
          <li key={p.name}>
            Name: {p.name}, Age:{p.age}
          </li>
        ))}
      </ul>
      <button onClick={() => add({ name: 'Kal-El', age: 0 })}>New Member</button>
    </>
  )
}

export default Krypton
```

## Back to useDebugValue

`useDebugValue` can now be used to display a label for custom hooks in React DevTools. React Devtools will show if you have downloaded the browser extension ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)) and opened the browser developer tools(hit F12).

We can now add a label, letting us know how many family members there are.

_useFamily.js_:

```js
import { useState, useMemo, useDebugValue } from 'react'

function useFamily(initialFamily) {
  const [persons, setPersons] = useState(initialFamily)

  const family = useMemo(() => persons.sort((a, b) => a.age - b.age), [persons])

  const add = (person) => setPersons([...persons, person])

  useDebugValue(`Members: ${persons.length}`)
  return { family, add }
}

export default useFamily
```

So we can see the information in the Devtools:

![Debug value in React Devtools](/images/dev-blog/react-hooks.png)

## Conclusion

There you have the 10 hooks + custom hooks. Some are easier to understand, some are more complex, some you will use a lot and some you won't use. But it's important to know them, so you can make good decisions about what to use where.
