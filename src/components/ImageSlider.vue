<template>
  <div>
    <div class="container">
      <div v-if="current > 0" @click="current = current - 1" class="left arrow">❮</div>
      <img :src="images[current].src" />
      <div v-if="current < images.length - 1" @click="current = current + 1" class="right arrow">❯</div>
    </div>
    <figcaption>{{images[current].cap}}</figcaption>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: ['images'],
  data () {
    return {
      current: 0
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  padding-bottom: 56.25%;
}
.arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15%;
  background-color: rgba(231, 202, 82, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 3em;
  color: rgba(255, 255, 255, 0.5);
  z-index: 2;
}
.arrow:hover {
  background-color: rgba(231, 202, 82, 0.6);
  color: rgba(255, 255, 255, 1);
}
.arrow.right {
  right: 0;
}
.arrow.left {
  left: 0;
}
img {
  margin: 0;
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: absolute;
}
figcaption {
  min-height: 2em;
}

@media only screen and (max-width: 768px) {
    figcaption{
        margin: auto 15px;
    }
}
</style>
