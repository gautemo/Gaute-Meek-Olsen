---
title: Fix input width and padding issue
date: 2019-11-17
category: CSS
---

<section>

Have you tried giving your input element some padding and width, and the width gets messed up? Like this:

```css
input {
  width: 100%;
  padding: 10px 50px;
}
```

<input type="text">

Why is my input getting larger than 100%? 🤷‍😩

This is fixed with box-sizing: border-box

```css
input {
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
}
```

<input type="text" class="fixed">

<small>Article red lines are to see full width.</small>

</section>

<style scoped>
input{
  width: 100%;
  padding: 10px 50px;
  border-width: 1px;
  box-sizing: initial;
}

.fixed{
  box-sizing: border-box;
}

section{
  border-left: 1px solid rgba(255, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 0, 0, 0.2);
}
</style>
