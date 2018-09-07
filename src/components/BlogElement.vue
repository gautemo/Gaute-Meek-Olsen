<template>
  <a :href="url" class="container">
      <img :src="img"/>
      <div class="text">
        <h2>{{header}}</h2>
        <p>{{text}}</p>
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
  background: linear-gradient(
    100deg,
    whitesmoke -60%,
    var(--green)
  );
  display: flex;
  text-decoration: none;
  color: inherit;
  margin-bottom: 30px;
}
img{
    height: 180px;
    width: 180px;
    object-fit: cover;
    border-radius: 15px 0 0 15px;
}
.text{
    margin-left: 25px;
}
</style>
