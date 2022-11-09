<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  options: string[]
}>()

const picked = ref(props.options[0])
</script>

<template>
  <div class="toggle">
    <label v-for="option in props.options" :key="option">
      <input type="radio" :value="option" v-model="picked" name="toggle-view" />
      <span>{{ option }}</span>
    </label>
  </div>
  <div v-for="(option, i) in props.options" :key="option">
    <slot :name="i" v-if="picked === option"></slot>
  </div>
</template>

<style scoped>
.toggle {
  --corners: 5px;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: var(--corners);
  width: fit-content;
  display: flex;
}

input {
  display: none;
}

label {
  cursor: pointer;
  min-width: 80px;
  text-align: center;
  overflow: hidden;
}

label:first-child {
  border-top-left-radius: var(--corners);
  border-bottom-left-radius: var(--corners);
}

label:last-child {
  border-top-right-radius: var(--corners);
  border-bottom-right-radius: var(--corners);
}

label > span {
  padding: 10px;
  display: block;
}

input:checked + span {
  background-color: var(--secondary);
}
</style>
