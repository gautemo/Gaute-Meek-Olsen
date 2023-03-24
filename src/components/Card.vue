<script setup lang="ts">
import { ref } from 'vue'
import CardType from './CardType.vue'

const types = {
  '⚡': 'Lightning talk',
  '👨‍🏫': 'Presentation',
  '👨‍💻': 'Workshop',
  '🤖': 'Android App',
  '🕸️': 'Web',
} as const

defineProps<{
  image: string
  title: string
  shortTitle?: string
  presented?: string[]
  type?: keyof typeof types
  tech: string[]
  url?: string
  github?: string
  slides?: string
  recording?: string
  color: string
}>()

const dialog = ref<HTMLDialogElement>()
function click(event: MouseEvent) {
  if (dialog.value) {
    const rect = dialog.value.getBoundingClientRect()
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    if (!isInDialog) {
      dialog.value.close()
    }
  }
}
</script>

<template>
  <li @click="dialog?.showModal()" class="card">
    <img :src="image" :alt="`${title} cover`" />
    <h2>
      <span>{{ shortTitle ?? title }}</span>
      <CardType v-if="type" :type="type" />
    </h2>
  </li>
  <dialog ref="dialog" @click="click">
    <h3>{{ title }}</h3>
    <dl>
      <template v-if="type">
        <dt>Type:</dt>
        <dd class="type">
          <CardType :type="type" />
          <span>{{ types[type] }}</span>
        </dd>
      </template>

      <dt>Description:</dt>
      <dd><slot name="description"></slot></dd>

      <template v-if="presented">
        <dt>Presented:</dt>
        <dd>
          <ul>
            <li v-for="p of presented" :key="p">{{ p }}</li>
          </ul>
        </dd>
      </template>

      <template v-if="recording">
        <dt>Recording:</dt>
        <dd>
          <a :href="recording" target="_blank" rel="noopener">{{ recording }}</a>
        </dd>
      </template>

      <template v-if="url">
        <dt>Link:</dt>
        <dd>
          <a :href="url" target="_blank" rel="noopener">{{ url }}</a>
        </dd>
      </template>

      <template v-if="slides">
        <dt>Slides:</dt>
        <dd>
          <a :href="slides" target="_blank" rel="noopener">{{ slides.length > 60 ? 'slides' : slides }}</a>
        </dd>
      </template>

      <template v-if="github">
        <dt>GitHub:</dt>
        <dd>
          <a :href="github" target="_blank" rel="noopener">{{ github }}</a>
        </dd>
      </template>

      <dt>Tech:</dt>
      <dd>
        <ul class="tags">
          <li v-for="t of tech" :key="t">{{ t }}</li>
        </ul>
      </dd>
    </dl>
  </dialog>
</template>

<style scoped>
.card {
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: 0 2px 2px 1px rgba(51, 51, 51, 0.1);
}

.dark .card:hover {
  box-shadow: 0 2px 5px rgba(180, 180, 180, 0.1);
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

h2 {
  flex: 1;
  background-color: v-bind(color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--vp-c-white);
  text-shadow: 2px 2px 1px var(--vp-c-black);
  font-size: 1.5rem;
  line-height: 2.5rem;
  padding: 0 0.5rem;
  margin: 0;
}

dialog {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: none;
  border-top: 5px solid v-bind(color);
  border-radius: 5px;
  min-width: 45vw;
  max-width: 90vw;
  width: 450px;
}

dialog::backdrop {
  background: rgba(126, 126, 126, 0.25);
}

h3 {
  font-size: 1.5rem;
}

dt {
  font-weight: bold;
}

dd {
  margin: 0 0 0.5rem 0;
}

dd.type {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tags {
  width: 100%;
  display: flex;
  gap: 6px;
}

.tags > li {
  background: var(--secondary);
  border-radius: 3px;
  padding: 5px 8px;
  white-space: nowrap;
  display: inline-block;
}

::-webkit-scrollbar-thumb {
  background-color: v-bind(color);
}
</style>
