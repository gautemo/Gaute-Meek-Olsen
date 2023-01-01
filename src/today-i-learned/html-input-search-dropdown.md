---
title: Dropdown with Searchable Text
date: 2019-08-12
category: HTML
description: How to create a dropdown input with search just with HTML.
---

It is really easy to create an input field with a searchable dropdown with just HTML

```html
<label for="myHouse">Choose your magical house:</label>
<input list="magicHouses" id="myHouse" name="myHouse" placeholder="type here..." />
<datalist id="magicHouses">
  <option value="Gryfindor"></option>
  <option value="Hufflepuff"></option>
  <option value="Slytherin"></option>
  <option value="Ravenclaw"></option>
  <option value="Horned Serpent"></option>
  <option value="Thunderbird"></option>
  <option value="Pukwudgie"></option>
  <option value="Wampus"></option>
</datalist>
```

You can also add more options with JavaScript like this.

```js
const option = document.createElement('option')
option.value = 'Fortress of Solitude'
document.querySelector('#magicHouses').appendChild(option)
```

The result

<div>
  <label for="myHouse">Choose your magical house:</label>
  <input list="magicHouses" id="myHouse" name="myHouse" placeholder="type here..." />
  <datalist id="magicHouses">
    <option value="Gryfindor"></option>
    <option value="Hufflepuff"></option>
    <option value="Slytherin"></option>
    <option value="Ravenclaw"></option>
    <option value="Horned Serpent"></option>
    <option value="Thunderbird"></option>
    <option value="Pukwudgie"></option>
    <option value="Wampus"></option>
    <option value="Fortress of Solitude"></option>
  </datalist>
</div>

Pretty neat and simple! All I would do now is style the input field with just a little CSS, then it would be done. No need to bring in an extra library or spend hours programming the wheel.

Street cred goes to [Ananya Neogi](https://twitter.com/_ananyaneogi) for her article on [dev.to](https://dev.to/ananyaneogi/html-can-do-that-c0n)

<style scoped>
input{
  border-width: 1px;
}
</style>
