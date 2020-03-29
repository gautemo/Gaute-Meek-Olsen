<template>
    <span tabindex="0" class="hover-me" v-bind:class="hoverMeClasses">{{hoverMe}}
        <div class="hover-text">
            <p>{{hoverText}}</p>
        </div>
    </span>
</template>

<script>
export default {
  name: 'HoverText',
  props: ['hoverMeClasses', 'hoverMe', 'hoverText']
}
</script>

<style scoped>
.hover-text {
  display: none;
  width: 500px;
  position: absolute;
  z-index: 100;
}
.hover-text p {
  max-width: 500px;
  width: fit-content;
  border-radius: 5px;
  padding: 15px;
  background-color: var(--orange);
  font-size: 1rem;
  font-weight: normal;
  margin-top: -30px;
}

.hover-me {
  display: inline-block;
  position: relative;
  outline: none;
}

.hover-me:hover .hover-text,
.hover-me:focus .hover-text {
  display: block;
}
</style>
