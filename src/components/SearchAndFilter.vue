<template>
    <div class="filter">
        <label for="search" :class="{above: search}">Search for title or tags</label>
        <input v-model="search" type="text" @input="$emit('update-search', search)" id="search"/>
        <span class="tags selected anim-in" v-for="tag in selectedTags" v-bind:key="tag" @click="removeTag(tag, $event)"><span style="flex:1">{{tag}}</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="24" height="24"><defs><path id="a" d="M0 0h24v24H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg></span>
        <span class="tags dropdown" tabindex="0" v-if="availibleTags.length > 0">Tags <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            <div class="select-tag">
                <div v-for="tag in availibleTags" v-bind:key="tag" @click.stop="chooseTag(tag)">
                    <span>{{tag}}</span>
                    <svg class="check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
            </div>
        </span>
    </div>
</template>

<script>
export default {
  name: 'searchAndFilter',
  props: ['tags'],
  computed: {
    availibleTags: function () {
      return this.tags.filter(t => !this.selectedTags.includes(t))
    }
  },
  methods: {
    chooseTag: function (tag) {
      this.selectedTags.push(tag)
      const el = document.querySelector(':focus')
      if (el) el.blur()
      this.$emit('update-tags', this.selectedTags)
    },
    removeTag: function (tag, event) {
      event.currentTarget.classList.remove('anim')
      event.currentTarget.classList.add('anim-out')
      event.currentTarget.addEventListener('animationend', () => this.selectedTags.splice(this.selectedTags.indexOf(tag), 1))
      this.$emit('update-tags', this.selectedTags)
    }
  },
  data () {
    return {
      search: '',
      selectedTags: []
    }
  }
}
</script>

<style scoped>
.filter {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

label{
  width: 100%;
  transform: translate(10px, 30px);
  transition: all 0.3s ease-in-out;
  opacity: 0.7;
  cursor: text;
}

label.above{
  transform: translate(0, 0);
  opacity: 1;
  cursor: default;
}

input {
  flex: 1;
  font-size: 1.2em;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 3px;
  margin-bottom: 20px;
}

.tags {
  background-color: var(--yellow);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
}

.tags:focus .select-tag {
  display: flex;
}

.select-tag {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  background-color: var(--yellow);
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 0 5px var(--black);
}

.select-tag > div {
  border-bottom: 1px solid #0000003f;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  min-width: 180px;
}

.select-tag > div > .check {
  visibility: hidden;
}

.select-tag > div > span {
  flex: 1;
  padding: 15px 25px 1px 2px;
}

.select-tag > div:hover{
    border-bottom-color: var(--black);
}

.select-tag > div:hover > .check {
  visibility: visible;
}

.tags.selected {
  max-width: fit-content;
  overflow: hidden;
  white-space: nowrap;
}

.anim-in {
  animation: grow 1s;
}

.anim-out {
  animation: leave 0.7s forwards;
}

@keyframes grow {
  0% {
    width: 0;
  }
  100% {
    width: 150px;
  }
}
@keyframes leave {
  0% {
    width: 150px;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
    margin-left: 0;
    padding: 0;
  }
}

@media only screen and (max-width: 768px) {
    input{
        width: 100%;
        flex: auto;
    }

    .tags{
        padding: 5px;
    }

    .tags.dropdown{
        margin-left: auto;
    }
}
</style>
