<template>
    <div class="container">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" :data-text="text" :data-url="url" data-show-count="true">Tweet</a>
        <div class="fb-share-button" :data-href="url" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + url + '&amp;src=sdkpreparse'" class="fb-xfbml-parse-ignore">Share</a></div>
        <div id="linkedin-share"></div>
        <div id="ts"></div>
        <div id="fb-root"></div>
        <div id="ld"></div>
    </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'

export default {
  name: 'Share',
  props: {
    url: {
      type: String,
      required: true
    },
    text: String
  },
  mounted: function () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v3.2'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
    postscribe('#ts', `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>`)
    postscribe('#ld', '<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US<\/script>')
    postscribe('#linkedin-share', `<script type="IN/Share" data-url="${this.url}"><\/script>`)
  }
}
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: min-content min-content min-content;
    grid-column-gap: 10px;
    align-items: center;
}
#linkedin-share{
    padding-top: 5px;
}
</style>
