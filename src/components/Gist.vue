<template>
    <div :id="id + file" class="my-gist"></div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'

export default {
  name: 'Gist',
  props: {
    id: {
      type: String,
      required: true
    },
    file: String
  },
  methods: {
    fileparam: function () {
      if (this.file) {
        return `?file=${this.file}`
      }
      return ''
    }
  },
  mounted: function () {
    postscribe('#' + this.id + this.file, `<script src="https://gist.github.com/gautemo/${this.id}.js${this.fileparam()}"><\/script>`)
  }
}
</script>
<style scoped>
.my-gist{
  margin-top: 10px;
}
</style>
