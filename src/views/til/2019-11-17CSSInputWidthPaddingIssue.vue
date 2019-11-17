
<template>
  <article>
    <h1>Fix input width and padding issue</h1>
    <p>
      Have you tried giving your input element some padding and width, and the width get's messed up.
      Like this:
    </p>
    <span class="code block">input{
      &nbsp;&nbsp;width: 100%;
      &nbsp;&nbsp;padding: 50px;
      }
    </span>
    <input type="text">
    <p>
      Why is my input getting larger then 100%? <span class="smiley">🤷‍😩</span>
    </p>
    <p>This is fixed with box-sizing: border-box</p>
    <span class="code block">input{
      &nbsp;&nbsp;width: 100%;
      &nbsp;&nbsp;padding: 50px;
      &nbsp;&nbsp;box-sizing: border-box;
      }
    </span>
    <input type="text" class="fixed">
    <h6>
      Article red lines are to see full width.
    </h6>
  </article>
</template>

<style scoped>
input{
  width: 100%;
  padding: 50px;
}

.fixed{
  box-sizing: border-box;
}

h6 {
  font-weight: 100;
}

article{
  border-left: 1px solid rgba(255, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 0, 0, 0.2);
  height: 100%;
}
</style>
