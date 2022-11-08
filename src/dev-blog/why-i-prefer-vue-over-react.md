---
title: Why I prefer Vue over React
date: 2020-02-13
coverImgExtension: png
tags: [Vue, React]
---

There exists a lot of great web development frameworks out there. I believe that every framework can be used to create the website you want. What you should choose only comes down to individual preference. Remember, there also is a possibility to use no framework as well.

Myself, I usually choose [Vue](https://vuejs.org/). Here are my top reasons to choose Vue over the most used ~~framework~~ library [React](https://reactjs.org/).
(Just to have it said, I have reasons to choose React over Vue as well, but I don't value them as much as the points below)

## Without using a building tool

With both Vue and React you don't necessarily need a building step to create your website. It can be done with just vanilla JavaScript, HTML, and CSS. Let's create a button that count's the number of times it has been clicked.

<div class="example">
  <button v-on:click="count++">{{count}}</button>
</div>

### React

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
  </head>

  <body>
    <div id="app"></div>
    <script>
      function Button() {
        const [counter, setCounter] = React.useState(0)

        return React.createElement('button', { onClick: () => setCounter(counter + 1) }, counter)
      }
      const domContainer = document.querySelector('#app')
      ReactDOM.render(React.createElement(Button), domContainer)
    </script>
  </body>
</html>
```

### Vue

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  </head>
  <body>
    <div id="app">
      <button @click="counter++">{{counter}}</button>
    </div>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          counter: 0,
        },
      })
    </script>
  </body>
</html>
```

<table style="width:100%">
  <tr>
    <th></th>
    <th>Size</th>
    <th>Characters of Code</th>
    <th>Drawbacks</th>
  </tr>
  <tr>
    <td>React</td>
    <td>40.7 KB</td>
    <td>740</td>
    <td>
      <ul>
        <li>No JSX support, which is React's main way to code</li>
        <li>Code will start to get messy with many elements</li>
        <li>Two script imports</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Vue</td>
    <td>32.6 KB</td>
    <td>389</td>
    <td>
      <ul>
        <li>Subcomponents need to use template strings for the HTML</li>
        <li>Code will start to get messy with many components</li>
      </ul>
    </td>
  </tr>
</table>

I prefer Vue in this scenario because it is pretty easy to add reactivity to a website and the code is pretty much the same as "ordinary" Vue in a project with a build step.

## CLI

React has the [Create React App](https://create-react-app.dev/) to set up your project. But when you want to add features, such as a router, Sass, linter, and more, you have to do it manually afterward.

Vue provides you with a [CLI](https://cli.vuejs.org/) where you can pick what features you like when you are creating a project. Which makes the process of creating a project smooth and easy.

![Vue CLI](/images/dev-blog/why-i-prefer-vue-over-react/cli.png)

## Template

A big difference between the frameworks is how the HTML is created. React uses JSX to allow you to combine JavaScript and HTML in the same render function. For me, this feels like it can quickly turn into spaghetti code.

In Vue you write your HTML in a template tag, allowing you to write normal HTML with directives to add functionality. (JSX is also an option in Vue, but not very used.) Look at my next reasons to see examples of the difference.

## Bind Input Values

<div class="example">
  <input type="text" v-model="text">
  <p>{{text}}</p>
</div>

### React

```jsx
import React from 'react'

function InputBind() {
  const [text, setText] = React.useState('')

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </>
  )
}

export default InputBind
```

### Vue

```html
<template>
  <div>
    <input type="text" v-model="text" />
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      }
    },
  }
</script>
```

## Conditionally Render

<div class="example">
  <input type="checkbox" v-model="show">
  <p v-if="show">👋👋👋👋👋</p>
  <p v-else>💨</p>
</div>

### React

Option 1: Ternary operation. Which isn't always as readable.

```jsx
import React from 'react'

function CondinionallyRender() {
  const [show, setShow] = React.useState(true)

  return (
    <>
      <input type="checkbox" onChange={(e) => setShow(e.target.checked)} checked={show} />
      {show ? <p>👋👋👋👋👋</p> : <p>💨</p>}
    </>
  )
}

export default CondinionallyRender
```

Option 2: Logical Short Circuit Evaluation. Feels a little like magic and you need to know how logical expressions are being evaluated.

```jsx
import React from 'react'

function CondinionallyRender() {
  const [show, setShow] = React.useState(true)

  return (
    <>
      <input type="checkbox" onChange={(e) => setShow(e.target.checked)} checked={show} />
      {show && <p>👋👋👋👋👋</p>}
      {show || <p>💨</p>}
    </>
  )
}

export default CondinionallyRender
```

Option 3: if-else function. Best for understandability, but HTML code needs to be moved away from the rest of the HTML.

```jsx
import React from 'react'

function CondinionallyRender() {
  const [show, setShow] = React.useState(true)

  const renderIt = () => {
    if (show) {
      return <p>👋👋👋👋👋</p>
    } else {
      return <p>💨</p>
    }
  }

  return (
    <>
      <input type="checkbox" onChange={(e) => setShow(e.target.checked)} checked={show} />
      {renderIt()}
    </>
  )
}

export default CondinionallyRender
```

### Vue

```html
<template>
  <div>
    <input type="checkbox" v-model="show" />
    <p v-if="show">👋👋👋👋👋</p>
    <p v-else>💨</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
      }
    },
  }
</script>
```

## List an Array

<div class="example">
  <ul>
    <li>Eat</li>
    <li>Move</li>
    <li>Code</li>
    <li>😴😴😴</li>
  </ul>
</div>

### React

```jsx
import React from 'react'

function List() {
  const todos = ['Eat', 'Move', 'Code', '😴😴😴']

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}

export default List
```

### Vue

```html
<template>
  <ul>
    <li v-for="todo in todos" :key="todo">{{todo}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        todos: ['Eat', 'Move', 'Code', '😴😴😴'],
      }
    },
  }
</script>
```

## className vs class

### React

```html
<div className="center-box"></div>
```

### Vue

```html
<div class="center-box"></div>
```

I don't like to be pushed away from normal HTML.

## Alter state directly

### React

```js
//declare state
const [human, setHuman] = React.useState({ name: 'Gaute', age: 28, favouriteDinner: 'Pizza' })
const [counter, setCounter] = React.useState(0)

//update state
setHuman({ ...human, favouriteDinner: 'Candy' })
setCounter(counter + 1)
```

### Vue

```js
//declare state
data(){
  return{
    human: { name: 'Gaute', age: 28, favouriteDinner: 'Pizza'},
    counter: 0
  }
}

//update state
this.human.favouriteDinner = 'Candy';
this.counter++;
```

This is a clear win for Vue, as I don't like the idea that I need to rewrite my whole object or value by using the previous state.

### Examples above project stats

<table style="width:100%">
  <tr>
    <th></th>
    <th>Production Build Size</th>
    <th>Project Size</th>
    <th>Characters of Code</th>
  </tr>
  <tr>
    <td>React</td>
    <td>460 KB</td>
    <td>146 MB</td>
    <td>2345</td>
  </tr>
  <tr>
    <td>Vue</td>
    <td>443 KB</td>
    <td>67.2 MB</td>
    <td>1797</td>
  </tr>
</table>

# Conclusion

For me, Vue had a much quicker learning curve, as it took me some time to understand React, while Vue I got from the first second (maybe because of the similarity to AngularJS directives). It feels closer to ordinary HTML and JavaScript. I don't need to use JSX, where I often feel like JavaScript clutters the HTML code. Vue also has single file components, where all component code (HTML, JavaScript, and CSS) are in the same file if wanted. Vue has scoped CSS for components, which also is super nice!

Example code can be found at [GitHub](https://github.com/gautemo/frontend-framework-compare).

This is just my friendly opinion. If you like something else, that's okay :blush:

<script setup>
import { ref } from 'vue'

const count = ref(0)
const text = ref('')
const show = ref(true)
</script>

<style scoped>
.example{
  border: 2px solid var(--secondary);
  position: relative;
  min-height: 100px;
  padding: 2rem 1rem 1rem 1rem;
  display: grid;
  place-items: center;
  font-size: 2rem;
}

.example::after{
  content: "Example:";
  position: absolute;
  left: 5px;
  top: 0;
  font-size: 1rem;
}

.example button{
  min-width: 50px;
  padding: 5px;
}

.example :is(input, button){
  font-size: inherit;
  border: 1px solid grey;
}

.example p{
  min-height: 3.5rem;
  margin: 5px 0;
}

.example input[type="checkbox"]{
  height: 50px;
  width: 50px;
}
</style>
