<template>
    <div :id="id + file"></div>
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
  mounted: function () {
    postscribe('#' + this.id + this.file, `<script src="https://gist.github.com/gautemo/${this.id}.js?file=${this.file}"><\/script>`)
  }
}
</script>
