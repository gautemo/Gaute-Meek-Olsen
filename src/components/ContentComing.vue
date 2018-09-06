<template>
  <div>
      <h3>Coming soon! Either wait some or jump into your time machine.</h3>
      <img src="../assets/time-for-a-change.jpg" />
  </div>
</template>

<script>
export default {
  name: 'ContentComing'
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h3{
    margin: 35px;
}
img{
    height: 50vh;
    border-radius: 50px;
}
@media only screen and (max-width: 768px) {
    img{
        height: initial;
        width: 70vw;
    }
}
</style>
