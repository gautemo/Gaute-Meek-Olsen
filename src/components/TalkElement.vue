<script setup lang="ts">
defineProps<{
  title: string
  held: string[]
  slides?: string
  watch?: string
}>()
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="h of held">{{ h }}</li>
    </ul>
    <a v-if="watch" :href="watch" target="_blank" rel="noopener" class="watch">Watch</a>
    <a v-if="slides" :href="slides" target="_blank" rel="noopener" class="slides">Slides</a>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-areas:
    'title watch slides'
    'held . .';
  gap: 0 1rem;
  align-items: start;
  margin-bottom: 2rem;
  max-width: 700px;
}

p {
  grid-area: title;
  margin-bottom: 2px;
}

ul {
  grid-area: held;
  font-size: 0.8rem;
  opacity: 0.9;
}

.watch {
  grid-area: watch;
}

.slides {
  grid-area: slides;
}
</style>
