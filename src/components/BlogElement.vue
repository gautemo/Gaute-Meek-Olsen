<template>
  <a :href="url" class="container">
      <img :src="img"/>
      <div class="text">
        <h2>{{header}}</h2>
        <p>{{text}}</p>
        <div>
          <b v-if="tags.length > 0">Tags:</b>
          <span v-for="tag in tags" v-bind:key="tag">{{tag}}</span>
        </div>
      </div>
  </a>
</template>

<script>
export default {
  name: 'blogElement',
  props: ['img', 'header', 'text', 'tags', 'url']
}
</script>

<style scoped>
.container {
  border-radius: 15px;
  background: linear-gradient(100deg, whitesmoke -60%, var(--green));
  display: flex;
  text-decoration: none;
  color: inherit;
  margin-bottom: 30px;
}
img {
  height: 180px;
  width: 180px;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
}
.text {
  margin-left: 25px;
  flex: 1;
}

.text span {
  background-color: var(--yellow);
  border-radius: 3px;
  padding: 5px 8px;
  margin: 3px;
  white-space: nowrap;
  display: inline-block;
}

@media only screen and (max-width: 768px) {
  .text > h2 {
    font-size: 1.25em;
  }
  .text {
    margin: 5px 10px;
  }
  .container {
    display: grid;
    grid-template-columns: 40% 60%;
    min-height: 190px;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
