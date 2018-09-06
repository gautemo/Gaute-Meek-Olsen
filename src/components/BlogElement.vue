<template>
  <div>
      <img :src="img"/>
      <h2>{{header}}</h2>
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'blogElement',
  props: {
      img: '',
      header: '',
      text: '',
      tags: '',
  },
  data: function () {
    return {
      test: 'japp'
    }
  }
}
</script>

<style scoped>

</style>