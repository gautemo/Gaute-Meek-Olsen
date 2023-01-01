---
title: Vue 3 is Coming!
date: 2020-04-10
coverImgExtension: png
tags: [Vue]
description: New version of Vue is coming, let's look at all the Vue 3 improvements and changes.
---

I have been playing around with Vue 3, which is really cool. So let me share some of what I have learned. According to their [roadmap](https://github.com/vuejs/vue/projects/6), they have planned for a release at the end of Q2 (April, May, Juni) 2020. Now it is in Alpha, but it will probably be a Beta release soon.

Note that this article is time-sensitive. As code changes could happen, better best practices can emerge and better documentation will be available. But if you want a head start, this article can help you, written on 2020-04-08.

## Get Started Today

You can create a Vue 3 project today if you like. Just remember that there isn't any official documentation yet and code changes might occur until the release. I have created a [GitHub repository](https://github.com/gautemo/vue-3-playground) with a project you can play around with and see some example code. The readme contains information on how to set up a Vue 3 project, as well as resources to keep you updated and articles, videos, and podcasts about Vue 3.

## Improvements

The biggest change in Vue 3 is that it is completely rewritten under the hood. This means for us developers that things will be pretty much the same. The result otherwise is a much better product. Vue was already fast, but now it has a huge performance and memory improvement, it is better at static tree hoisting and tree shaking(dead code elimination).

![Fast](/images/dev-blog/vue-3-is-coming.gif)

They have also written Vue 3 in TypeScript, which makes the project more maintainable for the Vue team. But it also has some benefits for us developers, even if you are using JavaScript or TypeScript, you will get better IntelliSense and typeahead.

They use [RFCs](https://github.com/vuejs/rfcs) (Request For Comments) for every change to involve the community in the decisions that are being made.

## Changes

### Composition API

There is a new optional way to write the JavaScript part of your component. They have named the way we do it today as the Options API, where you have an object with the data, methods, computed, watch, etc. properties. This is still valid in Vue 3. The composition API is just an additive way. I will keep it short, but for a better explanation, you can go [here](https://vue-composition-api-rfc.netlify.com/#logic-reuse-code-organization).

Let's see the skeleton of the component object.

```js
// Import the APIs you are using for the component
import { ref, reactive, computed } from 'vue'

export default {
  // the setup method where logic happens
  setup() {
    return {
      /* return what logic is exposed to the template */
    }
  },
}
```

Now to the exciting part. Let's write some setup code. `ref` and `reactive` are used to store reactive variables.

```js
setup(){
  //Let's have two different reactive values
  const counter = ref(0);
  const state = reactive({
    count: 0
  });

  //Update the values
  counter.value++;
  state.count++;

  return { counter, state }
}
```

As you can see the ref and reactive can do pretty much the same. `ref` are mainly for primitive types and arrays. While `reactive` holds an object. Which you use will be up to you, but I think with time best practices for what to use where will emerge.

We are already used to computed properties, methods, watch. The principle is the same. It's just written a little differently.

We also have `watchEffect` which is very similar to watch, but you don't have to tell it which values to listen to, it will run on every dependency used inside the function.

```js
setup(){
  const counter = ref(0);

  const double = computed(() => counter.value * 2);

  const addToCounter = toAdd => counter.value += toAdd;

  watch(counter, () => console.log('counter updated'));

  return { double, addToCounter }
}
```

I'm using arrow functions here, but they could be normal functions. And the code doesn't need to be inside the setup method, it could be outside the Vue object, it could be in another file, the thing that matters is that the setup returns the methods and reactive values.

This got me thinking, could this be used to create a really simple global reactive state? The answer is yes.

_globalShoppingCart.js_:

```js
import { reactive, computed } from 'vue'

const shoppingCart = reactive({
  items: [],
  totalPrice: computed(() => shoppingCart.items.reduce((acc, item) => acc + item.price, 0)),
})

const addItem = (item) => shoppingCart.items.push(item)

export { addItem, shoppingCart }
```

_item.vue_:

```vue
<template>
  <h1>Ball</h1>
  <button @click="addItem({ name: 'ball', price: 99 })">Add to Cart</button>
</template>

<script>
import { addItem } from '@/globalShoppingCart'

export default {
  setup() {
    return { addItem }
  },
}
</script>
```

_cart.vue_:

```vue
<template>
  <h1>Cart</h1>
  <span>Items: {{ shoppingCart.items.length }}</span>
  <span>Price: {{ shoppingCart.totalPrice }}</span>
</template>

<script>
import { shoppingCart } from '@/globalShoppingCart'

export default {
  setup() {
    return { shoppingCart }
  },
}
</script>
```

That's cool! We don't have to deal with that many props and emits anymore.

It also works great for re-using code. Let's have our like and super like functionality in its own JavaScript file, but everyone using the file will have its own state.

_likes.js:_

```js
import { ref } from 'vue'

const getLikes = () => {
  const likes = ref(0)
  const superLike = () => (likes.value += 1000)
  return { likes, superLike }
}

export { getLikes }
```

_hearts.vue_:

```vue
<template>
  <div>
    {{ likes }}🧡
    <button @click="likes++">Love</button>
    <button @click="superLike">💕💕💕</button>
  </div>
</template>

<script>
import { getLikes } from '@/likesOwn'
export default {
  setup() {
    return { ...getLikes() }
  },
}
</script>
```

To the last part of the composition API, lifecycle hooks. It's pretty much the same, but you can have them inside the setup method. You can also have multiple of the same.

```js
setup(){
  onMounted(() => console.log('DOM is ready'));
  onMounted(() => console.log('mounted called again'));
}
```

One thing, there doesn't exist a thing such as `onCreated`! This code should be inside the setup method. Since the setup method will run once at the very start of the component. So fetching data and such is a good place to have inside the setup method.

The composition API is optional, it can be used together with the options API in the same component. The composition API will help with keeping associated logic close to each other, moving setup code to its own files, and re-using code. The concepts of Vue are pretty much the same, your data will be `ref` or `reactive` and we are used to `watch`, `computed`, and lifecycle hooks.

### Fragment

Have you ever noticed that every template needs to have only one child? This is annoying because it pollutes the DOM and gives you more code and indentations.

Not anymore

```vue
<template>
  <h1>This is</h1>
  <h2>completely</h2>
  <h3>fine! :)</h3>
</template>
```

### Suspense

Suspense is a new feature introduced in Vue 3. When your component is not ready, it gives you an easy way to show a loading spinner for example.

Let's have an async setup method that fetches some data.

```js
async setup(){
  const response = await fetch('someurl');
  const data = await response.json();
  return { data }
}
```

Now, this might take some time. When will your component be ready? Just have your parent component use suspense like this.

```vue
<template>
  <Suspense>
    <template #default> <MyChildComponenta /> //the component with async setup </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
```

### Teleport

Note that Teleport was named Portal until recently, so if you are reading some other articles they might be outdated.

Teleport gives us the ability to teleport some HTML code to another place in our application outside the component.

Somewhere in your application, you have an element with an id:

```html
<div id="arrival-spot"></div>
```

Now you can have another component target that element.

```vue
<template>
  <div>
    <span>I'm still in my component</span>
    <Teleport to="#arrival-spot">
      <span>Woho, I can teleport \o/ </span>
    </Teleport>
  </div>
</template>
```

### Multiple v-model

Now you can have multiple v-models on your custom component when you want to bind different values.

```vue
<HumanStats v-model:age="human.age" v-model:height="human.height" />
```

### Transition

Just a small naming change for transitions. I found `v-enter-active`, `v-enter`, `v-enter-to` a little confusing. In Vue 3 `v-enter` is renamed to `v-enter-from` and `v-leave` to `v-leave-from`. Now the transitions make more sense, a class for when it is active, a class for what it transitions from, and a class for what it transitions to.

### Filter removed

```vue
<!-- before -->
{{ date | format }}

<!-- after -->
{{ format(date) }}
```

In Vue 2 we had filter methods to run our values through when displaying the values. This is now removed to enforce that inside the brackets is just valid JavaScript. Computed properties or methods should be used instead, which is fine and just another way of writing the code.

### App configuration

In Vue 2 we have the global `Vue` object which we configure. In Vue 3 every configuration is scoped to a certain Vue application defined with `createApp`.

_main.js_:

```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(/* ... */)
app.mixin(/* ... */)
app.component(/* ... */)
app.directive(/* ... */)

app.mount('#app')
```

### Conclusion

I am very excited about Vue 3. I think this will keep Vue as one of the best frameworks out there.
